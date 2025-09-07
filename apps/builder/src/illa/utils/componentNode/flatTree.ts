import { getComponentMap } from "@/redux/currentApp/components/componentsSelector"
import store from "@/store"

export const flatTreeToMap = (componentNode: any) => {
  const map: any = {}
  const flatTree = (node: any) => {
    map[node.displayName] = {
      ...node,
      childrenNode: Array.isArray(node.childrenNode)
        ? node.childrenNode.map((childNode) => childNode.displayName)
        : [],
    }
    if (!Array.isArray(node.childrenNode)) {
      node.childrenNode = []
    }
    node.childrenNode.forEach((childNode) => {
      flatTree(childNode)
    })
  }
  flatTree(componentNode)
  return map
}

export const transTreeToMap = (componentNode: any) => {
  const map = flatTreeToMap(componentNode)
  return map[componentNode.displayName]
}

export function buildTreeByMapNode(
  rootNodeDisplayName: string = "root",
  nodes: any = getComponentMap(store.getState()),
) {
  const builtNodes: { [key: string]: any } | any = {}

  function buildNode(node: any): any {
    if (builtNodes[node.displayName]) {
      return builtNodes[node.displayName]
    }

    const children: any[] = (node.childrenNode || []).map(
      (childName) => {
        const childNode: any = nodes[childName]
        return buildNode(childNode)
      },
    )

    const builtNode: any = {
      ...node,
      childrenNode: children,
    }

    builtNodes[node.displayName] = builtNode

    return builtNode
  }

  const rootNode: any = nodes[rootNodeDisplayName]

  return buildNode(rootNode)
}
