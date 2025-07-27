import React from 'react';
import { WorkspacePanel, IWorkspaceItemProps } from './WorkspacePanel';
import { Simulator } from '../containers';
export const ViewportPanel: React.FC<IWorkspaceItemProps> | any = (props) => {
  return (
    <WorkspacePanel.Item {...props} flexable>
      <Simulator>{props.children}</Simulator>
    </WorkspacePanel.Item>
  );
};
