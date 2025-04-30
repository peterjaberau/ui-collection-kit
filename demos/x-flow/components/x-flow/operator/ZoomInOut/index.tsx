'use client';
import { useReactFlow, useViewport } from '@xyflow/react';
import { Button, Popover, Tooltip } from 'antd';
import type { FC } from 'react';
import { Fragment, memo } from 'react';
import IconView from '../../components/IconView';
import { getKeyboardKeyNameBySystem } from '../../utils';
import './index.css';
import ShortcutsName from './shortcuts-name';

enum ZoomType {
  zoomIn = 'zoomIn',
  zoomOut = 'zoomOut',
  zoomToFit = 'zoomToFit',
  zoomTo25 = 'zoomTo25',
  zoomTo50 = 'zoomTo50',
  zoomTo75 = 'zoomTo75',
  zoomTo100 = 'zoomTo100',
  zoomTo200 = 'zoomTo200',
}

const ZOOM_IN_OUT_OPTIONS = [
  [
    {
      key: ZoomType.zoomTo200,
      text: '200%',
    },
    {
      key: ZoomType.zoomTo100,
      text: '100%',
    },
    {
      key: ZoomType.zoomTo75,
      text: '75%',
    },
    {
      key: ZoomType.zoomTo50,
      text: '50%',
    },
    {
      key: ZoomType.zoomTo25,
      text: '25%',
    },
  ],
  [
    {
      key: ZoomType.zoomToFit,
      text: 'zoomToFit',
    },
  ],
];

const ZoomSelect = ({ handleZoom }: any) => {
  return (
    <div className="fai-reactflow-zoom-select">
      {ZOOM_IN_OUT_OPTIONS.map((options, i) => (
        <Fragment key={i}>
          {i !== 0 && <div className="parting-line" />}
          <div className="p-1">
            {options.map((option) => (
              <div className="zoom-item" key={option.key} onClick={() => handleZoom(option.key)}>
                {option.text}
                {option.key === ZoomType.zoomToFit && (
                  <ShortcutsName keys={[`${getKeyboardKeyNameBySystem('ctrl')}`, '1']} />
                )}
                {option.key === ZoomType.zoomTo50 && <ShortcutsName keys={['shift', '5']} />}
                {option.key === ZoomType.zoomTo100 && <ShortcutsName keys={['shift', '1']} />}
              </div>
            ))}
          </div>
        </Fragment>
      ))}
    </div>
  );
};

const ZoomInOut: FC = () => {
  const { zoomIn, zoomOut, zoomTo, fitView } = useReactFlow();

  const { zoom } = useViewport();

  const handleZoom = (type: string) => {
    if (type === ZoomType.zoomToFit) fitView();

    if (type === ZoomType.zoomTo25) zoomTo(0.25);

    if (type === ZoomType.zoomTo50) zoomTo(0.5);

    if (type === ZoomType.zoomTo75) zoomTo(0.75);

    if (type === ZoomType.zoomTo100) zoomTo(1);

    if (type === ZoomType.zoomTo200) zoomTo(2);
  };

  return (
    <div className="fai-reactflow-zoominout">
      <Tooltip title="zoomOut" getPopupContainer={() => document.getElementById('xflow-container') as HTMLElement}>
        <Button
          type="text"
          icon={<IconView type="icon-zoom-out-line" className="icon" />}
          onClick={(e: any) => {
            e.stopPropagation();
            zoomOut();
          }}
        />
      </Tooltip>
      <div
        style={{
          fontSize: '13px',
          fontWeight: 500,
          padding: '0 2px',
          textAlign: 'center',
          width: '32px',
        }}
      >
        <Popover content={<ZoomSelect handleZoom={handleZoom} />} zIndex={1000} trigger="click">
          {parseFloat(`${zoom * 100}`).toFixed(0)}%
        </Popover>
      </div>
      <Tooltip title="zoomIn" getPopupContainer={() => document.getElementById('xflow-container') as HTMLElement}>
        <Button
          type="text"
          icon={<IconView type="icon-zoom-in-line" className="icon" />}
          onClick={(e: any) => {
            e.stopPropagation();
            zoomIn();
          }}
        />
      </Tooltip>
    </div>
  );
};

export default memo(ZoomInOut);
