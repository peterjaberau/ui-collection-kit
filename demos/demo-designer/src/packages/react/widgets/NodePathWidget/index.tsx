import React from "react"
import { Breadcrumb as ChakraBreadcrumb, For } from "@chakra-ui/react"
import { useSelectedNode, useSelection } from "../../hooks"
import { NodeTitleWidget } from "../NodeTitleWidget"
import { observer } from "@formily/reactive-react"

export interface INodePathWidgetProps {
  workspaceId?: string
  maxItems?: number
}

export const NodePathWidget: React.FC<INodePathWidgetProps> = observer((props) => {
  const selected = useSelectedNode(props.workspaceId)
  const selection = useSelection(props.workspaceId)
  if (!selected) return <React.Fragment />
  const maxItems = props.maxItems ?? 3
  const nodes = selected
    .getParents()
    .slice(0, maxItems - 1)
    .reverse()
    .concat(selected)
  return (
    <>
      <ChakraBreadcrumb.Root>
        <ChakraBreadcrumb.List>
          <For each={nodes}>
            {(node: any, index: any) => {
              return (
                <>
                  <ChakraBreadcrumb.Item key={node.id}>
                    <ChakraBreadcrumb.Link
                      onClick={(e) => {
                        e.stopPropagation()
                        e.preventDefault()
                        selection.select(node)
                      }}
                    >
                      <NodeTitleWidget node={node} />
                    </ChakraBreadcrumb.Link>
                  </ChakraBreadcrumb.Item>
                  {index < nodes.length - 1 && <ChakraBreadcrumb.Separator />}
                </>
              )
            }}
          </For>
        </ChakraBreadcrumb.List>
      </ChakraBreadcrumb.Root>
    </>
  )
})
