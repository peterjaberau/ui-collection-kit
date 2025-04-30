'use client';
import { Empty } from 'antd';
import { memo } from 'react';
import { shallow } from 'zustand/shallow';
import { useStore } from '../../../hooks/useStore';
import { isTruthy } from '../../../utils';
import TrackNodeItem from './TrackNodeItem';

// Tracking panel, the default value shows the state of the node
export default memo((props: any) => {
  const { logList, onTrackCollapseChange } = props;
  const { nodes, setNodes } = useStore(
    (state: any) => ({
      nodes: state.nodes,
      setNodes: state.setNodes,
    }),
    shallow,
  );

  const statusNode = (nodes || [])?.filter((item: any) => isTruthy(item?.data?._status));
  const trackList = (statusNode || [])?.map((node: any) => {
    const logTrackList = logList?.find((item: any) => item?.nodeId == node?.id);
    return { ...node, logTrackList: logTrackList?.codePanel || [] };
  });

  return (
    <div className="log-track-panel">
      {trackList?.length ? (
        (trackList || [])?.map((item: any, index: any) => (
          <TrackNodeItem
            nodeType={item?.data?._nodeType}
            key={item?.id}
            nodeStatus={item?.data?._status}
            node={item}
            logTrackList={item?.logTrackList || []}
            onTrackCollapseChange={onTrackCollapseChange}
          />
        ))
      ) : (
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="No stateful nodes yet" style={{ fontSize: '12px' }} />
      )}
    </div>
  );
});
