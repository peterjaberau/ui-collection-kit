import React, { useEffect, useState } from 'react';
import { TreeNode, ITreeNode, WorkbenchTypes } from '#packages/core';
import { observer } from '@formily/reactive-react';
import { useTree, useWorkbench } from '../hooks';
import { Viewport } from '../containers';
import { requestIdle } from '#packages/shared';

export interface IViewPanelProps {
  type: WorkbenchTypes;
  children: (
    tree: TreeNode,
    onChange: (tree: ITreeNode) => void,
  ) => React.ReactElement;
  scrollable?: boolean;
  dragTipsDirection?: 'left' | 'right';
}

export const ViewPanel: React.FC<IViewPanelProps> | any = observer((props: any) => {
  const tree = useTree();


  const render = () => {
    return props.children(tree, (payload) => {
      tree.from(payload)
      tree.takeSnapshot()
    })
  }

  return (
    <div
      style={{
        overflow: props.scrollable ? 'overlay' : 'hidden',
        height: '100%',
        cursor: 'auto',
        userSelect: 'text',
      }}
    >
      {render()}
    </div>
  )
})

ViewPanel.defaultProps = {
  scrollable: true,
}
