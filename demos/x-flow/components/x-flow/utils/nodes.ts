export function searchSettingsNodeList({
  nodes = [],
  searchTerm = '',
  predicate = (node: any, term: string) => node.title.toLowerCase().includes(term.toLowerCase()),
  preResult = [],
}: {
  nodes?: any[];
  searchTerm?: string;
  predicate?: (node: any, term: string) => boolean;
  preResult?: any[];
}): any[] {
  if (nodes.length === 0) {
    return preResult;
  }

  const [currentNode, ...restNodes] = nodes;
  let result: any[] = [...preResult];

  if (predicate(currentNode, searchTerm)) {
    result.push(currentNode);
  } else if (currentNode?.type === '_group' && currentNode.items) {
    const matchingItems = searchSettingsNodeList({
      nodes: currentNode.items,
      searchTerm: searchTerm,
      predicate,
    });
    if (matchingItems.length > 0) {
      result.push({ ...currentNode, items: matchingItems });
    }
  }

  return searchSettingsNodeList({
    nodes: restNodes,
    searchTerm: searchTerm,
    predicate,
    preResult: result,
  });
}
