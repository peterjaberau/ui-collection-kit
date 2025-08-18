import React from "react"
import { TreeNode } from "#packages/core"
import { observer } from "@formily/reactive-react"
import { useTreeNode, useNodeIdProps } from "../../hooks"
import { chakra, Center, Box, Text } from "@chakra-ui/react"
import { NodeTitleWidget } from "../NodeTitleWidget"
import { NodeActionsWidget } from "../NodeActionsWidget"
export interface IDroppableWidgetProps {
  node?: TreeNode
  actions?: any[]
  placeholder?: boolean
  height?: number
  style?: React.CSSProperties
  className?: string
  hasChildren?: boolean
}

export const DroppableWidget: React.FC<IDroppableWidgetProps> | any = observer(
  ({ node, actions, height, placeholder, style, className, hasChildren: hasChildrenProp, ...props }: any) => {
    const currentNode = useTreeNode()
    const nodeId = useNodeIdProps(node)
    const target = node ?? currentNode
    const hasChildren = hasChildrenProp ?? target.children?.length > 0
    return (
      <chakra.div {...nodeId} {...props} className={className} css={style}>
        {hasChildren ? (
          props.children
        ) : placeholder ? (
            <Center
              css={{
                height: height ? height : "60px",
                borderRadius: "md",
                background: "bg.muted",
                color: 'fg.muted',
                fontSize: "xs",
                fontWeight: 'light'
              }}
            >
              <NodeTitleWidget node={target} />
            </Center>
        ) : (
          props.children
        )}
        {actions?.length ? (
          <NodeActionsWidget>
            {actions.map((action, key) => (
              <NodeActionsWidget.Action {...action} key={key} />
            ))}
          </NodeActionsWidget>
        ) : null}
      </chakra.div>
    )
  },
)

DroppableWidget.defaultProps = {
  placeholder: true,
}
