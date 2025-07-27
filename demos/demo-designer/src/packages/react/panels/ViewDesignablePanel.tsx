import React, { useEffect, useState } from 'react';
import { TreeNode, ITreeNode, WorkbenchTypes } from '#packages/core';
import { observer } from '@formily/reactive-react';
import { useTree, useWorkbench } from '../hooks';
import { Viewport } from '../containers';
import { IViewPanelProps } from './ViewPanel';


export const ViewDesignablePanel: React.FC<IViewPanelProps> | any = observer((props: any) => {
  const workbench = useWorkbench();
  const tree = useTree();


  const render = () => {
    return props.children(tree, (payload) => {
      tree.from(payload)
      tree.takeSnapshot()
    })
  }
    return (
      <Viewport dragTipsDirection={props.dragTipsDirection}>
        {render()}
      </Viewport>
    )

})

ViewDesignablePanel.defaultProps = {
  scrollable: true,
}
