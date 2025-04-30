import { Background, BackgroundVariant, MarkerType, ReactFlow, useReactFlow } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { useEventListener, useMemoizedFn } from 'ahooks';
import { produce, setAutoFreeze } from 'immer';
import { debounce, isFunction } from 'lodash';
import type { FC } from 'react';
import React, { memo, useContext, useEffect, useMemo, useRef, useState } from 'react';
import CandidateNode from './components/CandidateNode';
import CustomEdge from './components/CustomEdge';
import PanelContainer from './components/PanelContainer';
import PanelStatusLogContainer from './components/PanelStatusLogContainer';
import { useEventEmitterContextContext } from './models/event-emitter';

import CustomNodeComponent from './components/CustomNode';
import { useStore, useStoreApi } from './hooks/useStore';

import Operator from './operator';
import FlowProps from './types';
import { isTruthy, uuid, uuid4 } from './utils';
import autoLayoutNodes from './utils/autoLayoutNodes';

import { message } from 'antd';
import { shallow } from 'zustand/shallow';
import NodeEditor from './components/NodeEditor';
import NodeLogPanel from './components/NodeLogPanel';
import { useTemporalStore } from './hooks/useTemporalStore';
import './index.css';
import { ConfigContext } from './models/context';

const CustomNode = memo(CustomNodeComponent);
const edgeTypes = { buttonedge: memo(CustomEdge) };

/***
 *
 * XFlow
 *
 */
const XFlow: FC<FlowProps> = memo((props) => {
  const workflowContainerRef = useRef<HTMLDivElement>(null);
  const storeApi = useStoreApi();
  const { zoomTo } = useReactFlow();
  const {
    key,
    layout,
    nodes,
    edges,
    setNodes,
    setEdges,
    panOnDrag,
    onNodesChange,
    onEdgesChange,
    onConnect,
    setCandidateNode,
    isAddingNode,
    setMousePosition,
  } = useStore(
    (s) => ({
      key: s.key,
      nodes: s.nodes,
      edges: s.edges,
      setNodes: s.setNodes,
      setEdges: s.setEdges,
      layout: s.layout,
      panOnDrag: s.panOnDrag,
      setMousePosition: s.setMousePosition,
      isAddingNode: s.isAddingNode,
      setCandidateNode: s.setCandidateNode,
      onNodesChange: s.onNodesChange,
      onEdgesChange: s.onEdgesChange,
      onConnect: s.onConnect,
    }),
    shallow,
  );
  const { record } = useTemporalStore();
  const [activeNode, setActiveNode] = useState<any>(null);
  const { settingMap, globalConfig, readOnly }: any = useContext(ConfigContext);
  const [openPanel, setOpenPanel] = useState<boolean>(true);
  const [openLogPanel, setOpenLogPanel] = useState<boolean>(true);
  const { onNodeClick } = props;
  const nodeEditorRef = useRef(null);

  useEffect(() => {
    zoomTo(0.8);
    setAutoFreeze(false);
    return () => {
      setAutoFreeze(true);
    };
  }, []);

  useEventListener('keydown', (e) => {
    if ((e.key === 'd' || e.key === 'D') && (e.ctrlKey || e.metaKey)) e.preventDefault();
    if ((e.key === 'z' || e.key === 'Z') && (e.ctrlKey || e.metaKey)) e.preventDefault();
    if ((e.key === 'y' || e.key === 'Y') && (e.ctrlKey || e.metaKey)) e.preventDefault();
    if ((e.key === 's' || e.key === 'S') && (e.ctrlKey || e.metaKey)) e.preventDefault();
  });

  useEventListener(
    'mousemove',
    (e) => {
      const containerClientRect = workflowContainerRef.current?.getBoundingClientRect();
      if (containerClientRect) {
        setMousePosition({
          pageX: e.clientX,
          pageY: e.clientY,
          elementX: e.clientX - containerClientRect.left,
          elementY: e.clientY - containerClientRect.top,
        });
      }
    },
    {
      target: workflowContainerRef.current,
      enable: isAddingNode,
    },
  );

  const { eventEmitter } = useEventEmitterContextContext();
  eventEmitter?.useSubscription((v: any) => {
    // canvas
    if (v.type === 'auto-layout-nodes') {
      const newNodes: any = autoLayoutNodes(storeApi.getState().nodes, edges, layout as any);
      setNodes(newNodes, false);
    }

    if (v.type === 'deleteNode') {
      setActiveNode(null);
    }
  });

  // Add new node
  const handleAddNode = (data: any) => {
    const title = settingMap[data?._nodeType]?.title || data?._nodeType;
    const newNode = {
      id: uuid(),
      type: 'custom',
      data: {
        title: `${title}_${uuid4()}`,
        ...data,
      },
      position: {
        x: 0,
        y: 0,
      },
    };
    setCandidateNode(newNode);
  };

  // edge Move in/out effect
  const getUpdateEdgeConfig = useMemoizedFn((edge: any, color: string) => {
    const newEdges: any = produce(edges, (draft: any) => {
      const currEdge: any = draft.find((e: any) => e.id === edge.id);
      currEdge.style = {
        ...edge.style,
        stroke: color,
      };
      currEdge.markerEnd = {
        ...edge?.markerEnd,
        color,
      };
    });
    setEdges(newEdges);
  });

  const handleNodeValueChange = debounce((data: any) => {
    for (let node of nodes as any) {
      if (node.id === data.id) {
        node.data = {
          ...node?.data,
          ...data?.values,
        };
        break;
      }
    }
    setNodes([...(nodes as any)], false);
  }, 200);

  const nodeTypes = useMemo(() => {
    return {
      custom: (props: any) => {
        const { data, id, ...rest } = props;
        const { _nodeType, _status, ...restData } = data || {};
        return (
          <CustomNode
            {...rest}
            id={id}
            data={{ ...restData }}
            type={_nodeType}
            layout={layout}
            status={_status}
            onClick={async (e: any) => {
              // @ts-ignore
              if (nodeEditorRef?.current?.validateForm) {
                // @ts-ignore
                const result = await nodeEditorRef?.current?.validateForm();
                if (!result) {
                  message.error('Please check the required items！');
                  return;
                }
              }
              setActiveNode({
                id,
                _nodeType,
                values: { ...restData },
                _status,
              });
              setOpenPanel(true);
              setOpenLogPanel(true);
            }}
          />
        );
      },
    };
  }, [layout]);

  const NodeEditorWrap = useMemo(() => {
    return (
      <NodeEditor
        ref={nodeEditorRef}
        data={activeNode?.values}
        onChange={handleNodeValueChange}
        nodeType={activeNode?._nodeType}
        id={activeNode?.id}
      />
    );
  }, [activeNode?.id]);

  const NodeLogWrap = useMemo(() => {
    return (
      <NodeLogPanel
        data={activeNode?.values}
        onChange={handleNodeValueChange}
        nodeType={activeNode?._nodeType}
        id={activeNode?.id}
        node={activeNode}
        onTrackCollapseChange={(data) => {
          if (data) {
            setActiveNode(data);
            setOpenPanel(true);
          }
        }}
      />
    );
  }, [activeNode?.id]);

  const deletable = globalConfig?.edge?.deletable ?? true;
  const panelonClose = globalConfig?.nodePanel?.onClose;
  const isNodePanelHidden = globalConfig?.nodePanel?.hidden || false;

  const getNodesJ = (nodes: any) => {
    const result = nodes.map((item: any) => {
      const { data, ...rest } = item;
      const { _nodeType, ...restData } = data;
      return {
        ...rest,
        data: restData,
        type: _nodeType,
      };
    });
    return result;
  };

  return (
    <div id="xflow-container" ref={workflowContainerRef}>
      <ReactFlow
        key={key}
        panOnDrag={panOnDrag}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        nodes={nodes}
        edges={edges}
        minZoom={0.3}
        defaultEdgeOptions={{
          type: 'buttonedge',
          style: {
            strokeWidth: 1.5, // 线粗细
          },
          markerEnd: {
            type: MarkerType.ArrowClosed, // Arrowhead
          },
          deletable: deletable, //The default connection attribute is controlled by this
        }}
        onBeforeDelete={async () => {
          if (readOnly) {
            return false;
          }
          return true;
        }}
        onConnect={onConnect}
        onNodesChange={(changes) => {
          changes.forEach((change) => {
            if (change.type === 'remove') {
              record(() => {
                onNodesChange([change]);
              });
            } else {
              onNodesChange([change]);
            }
          });
        }}
        onEdgesChange={(changes) => {
          changes.forEach((change) => {
            if (change.type === 'remove') {
              record(() => {
                onEdgesChange([change]);
              });
            } else {
              onEdgesChange([change]);
            }
          });
        }}
        onEdgeMouseEnter={(_, edge: any) => {
          getUpdateEdgeConfig(edge, '#2970ff');
        }}
        onEdgeMouseLeave={(_, edge) => {
          getUpdateEdgeConfig(edge, '#c9c9c9');
        }}
        onNodesDelete={() => {
          // setActiveNode(null);
        }}
        onNodeClick={(event, node) => {
          onNodeClick && onNodeClick(event, node);
        }}
        deleteKeyCode={globalConfig?.deleteKeyCode}
      >
        <CandidateNode />
        <Operator addNode={handleAddNode} xflowRef={workflowContainerRef} />
        <Background gap={[16, 16]} size={0.6} color="black" variant={BackgroundVariant.Dots} />
        {activeNode && openPanel && !isNodePanelHidden && (
          <PanelContainer
            id={activeNode?.id}
            nodeType={activeNode?._nodeType}
            onClose={async () => {
              // Panel close the verification form
              // @ts-ignore
              const result = await nodeEditorRef?.current?.validateForm();
              if (!result) {
                return;
              }
              setOpenPanel(false);

              // If the log panel is closed
              if (!isTruthy(activeNode?._status) || !openLogPanel) {
                setActiveNode(null);
              }
              if (isFunction(panelonClose)) {
                panelonClose(activeNode?.id);
              }
            }}
            node={activeNode}
            data={activeNode?.values}
            openLogPanel={openLogPanel}
          >
            {NodeEditorWrap}
          </PanelContainer>
        )}
        {isTruthy(activeNode?._status) && openLogPanel && (
          <PanelStatusLogContainer
            id={activeNode?.id}
            nodeType={activeNode?._nodeType}
            onClose={() => {
              setOpenLogPanel(false);
              !openPanel && setActiveNode(null);
            }}
            data={activeNode?.values}
          >
            {NodeLogWrap}
          </PanelStatusLogContainer>
        )}
      </ReactFlow>
    </div>
  );
});

export default XFlow;
