import React, { useEffect, useState } from 'react'
import { observer } from '@formily/reactive-react';
import { useTree, useWorkbench } from '../hooks';
import { Viewport } from '../containers';
import { requestIdle } from '#packages/shared';
import { chakra } from '@chakra-ui/react';

export const ViewDesignablePanel: React.FC<any> | any = observer((props: any) => {
  const [visible, setVisible] = useState(true)
  const workbench = useWorkbench()
  const tree = useTree()

  useEffect(() => {
    if (workbench.type === props.type) {
      requestIdle(() => {
        requestAnimationFrame(() => {
          setVisible(true)
        })
      })
    } else {
      setVisible(false)
    }
  }, [workbench.type])

  if (workbench.type !== props.type) return null

  const render = () => {
    return props.children(tree, (payload) => {
      tree.from(payload)
      tree.takeSnapshot()
    })
  }

  console.log('render ViewDesignablePanel', {
    props,
    workbench,
    tree
  })

  if (workbench.type === 'DESIGNABLE')
    return (

      <Viewport dragTipsDirection={props.dragTipsDirection}>
        {render()}
      </Viewport>
    )



  return (
    <chakra.div
      css={{
        overflow: props.scrollable ? 'overlay' : 'hidden',
        height: '100%',
        cursor: 'auto',
        userSelect: 'text',
      }}
    >
      {visible && render()}
    </chakra.div>
  )

})

ViewDesignablePanel.defaultProps = {
  scrollable: true,
}
