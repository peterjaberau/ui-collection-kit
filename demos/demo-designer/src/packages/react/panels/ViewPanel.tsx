import React, { useEffect, useState } from "react"
import { TreeNode, ITreeNode } from "#packages/core"
import { observer } from "@formily/reactive-react"
import { useTree, useWorkbench } from "../hooks"
import { Viewport } from "../containers"
import { requestIdle } from "#packages/shared"
import { chakra } from "@chakra-ui/react"

export interface IViewPanelProps {
  children: (tree: TreeNode, onChange: (tree: ITreeNode) => void) => React.ReactElement
  scrollable?: boolean
  dragTipsDirection?: "left" | "right"
}

export const ViewPanel: React.FC<IViewPanelProps> | any = observer((props: any) => {
  const tree = useTree()

  const render = () => {
    return props.children(tree, (payload) => {
      tree.from(payload)
      tree.takeSnapshot()
    })
  }

  return (
    <chakra.div
      css={{ height: "400px" }}
    >
      <chakra.div
        css={{
          width: "100%",
          height: "100%",
          minHeight: "100px",
          overflow: "hidden",
          position: "relative",
          boxSizing: "border-box",
          userSelect: "none",
        }}
      >
        <chakra.div
          style={{
            overflow: props.scrollable ? "overlay" : "hidden",
            height: "100%",
            cursor: "auto",
            userSelect: "text",
          }}
        >
          {render()}
        </chakra.div>
      </chakra.div>
    </chakra.div>
  )
})

ViewPanel.defaultProps = {
  scrollable: true,
}
