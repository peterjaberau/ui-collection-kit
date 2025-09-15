import { TreeView, createTreeCollection } from "@chakra-ui/react"
import { LuFile, LuFolder } from "react-icons/lu"
import { domainStore } from "#nodedemo/actors/node.store"


const collection = createTreeCollection<any>({
  nodeToValue: (node: any) => node.id,
  nodeToString: (node: any) => node.name,
  rootNode: {
    id: "ROOT",
    name: "",
    children: domainStore.domainsStructure.jsonata
  }
})


export const WidgetDomainStructure = () => {
  return (
    <TreeView.Root collection={collection} maxW="sm">
      <TreeView.Tree>
        <TreeView.Node
          indentGuide={<TreeView.BranchIndentGuide />}
          render={({ node, nodeState }) =>
            nodeState.isBranch ? (
              <TreeView.BranchControl>
                <LuFolder />
                <TreeView.BranchText>{node.name}</TreeView.BranchText>
              </TreeView.BranchControl>
            ) : (
              <TreeView.Item>
                <LuFile />
                <TreeView.ItemText>{node.name}</TreeView.ItemText>
              </TreeView.Item>
            )
          }
        />
      </TreeView.Tree>
    </TreeView.Root>
  )
}
