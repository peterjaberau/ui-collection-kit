import { uuid } from './index';

/**
 * Get all child nodes
 */
export const generateCopyNodes = (parentNode: any) => {
  // 1. Define the childNodeIds array to store the IDs of all nodes found. By default, rootNode is added to the array.
  const childNodes: any[] = [];
  const rootNode = {
    id: uuid(),
    type: parentNode.type,
    data: {
      ...parentNode.data,
    },
    position: { x: 0, y: 0 },
    sourceId: parentNode.id,
  };
  childNodes.push(rootNode);

  return childNodes;
};
