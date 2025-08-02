import React from 'react';
import { observer } from '@formily/reactive-react';
import { useTree } from '../hooks';
import { Viewport } from '../containers';
import { IViewPanelProps } from './ViewPanel';


export const ViewDesignablePanel: React.FC<IViewPanelProps> | any = observer((props: any) => {
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
