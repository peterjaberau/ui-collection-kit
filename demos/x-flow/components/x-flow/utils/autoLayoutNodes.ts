import { produce } from 'immer';
import dagre from '@dagrejs/dagre';
import { cloneDeep } from 'lodash';

export const CUSTOM_NODE = 'custom';
export const CUSTOM_EDGE = 'custom';

export const getLayoutByDagre = (originNodes: any[], originEdges: any[], rankdir: 'TB' | 'BT' | 'LR' | 'RL') => {
  const dagreGraph = new dagre.graphlib.Graph();
  dagreGraph.setDefaultEdgeLabel(() => ({}));

  const nodes = cloneDeep(originNodes).filter((node) => !node.parentId && node.type === CUSTOM_NODE);
  const edges = cloneDeep(originEdges).filter((edge) => !edge.data?.isInIteration);
  dagreGraph.setGraph({
    ranker: 'network-simplex', // Node hierarchical algorithm, optional: 'tight-tree' 'longest-path' 'network-simplex'
    rankdir, // graph extension direction, optional: 'TB' | 'BT' | 'LR' | 'RL'
    nodesep: 150, // The distance between nodes in the same layer
    ranksep: 150, // Spacing between levels of the graph
    // align: '', // Node alignment, optional: 'UL' | 'UR' | 'DL' | 'DR' | undefined
  });

  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, {
      width: node.width || 204,
      height: node.height || 45,
    });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);
  return dagreGraph;
};

export default (nodes: any, edges: any, rankdir: 'LR' | 'TB') => {
  const layout = getLayoutByDagre(nodes, edges, rankdir);
  const rankMap: any = {} as Record<string, Node>;
  nodes.forEach((node: any) => {
    if (!node.parentId && node.type === CUSTOM_NODE) {
      const rank: any = layout.node(node.id).rank!;

      if (!rankMap[rank]) {
        rankMap[rank] = node;
      } else {
        if (rankMap[rank].position.y > node.position.y) rankMap[rank] = node;
      }
    }
  });

  const newNodes = produce(nodes, (draft: any) => {
    draft.forEach((node: any) => {
      if (!node.parentId && node.type === CUSTOM_NODE) {
        const nodeWithPosition = layout.node(node.id);
        node.position = {
          x: nodeWithPosition.x - (node.width || 204) / 2,
          y: nodeWithPosition.y - (node.height || 45) / 2 + (rankMap[nodeWithPosition.rank!].height || 45) / 2,
        };
      }
    });
  });

  return newNodes;
};
