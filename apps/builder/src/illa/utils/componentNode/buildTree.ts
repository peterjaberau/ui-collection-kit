
export function buildForest(
  nodes: any[],
  layoutInfos: any,
): any[] {
  const builtNodes: { [key: string]: any } | any = {}
  const calcContext: any = {}
  const needBuildNode = nodes.map((node) => {
    const mixedNode = {
      ...node,
      $parentNode: layoutInfos[node.displayName].parentNode,
      $childrenNode: layoutInfos[node.displayName].childrenNode,
    }
    calcContext[node.displayName] = mixedNode
    return mixedNode
  })

  function buildNode(node: NeedBuildNode): any {
    if (builtNodes[node.displayName]) {
      return builtNodes[node.displayName]
    }

    const children: any[] = (node.$childrenNode || []).map(
      (childName: any) => {
        const childNode: any = calcContext[childName]
        return buildNode(childNode)
      },
    )

    const builtNode: any = {
      ...node,
      displayName: node.displayName,
      $parentNode: node.$parentNode,
      $childrenNode: children.sort((nodeA, nodeB) => {
        const displayNameA = nodeA.displayName
        const displayNameB = nodeB.displayName
        const layoutInfoA = layoutInfos[displayNameA]
        const layoutInfoB = layoutInfos[displayNameB]
        if (!layoutInfoA || !layoutInfoB) {
          return 0
        }
        if (layoutInfoA.layoutInfo.y === layoutInfoB.layoutInfo.y) {
          return layoutInfoA.layoutInfo.x - layoutInfoB.layoutInfo.x
        }
        return layoutInfoA.layoutInfo.y - layoutInfoB.layoutInfo.y
      }),
    }

    builtNodes[node.displayName] = builtNode

    return builtNode
  }

  const forest: any[] = needBuildNode
    .filter((node) => !calcContext[node.$parentNode])
    .sort((nodeA, nodeB) => {
      const displayNameA = nodeA.displayName
      const displayNameB = nodeB.displayName
      const layoutInfoA = layoutInfos[displayNameA]
      const layoutInfoB = layoutInfos[displayNameB]
      if (!layoutInfoA || !layoutInfoB) {
        return 0
      }
      if (layoutInfoA.layoutInfo.y === layoutInfoB.layoutInfo.y) {
        return layoutInfoA.layoutInfo.x - layoutInfoB.layoutInfo.x
      }
      return layoutInfoA.layoutInfo.y - layoutInfoB.layoutInfo.y
    })
    .map((rootNode) => buildNode(rootNode))

  return forest
}
