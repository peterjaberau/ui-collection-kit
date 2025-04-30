'use client';
import { Button, Tooltip } from 'antd';
import type { MouseEvent } from 'react';
import { memo, useContext } from 'react';
import IconView from '../../components/IconView';
import NodeSelectPopover from '../../components/NodesPopover';
import { useStore, useStoreApi } from '../../hooks/useStore';
import { ConfigContext } from '../../models/context';
import { useEventEmitterContextContext } from '../../models/event-emitter';

import { useFullscreen } from 'ahooks';
import './index.css';

const Control = (props: any) => {
  const { addNode, xflowRef } = props;
  const [isFullscreen, { toggleFullscreen }] = useFullscreen(xflowRef);
  const { globalConfig, readOnly }: any = useContext(ConfigContext);

  const hideAddNode = globalConfig?.controls?.hideAddNode ?? false;
  const hideAnnotate = globalConfig?.controls?.hideAnnotate ?? false;

  const { setIsAddingNode, panOnDrag } = useStore((s) => ({
    setIsAddingNode: s.setIsAddingNode,
    panOnDrag: s.panOnDrag,
  }));

  const addNote = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsAddingNode(true);
    addNode({ _nodeType: 'Note' });
  };
  const storeApi = useStoreApi();

  const { eventEmitter } = useEventEmitterContextContext();

  const handleInteractionModeChange = (panOnDrag: any) => {
    storeApi.setState({ panOnDrag });
  };

  return (
    <div className="fai-reactflow-control">
      {!hideAddNode && !readOnly && (
        <NodeSelectPopover addNode={addNode}>
          <Tooltip title="Add Node" getPopupContainer={() => document.getElementById('xflow-container') as HTMLElement}>
            <Button type="text" icon={<IconView type="icon-add-circle" className="icon" />} />
          </Tooltip>
        </NodeSelectPopover>
      )}
      {!hideAnnotate && !readOnly && (
        <Tooltip
          title="Add Comment"
          getPopupContainer={() => document.getElementById('xflow-container') as HTMLElement}
        >
          <Button type="text" icon={<IconView type="icon-sticky-note-add-line" className="icon" />} onClick={addNote} />
        </Tooltip>
      )}
      {!(hideAddNode && hideAnnotate) && !readOnly && <div className="separator"></div>}
      <Tooltip title="Pointer Mode" getPopupContainer={() => document.getElementById('xflow-container') as HTMLElement}>
        <Button
          type="text"
          icon={
            <IconView
              type="icon-zhizhen"
              className="icon"
              style={{
                color: !panOnDrag ? 'rgb(21,94,239)' : '#666F83',
                fontSize: '14px',
              }}
            />
          }
          onClick={() => panOnDrag && handleInteractionModeChange(false)}
          style={{ backgroundColor: !panOnDrag ? 'rgb(239,244,255)' : '' }}
        />
      </Tooltip>
      <Tooltip title="Hand Mode" getPopupContainer={() => document.getElementById('xflow-container') as HTMLElement}>
        <Button
          type="text"
          icon={
            <IconView
              type="icon-xianxingshouzhangtubiao"
              className="icon"
              style={{
                color: panOnDrag ? 'rgb(21,94,239)' : '#666F83',
              }}
            />
          }
          onClick={() => !panOnDrag && handleInteractionModeChange(true)}
          style={{
            backgroundColor: panOnDrag ? 'rgb(239,244,255)' : '',
            marginLeft: '1px',
          }}
        />
      </Tooltip>
      <div className="separator"></div>
      <Tooltip
        title="Organize the canvas"
        getPopupContainer={() => document.getElementById('xflow-container') as HTMLElement}
      >
        <Button
          type="text"
          icon={<IconView type="icon-function-add-line1" className="icon" />}
          onClick={() => {
            eventEmitter?.emit({ type: 'auto-layout-nodes' } as any);
          }}
        />
      </Tooltip>
      <Tooltip
        title="Canvas Full Screen"
        getPopupContainer={() => document.getElementById('xflow-container') as HTMLElement}
      >
        <Button
          type="text"
          icon={
            <IconView
              type={isFullscreen ? 'icon-fullscreen-exit' : 'icon-fullscreen'}
              className="icon"
              style={{ fontSize: '14px' }}
            />
          }
          onClick={toggleFullscreen}
        />
      </Tooltip>
    </div>
  );
};

export default memo(Control);
