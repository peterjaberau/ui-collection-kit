'use client';
import { Drawer, Popover } from 'antd';
import classNames from 'classnames';
import { isNumber } from 'lodash';
import React, { FC, useContext, useMemo } from 'react';
import { ConfigContext } from '../../models/context';
import createIconFont from '../../utils/createIconFont';
import IconView from '../IconView';
import TitleMenuTooltip from '../NodeContainer/TitleMenuTooltip';
import './index.css';

interface IPanelProps {
  nodeType: string;
  onClose: () => void;
  id: string;
  data: any; // data value
  children?: any;
}

const PanelStatusLogContainer: FC<IPanelProps> = (props: IPanelProps) => {
  const { onClose, children, nodeType } = props;
  // 1. Get node configuration information
  // const { settingMap, iconFontUrl, globalConfig, logPanel, widgets, antdVersion }: any = useContext(ConfigContext);
  const { settingMap, iconFontUrl, logPanel, widgets, antdVersion }: any = useContext(ConfigContext);
  const nodeSetting = settingMap[nodeType] || {};
  // const { nodePanel, iconSvg }: any = nodeSetting;
  const { iconSvg }: any = nodeSetting;

  const Icon = useMemo(() => createIconFont(iconFontUrl), [iconFontUrl]);
  const CustomWidget = widgets[logPanel?.logWidget]; // Built-in setting component
  const isCustomWidget = !Boolean(logPanel?.logWidget && CustomWidget);
  const width = isNumber(logPanel?.width) ? logPanel?.width : 400;

  const drawerVersionProps = useMemo(() => {
    if (antdVersion === 'V5') {
      return {
        rootClassName: classNames('node-log-panel', {
          'no-header-line': isCustomWidget,
        }),
        open: true,
      };
    }
    // V4
    return {
      className: classNames('node-log-panel', {
        'no-header-line': isCustomWidget,
      }),
      visible: true,
    };
  }, []);

  return (
    <Drawer
      {...drawerVersionProps}
      getContainer={false}
      width={width}
      mask={false}
      onClose={onClose}
      rootStyle={{
        position: 'absolute',
      }}
      styles={{
        header: {
          paddingBottom: '12px',
        },
      }}
      title={
        <>
          <div className="title-box">
            <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
              <Popover
                className="nodes-popover"
                content={<TitleMenuTooltip {...nodeSetting} iconFontUrl={iconFontUrl} />}
                placement="bottom"
                trigger="hover"
                getPopupContainer={() => document.getElementById('xflow-container') as HTMLElement}
                style={{ padding: '12px 16px' }}
              >
                {/* <span */}
                {/*   className="icon-box" */}
                {/*   style={{ */}
                {/*     background: nodeSetting?.icon?.bgColor || '#F79009', */}
                {/*   }} */}
                {/* > */}
                {/*   {iconSvg ? iconSvg : <Icon style={{ fontSize: 14, color: '#fff' }} type={nodeSetting?.icon?.type} />} */}
                {/* </span> */}
              </Popover>
              <span className="title-content">Execution Log</span>
            </div>
            <div className="title-actions">
              <IconView type="icon-remove" style={{ fontSize: 16 }} onClick={onClose} />
            </div>
          </div>
        </>
      }
    >
      {children}
    </Drawer>
  );
};

export default React.memo(PanelStatusLogContainer);
