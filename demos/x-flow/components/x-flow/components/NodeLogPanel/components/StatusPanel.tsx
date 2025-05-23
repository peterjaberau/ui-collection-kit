'use client';
import { Badge, Divider, Space } from 'antd';
import classNames from 'classnames';
import { isString } from 'lodash';
import { memo, useContext } from 'react';
import { ConfigContext } from '../../../models/context';
import { getTransparentColor, transformNodeStatus } from '../../../utils';
import TextEllipsis from '../../TextEllipsis';
import '../index.css';

const StatusItem = ({ title, content, isBadge, color, colorLabel }: any) => {
  return (
    <div className="log-status-item">
      <Space style={{ width: '100%' }} direction="vertical" size={2}>
        <TextEllipsis text={title} className="log-status-item-title" />
        {isBadge ? (
          <Badge color={color} text={content || colorLabel} className="log-status-item-badge" />
        ) : (
          <TextEllipsis text={content} className="log-status-item-content" />
        )}
      </Space>
    </div>
  );
};

export default memo((props: any) => {
  const { currentStatus, statusPanelData: renderData }: any = props;
  const { globalConfig }: any = useContext(ConfigContext);
  const {
    nodeView: { status = [] },
  } = globalConfig;
  const statusObj: any = transformNodeStatus(status || []);
  const statusColor = statusObj[currentStatus]?.color;
  const backgroundColor = getTransparentColor(statusColor, 0.1);
  const boxShadowColor = getTransparentColor(statusColor, 0.2);

  return (
    <div
      className="log-status-panel"
      style={
        {
          '--status-color': statusColor,
          '--status-bg-color': backgroundColor,
          '--status-box-shadow': boxShadowColor,
        } as React.CSSProperties
      }
    >
      <div
        className={classNames('log-status-panel-wrap', {
          'log-status-panel-single': renderData?.status?.length == 1,
        })}
      >
        {(renderData?.status || [])?.map((item: any, index: any) => (
          <StatusItem
            title={item?.label}
            content={item?.value}
            key={index}
            isBadge={item?.isBadge || false}
            color={statusColor}
            colorLabel={statusObj[currentStatus]?.name}
          />
        ))}
      </div>
      {renderData?.status?.length && renderData?.extra && <Divider style={{ margin: '6px 0' }} />}
      {renderData?.extra && (
        <div className="log-status-panel-extra">
          {isString(renderData?.extra) ? (
            <TextEllipsis text={renderData?.extra} className="log-status-panel-extra-text" type="paragraph" rows={3} />
          ) : (
            <>{renderData?.extra}</>
          )}
        </div>
      )}
    </div>
  );
});
