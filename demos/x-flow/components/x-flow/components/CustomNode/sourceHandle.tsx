import { PlusOutlined } from '@ant-design/icons';
import { Handle } from '@xyflow/react';
import { Tooltip } from 'antd';
import React, { memo, useContext, useEffect, useMemo, useRef, useState } from 'react';
import NodeSelectPopover from '../NodesPopover';
import { ConfigContext } from '../../models/context';

export default memo((props: any) => {
  const { position, isConnectable, selected, dragging, isHovered, handleAddNode, switchTitle, ...rest } = props;
  const [isShowTooltip, setIsShowTooltip] = useState(false);
  // const isShowTooltipRef = useRef(false);

  const [openNodeSelectPopover, setOpenNodeSelectPopover] = useState(false);
  const popoverRef = useRef(null);
  const { globalConfig }: any = useContext(ConfigContext);
  const handleProps = globalConfig?.handle || {};

  const handleMouseEnter = () => {
    if (!dragging) {
      setIsShowTooltip(true);
    }
    // isShowTooltipRef.current = true;
  };

  const handleMouseLeave = () => {
    if (!dragging) {
      setIsShowTooltip(false);
    }
  };

  return (
    <Handle
      type="source"
      position={position}
      isConnectable={isConnectable}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={(e) => {
        e.stopPropagation();
        // @ts-ignore
        popoverRef?.current?.changeOpen(true);
        // isShowTooltipRef.current = false;
        setIsShowTooltip(false);
        setOpenNodeSelectPopover(true);
      }}
      {...handleProps}
      {...rest}
    >
      {(selected || isHovered || openNodeSelectPopover) && (
        <>
          {switchTitle && <div className="xflow-node-switch-title">{switchTitle}</div>}
          {isConnectable && (
            <div className="xflow-node-add-box">
              <NodeSelectPopover
                placement="right"
                addNode={handleAddNode}
                ref={popoverRef}
                onNodeSelectPopoverChange={(val: any) => setOpenNodeSelectPopover(val)}
              >
                {!dragging && (
                  <Tooltip
                    title="Click add node"
                    arrow={false}
                    style={{
                      background: '#fff',
                      color: '#354052',
                      fontSize: '12px',
                    }}
                    open={isShowTooltip}
                    color="#fff"
                    getPopupContainer={() => document.getElementById('xflow-container') as HTMLElement}
                  >
                    <PlusOutlined style={{ color: '#fff', fontSize: 10 }} />
                  </Tooltip>
                )}
              </NodeSelectPopover>
            </div>
          )}
        </>
      )}
    </Handle>
  );
});
