import React from 'react';
import { WorkspacePanel, IWorkspaceItemProps } from '#packages/react';

export const ToolbarPanel: React.FC<IWorkspaceItemProps> | any = (props: any) => {
  return (
    <WorkspacePanel.Item
      data-id='toolbar-panel'
      {...props}
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: 4,
        padding: '0 4px',
        ...props.style,
      }}
    >
      {props.children}
    </WorkspacePanel.Item>
  );
};
