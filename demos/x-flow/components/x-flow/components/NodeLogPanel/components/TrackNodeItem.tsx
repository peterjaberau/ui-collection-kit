'use client';
import { Badge, Collapse, Empty } from 'antd';
import { memo, useContext, useMemo } from 'react';
import { ConfigContext } from '../../../models/context';
import { transformNodeStatus } from '../../../utils';
import createIconFont from '../../../utils/createIconFont';
import TextEllipsis from '../../TextEllipsis';
import CodePanel from './CodePanel';

const { Panel } = Collapse;
interface ITrackNodeItemProps {
  nodeType: string;
  nodeStatus: string;
  node: any;
  logTrackList?: []; // Default tracking data
  onTrackCollapseChange: (data: any) => void;
}

export default memo((props: ITrackNodeItemProps) => {
  const { nodeType, nodeStatus, node, logTrackList, onTrackCollapseChange } = props;

  const { settingMap, iconFontUrl, globalConfig, widgets }: any = useContext(ConfigContext);
  const Icon = useMemo(() => createIconFont(iconFontUrl), [iconFontUrl]);
  const nodeSetting = settingMap[nodeType] || {};
  const { iconSvg } = nodeSetting;
  const {
    nodeView: { status = [] },
    logPanel,
  } = globalConfig;
  const statusObj: any = transformNodeStatus(status || []);
  const statusData: any = statusObj[nodeStatus];

  return (
    <div className="log-track-node">
      <Collapse
        className="log-track-collapse"
        onChange={(arr) => {
          if (node) {
            const { _nodeType, _status, ...rest } = node?.data;
            onTrackCollapseChange({
              id: node?.id,
              values: { ...rest },
              _nodeType,
              _status,
            });
          }
        }}
        items={[
          {
            key: node?.id,
            label: (
              <div className="track-collapse-header">
                {/* <span */}
                {/*   className="track-icon-box" */}
                {/*   style={{ */}
                {/*     background: nodeSetting?.icon?.bgColor || '#F79009', */}
                {/*   }} */}
                {/* > */}
                {/*   {iconSvg ? iconSvg : <Icon style={{ fontSize: 14, color: '#fff' }} type={nodeSetting?.icon?.type} />} */}
                {/* </span> */}
                <TextEllipsis
                  text={node?.data?.title || nodeSetting?.title}
                  style={{ width: '100%', fontSize: '12px' }}
                />
              </div>
            ),
            className: 'log-track-collapse-panel',
            extra: statusData ? (
              <Badge color={statusData?.color} text={statusData?.name} className="track-extra-badge" />
            ) : null,
            children: logTrackList?.length ? (
              logTrackList.map((item, index) => <CodePanel codeData={item} key={index} isShowFullScreen={false} />)
            ) : (
              <Empty
                image={Empty.PRESENTED_IMAGE_SIMPLE}
                description="No log information yet"
                style={{ fontSize: '12px' }}
              />
            ),
          },
        ]}
      />
    </div>
  );
});
