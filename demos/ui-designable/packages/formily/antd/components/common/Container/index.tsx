import React from 'react'
import { observer } from '@formily/reactive-react'
import { DroppableWidget } from '#packages/react'
// import './styles.less'

export const Container: React.FC | any = observer((props) => {
  return <DroppableWidget>{props.children}</DroppableWidget>
})

export const withContainer: any = (Target: React.JSXElementConstructor<any>) => {
  return (props: any) => {
    return (
      <DroppableWidget>
        <Target {...props} />
      </DroppableWidget>
    )
  }
}
