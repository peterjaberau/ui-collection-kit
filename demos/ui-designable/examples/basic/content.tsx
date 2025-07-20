import React from 'react'
import { Flex } from '@chakra-ui/react'
import { ComponentTreeWidget, useTreeNode } from '#packages/react'
import { observer } from '@formily/reactive-react'
import 'antd/dist/reset.css'

export const Content = () => (
  <ComponentTreeWidget
    components={{
      Field: observer((props) => {
        const node = useTreeNode()
        return (
          <span
            {...props}
            style={{
              background: '#eee',
              display: 'inline-block',
              ...props.style,
              padding: '10px 20px',
              border: '1px solid #ddd',
            }}
          >
            <span data-content-editable="title">{node.props.title}</span>
            {props.children}
          </span>
        )
      }),
      Card: observer((props) => {
        return (
          <Flex
            {...props}
            css={{
              width: 200,
              height: 100,
              ...props.style,
              background: '#eee',
              border: '1px solid #ddd',
              padding: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {props.children ? props.children : <span>Drag a component into this area</span>}
          </Flex>
        )
      }),
    }}
  />
)
