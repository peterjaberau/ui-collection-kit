'use client';
import { forwardRef, Ref, useContext, useMemo } from 'react';
import { Popover, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { ConfigContext } from '../../models/context';
import { useSet } from '../../utils/hooks';
import createIconFont from '../../utils/createIconFont';
import { searchSettingsNodeList } from '../../utils/nodes';
import { TNodeMenu } from '../../types';
import './index.css';

// Retrieve node
const searchNodeList = (query: string, list: any[]) => {
  if (!query) {
    return list;
  }
  const searchTerm = query.toLowerCase();

  return searchSettingsNodeList({
    nodes: list,
    searchTerm: searchTerm,
    predicate: (node: any, term: string) => node.title.toLowerCase().includes(term),
  });

  // return searchNodeFromSettings({ nodes: list, searchTerm: searchTerm });
};

// Detailed description of the floating menu item
export const MenuTooltip = ({ icon, title, description, iconFontUrl, iconSvg }: any) => {
  const IconBox = useMemo(() => createIconFont(iconFontUrl), [iconFontUrl]);

  return (
    <div className="xflow-node-menu-tooltip">
      <div className="icon-box-max" style={{ background: icon?.bgColor || '#F79009', marginRight: '8px' }}>
        {iconSvg ? iconSvg : <IconBox type={icon?.type} style={{ color: '#fff', fontSize: 13, ...icon?.style }} />}
      </div>
      <div className="title">{title}</div>
      <div className="description">{description}</div>
    </div>
  );
};

// Node menu item
const MenuItem = (props: any) => {
  const { title, type, icon, onClick, iconFontUrl, iconSvg } = props;
  const IconBox = useMemo(() => createIconFont(iconFontUrl), [iconFontUrl]);

  return (
    <Popover
      key={type}
      // content={<MenuTooltip {...props} />}
      placement="right"
      arrow={false}
      getPopupContainer={() => document.getElementById('xflow-container') as HTMLElement}
    >
      <div className="menu-item" onClick={onClick(type)}>
        <span className="icon-box" style={{ background: icon?.bgColor || '#F79009', marginRight: '8px' }}>
          {iconSvg ? iconSvg : <IconBox type={icon?.type} style={{ color: '#fff', fontSize: 13 }} />}
        </span>
        <span>{title}</span>
      </div>
    </Popover>
  );
};

// Filter hidden nodes
const filterHiddenMenu = (list: any) => {
  return (list || []).filter((item: any) => !item.hidden);
};

/**
 *
 * Node menu List
 *
 */
const NodesMenu = (props: TNodeMenu, ref: Ref<HTMLDivElement>) => {
  const { items, showSearch, onClick } = props;
  const { iconFontUrl }: any = useContext(ConfigContext);

  const [state, setState] = useSet({
    menuList: [...items],
  });
  const { menuList } = state;

  const handleItemClick = (type: string) => (ev: React.MouseEvent<HTMLDivElement>) => {
    ev.stopPropagation();
    onClick({ type });
  };

  const handleSearch = (ev: any) => {
    setState({ menuList: searchNodeList(ev.target.value, items) });
  };

  return (
    <div className="xflow-node-menu" ref={ref}>
      {!!showSearch && (
        <div style={{ margin: '5px 9px 9px' }}>
          <Input
            placeholder="Search node"
            onChange={handleSearch}
            prefix={<SearchOutlined style={{ color: 'rgba(0,0,0,.45)' }} />}
            style={{ width: '100%' }}
          />
        </div>
      )}
      <div>
        {filterHiddenMenu(menuList).map((item: any, index: number) =>
          item.type === '_group' ? (
            <div key={`${item.type}-${index}`}>
              <div className="menu-group-title">{item.title}</div>
              {filterHiddenMenu(item.items).map((data: any, index: number) => (
                <MenuItem iconFontUrl={iconFontUrl} {...data} onClick={handleItemClick} key={index} />
              ))}
            </div>
          ) : (
            <div key={`${item.type}-${index}`}>
              <MenuItem iconFontUrl={iconFontUrl} {...item} onClick={handleItemClick} />
            </div>
          ),
        )}
      </div>
    </div>
  );
};

export default forwardRef(NodesMenu);
