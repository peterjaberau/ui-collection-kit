'use client';

import { useState, FC } from 'react';
import { Collapse } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import './index.css';
import BoxPanel from '../components/PanelView';

const { Panel } = Collapse;
interface IProps {
  className?: any;
  style?: object;
  children: any;
  title?: string;
  description?: any;
  collapsed?: boolean;
  displayType?: any;
  bordered?: boolean;
  ghost?: boolean;
}

/**
 * Folding panel
 */
const BoxCollapse: FC<IProps> = (props) => {
  const { style, children, title, description, collapsed = true, displayType, bordered = false, ghost = true } = props;

  if (!title) {
    return <BoxPanel bordered={displayType !== 'inline'}>{children}</BoxPanel>;
  }

  const [activeKey, setActiveKey] = useState<string>(collapsed ? 'single' : '');

  const collapseHeader = (
    <>
      {title && <div className="collapse-title">{title}</div>}
      {description && <span className="fr-header-desc">{description}</span>}
    </>
  );

  const renderExpandIcon = ({ isActive }: any): any => {
    return (
      <div className="expand-icon-box">
        <DownOutlined rotate={isActive ? 0 : -90} style={{ fontSize: '16px' }} />
      </div>
    );
  };

  return (
    <Collapse
      className='fr-obj-collapse'
      style={{ ...style }}
      bordered={bordered}
      ghost={ghost}
      activeKey={[activeKey]}
      expandIcon={renderExpandIcon}
      onChange={() => setActiveKey(activeKey ? '' : 'single')}
      items={[
        {
          key: 'single',
          label: collapseHeader,
          children: (
            <Panel key='single' header={collapseHeader} forceRender={true}>
              {children}
            </Panel>
          ),
          forceRender: true,
        },
      ]}
    />
  );
};

export default BoxCollapse;
