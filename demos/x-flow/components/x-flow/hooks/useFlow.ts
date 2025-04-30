import { useMemo } from 'react';
import { useMemoizedFn } from 'ahooks';
import { Edge, useReactFlow } from '@xyflow/react';

import { FlowNode } from '../models/store';
import { useStoreApi } from './useStore';
import { useTemporalStore } from './useTemporalStore';
import autoLayoutNodes from '../utils/autoLayoutNodes';
import { generateCopyNodes, uuid } from '../utils';
import { message } from 'antd';

// useFlow maintenance principle
// 1. Try to reuse existing methods of reactflow instead of reinventing the wheel
// 2. Do not expose new methods and states unless necessary

export const useFlow = () => {
  const storeApi = useStoreApi();
  const instance = storeApi.getState();

  const {
    zoomIn,
    zoomOut,
    zoomTo,
    getZoom,
    setViewport,
    getViewport,
    fitView,
    setCenter,
    fitBounds,
    toObject: _toObject,
    getNodes: _getNodes,
    getEdges,
    screenToFlowPosition,
    flowToScreenPosition,
  } = useReactFlow();

  const { record } = useTemporalStore();

  const toObject = useMemoizedFn(() => {
    const { nodes, ...rest } = _toObject();
    return {
      ...rest,
      nodes: getNodes(nodes),
    };
  });

  const getFlowData = () => {
    const { nodes, edges } = _toObject();
    return {
      edges,
      nodes: getNodes(nodes),
    };
  };

  const setFlowData = ({ nodes, edges }: any) => {
    if (!!nodes) {
      setNodes(nodes);
    }

    if (!!edges) {
      setEdges(edges);
    }
  };

  const getNodes = useMemoizedFn((_nodes: any) => {
    const nodes = _nodes || _getNodes();
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
  });

  const setNodes = useMemoizedFn((nodes: FlowNode[]) => {
    storeApi.getState().setNodes(nodes);
  });

  const addNodes = useMemoizedFn((nodes: FlowNode[]) => {
    record(() => {
      storeApi.getState().addNodes(nodes);
    });
  });

  const setEdges = useMemoizedFn((edges: Edge[]) => {
    storeApi.getState().setEdges(edges);
  });

  const addEdges = useMemoizedFn((edges: Edge[]) => {
    storeApi.getState().addEdges(edges);
  });

  const copyNode = useMemoizedFn((nodeId) => {
    // @ts-ignore
    const copyNodes = generateCopyNodes(storeApi.getState().nodes.find((node) => node.id === nodeId));
    storeApi.setState({
      copyNodes,
    });
  });

  const pasteNode = useMemoizedFn((nodeId: string, data: any) => {
    if (storeApi.getState().copyNodes.length > 0) {
      const newEdges = {
        id: uuid(),
        source: nodeId,
        target: storeApi.getState().copyNodes[0].id,
        ...data,
      };
      record(() => {
        storeApi.getState().addNodes(storeApi.getState().copyNodes, false);
      });
      storeApi.getState().addEdges(newEdges);
      storeApi.setState({
        copyNodes: [],
      });
    } else {
      message.warning('Please copy the node first！');
    }
  });

  const deleteNode = useMemoizedFn((nodeId) => {
    record(() => {
      storeApi.setState({
        // @ts-ignore
        edges: storeApi.getState().edges.filter((edge) => edge.source !== nodeId && edge.target !== nodeId),
      });
    });
    record(() => {
      storeApi.setState({
        // @ts-ignore
        nodes: storeApi.getState().nodes.filter((node) => node.id !== nodeId),
      });
    });
  });

  const runAutoLayout = useMemoizedFn(() => {
    const newNodes: any = autoLayoutNodes(
      storeApi.getState().nodes,
      storeApi.getState().edges,
      // @ts-ignore
      storeApi.getState().layout,
    );
    setNodes(newNodes);
  });

  return useMemo(
    () => ({
      setNodes,
      addNodes,
      setEdges,
      addEdges,
      getFlowData,
      setFlowData,
      getNodes,
      getEdges,
      toObject,
      zoomIn,
      zoomOut,
      zoomTo,
      getZoom,
      setViewport,
      getViewport,
      fitView,
      setCenter,
      fitBounds,
      screenToFlowPosition,
      flowToScreenPosition,
      runAutoLayout,
      copyNode,
      pasteNode,
      deleteNode,
    }),
    [instance],
  );
};
