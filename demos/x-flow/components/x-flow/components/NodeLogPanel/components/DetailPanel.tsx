'use client';
import { isEmpty, isObject } from 'lodash-es';
import { memo, useState } from 'react';
import CodePanel from './CodePanel';
import StatusPanel from './StatusPanel';
import classNames from 'classnames';

export default memo((props: any) => {
  const { detailData, currentStatus } = props;
  const isRenderStatus = isObject(detailData?.statusPanel) && !isEmpty(detailData?.statusPanel);
  const [isFullScreen, setIsFullScreen] = useState(false);

  return (
    <div className={classNames('log-detail-panel', { ['log-detail-panel-code-full']: isFullScreen })}>
      {isRenderStatus && <StatusPanel currentStatus={currentStatus} statusPanelData={detailData?.statusPanel} />}
      {(detailData?.codePanel || [])?.map((item: any, index: any) => (
        <CodePanel
          codeData={item}
          key={index}
          onFullScreenChange={(isFullScreen: any) => {
            setIsFullScreen(isFullScreen);
          }}
        />
      ))}
    </div>
  );
});
