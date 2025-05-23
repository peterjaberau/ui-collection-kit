import { normalizeProps, useMachine } from "@ui-collection-kit/react"
import * as tree from "@ui-collection-kit/tree-view"
import { LuFile, LuFolder, LuChevronRight } from "react-icons/lu"
import { JSX, useId } from "react"

interface Node {
  id: string
  name: string
  children?: Node[]
}

const collection = tree.collection<Node>({
  nodeToValue: (node) => node.id,
  nodeToString: (node) => node.name,
  rootNode: {
    id: "ROOT",
    name: "",
    children: [
      {
        id: "node_modules",
        name: "node_modules",
        children: [
          { id: "node_modules/ui-collection-kit", name: "ui-collection-kit" },
          { id: "node_modules/pandacss", name: "panda" },
          {
            id: "node_modules/@types",
            name: "@types",
            children: [
              { id: "node_modules/@types/react", name: "react" },
              { id: "node_modules/@types/react-dom", name: "react-dom" },
            ],
          },
        ],
      },
      {
        id: "src",
        name: "src",
        children: [
          { id: "src/app.tsx", name: "app.tsx" },
          { id: "src/index.ts", name: "index.ts" },
        ],
      },
      { id: "panda.config", name: "panda.config.ts" },
      { id: "package.json", name: "package.json" },
      { id: "renovate.json", name: "renovate.json" },
      { id: "readme.md", name: "README.md" },
    ],
  },
})

interface TreeNodeProps {
  node: Node
  indexPath: number[]
  api: tree.Api
}

const TreeNode = (props: TreeNodeProps): JSX.Element => {
  const { node, indexPath, api } = props

  const nodeProps = { indexPath, node }
  const nodeState = api.getNodeState(nodeProps)

  if (nodeState.isBranch) {
    return (
      <div {...api.getBranchProps(nodeProps)}>
        <div {...api.getBranchControlProps(nodeProps)}>
          <LuFolder />
          <span {...api.getBranchTextProps(nodeProps)}>{node.name}</span>
          <span {...api.getBranchIndicatorProps(nodeProps)}>
            <LuChevronRight />
          </span>
        </div>
        <div {...api.getBranchContentProps(nodeProps)}>
          <div {...api.getBranchIndentGuideProps(nodeProps)} />
          {node.children?.map((childNode, index) => (
            <TreeNode
              key={childNode.id}
              node={childNode}
              indexPath={[...indexPath, index]}
              api={api}
            />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div {...api.getItemProps(nodeProps)}>
      <LuFile /> {node.name}
    </div>
  )
}

interface TreeViewProps {
  controls: {}
}

export function TreeView(props: TreeViewProps) {
  const service = useMachine(tree.machine, {
    id: useId(),
    collection,
    ...props.controls,
  })

  const api = tree.connect(service, normalizeProps)

  return (
    <div {...api.getRootProps()}>
      <h3 {...api.getLabelProps()}>My Documents</h3>
      <div style={{ display: "flex", gap: "10px" }}>
        <button className="treeview-trigger" onClick={() => api.collapse()}>
          Collapse All
        </button>
        <button className="treeview-trigger" onClick={() => api.expand()}>
          Expand All
        </button>
      </div>
      <div {...api.getTreeProps()}>
        {collection.rootNode.children?.map((node, index) => (
          <TreeNode key={node.id} node={node} indexPath={[index]} api={api} />
        ))}
      </div>
    </div>
  )
}
