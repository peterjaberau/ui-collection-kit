'use client';
import { Empty, Spin, Tabs } from 'antd';
import { FC, useContext } from 'react';
import { ConfigContext } from '../../models/context';
import DetailPanel from './components/DetailPanel';
import TrackPanel from './components/TrackPanel';
import './index.css';
import { isArray } from 'lodash';

interface INodeEditorProps {
  data: any;
  onChange: (data: any) => void;
  nodeType: string;
  id: string;
  node: any;
  onTrackCollapseChange: (data: any) => void; // Tracking panel click collapse method
  [key: string]: any;
}

const NodeLogPanel: FC<INodeEditorProps> = (props: any) => {
  const { id, node, onTrackCollapseChange }: any = props;
  const { widgets, globalConfig, logPanel }: any = useContext(ConfigContext);
  const {
    // @ts-ignore
    nodeView: { status = [] },
  } = globalConfig;
  const CustomWidget = widgets[logPanel?.logWidget]; // Built-in setting component
  const logData = isArray(logPanel?.logList)
    ? (logPanel?.logList || [])?.find((item: any) => item?.nodeId === id)
    : logPanel?.logList;

  if (logPanel?.logWidget && CustomWidget) {
    return <CustomWidget logList={logPanel?.logList} node={node} />;
  } else {
    return (
      <div className="node-log-container">
        <Spin spinning={Boolean(logPanel?.loading)}>
          <Tabs
            size="small"
            className="log-header-tab"
            items={[
              {
                label: 'Details',
                key: 'detail',
                children: (
                  <>
                    {logData ? (
                      <DetailPanel currentStatus={node?._status} detailData={logData} />
                    ) : (
                      <Empty
                        image={Empty.PRESENTED_IMAGE_SIMPLE}
                        description="No log information yet"
                        style={{ fontSize: '12px' }}
                      />
                    )}
                  </>
                ),
              },
              {
                label: 'Track',
                key: 'track',
                children: (
                  <>
                    <TrackPanel logList={logPanel?.logList || []} onTrackCollapseChange={onTrackCollapseChange} />
                  </>
                ),
              },
            ]}
          />
        </Spin>
      </div>
    );
  }
};

export default NodeLogPanel;
