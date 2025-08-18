import React from "react"
import { observer } from "@formily/reactive-react"
import { useTreeNode, useSelected } from "../../hooks"
import { HStack, Separator, Button } from "@chakra-ui/react"
import { LuColumns3 } from "react-icons/lu"

export interface INodeActionsWidgetProps {
  className?: string
  style?: React.CSSProperties
  activeShown?: boolean
}

export const NodeActionsWidget: any = observer((props: any) => {
  const node = useTreeNode()
  const selected = useSelected()
  if (selected.indexOf(node.id) === -1 && props.activeShown) return null
  return (
    <HStack>
      <Separator flex="1" />
      {props.children}
      <Separator flex="1" />
    </HStack>
  )
})

NodeActionsWidget.Action = ({ icon, title, ...props }) => {
  return (
    <Button
      variant="outline"
      size="2xs"
      css={{
        fontSize: "xs",
      }}
      {...props}
      data-click-stop-propagation="true"
    >
      <LuColumns3 />
      {title}
    </Button>
  )
}
