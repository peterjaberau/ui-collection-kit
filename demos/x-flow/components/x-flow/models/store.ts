import { generateCopyNodes, transformNodes, uuid } from '../utils';
import {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Edge,
  Node,
  OnConnect,
  OnEdgesChange,
  OnNodesChange,
} from '@xyflow/react';
import isDeepEqual from 'fast-deep-equal';
import { temporal } from 'zundo';
import { createWithEqualityFn } from 'zustand/traditional';

export type FlowProps = {
  nodes?: Node[];
  edges?: Edge[];
  panOnDrag?: boolean;
  layout?: 'LR' | 'TB';
};

export type FlowStore = ReturnType<typeof createStore>;

export type FlowNode = Node;

export type FlowState = {
  key?: string;
  layout?: 'LR' | 'TB';
  nodes?: FlowNode[];
  edges?: Edge[];
  copyNodes: FlowNode[];
  copyEdges: Edge[];
  panOnDrag?: boolean;
  isAddingNode?: boolean;
  candidateNode: any;
  mousePosition: any;
  onNodesChange: OnNodesChange<FlowNode>;
  onEdgesChange: OnEdgesChange;
  onConnect: OnConnect;
  setNodes: (nodes: FlowNode[], isTransform?: boolean) => void;
  setEdges: (edges: Edge[]) => void;
  addNodes: (nodes: FlowNode[] | FlowNode, isTransform?: boolean) => void;
  addEdges: (edges: Edge[] | Edge) => void;
  setLayout: (layout: 'LR' | 'TB') => void;
  setIsAddingNode: (payload: boolean) => void;
  setCandidateNode: (candidateNode: any) => void;
  setMousePosition: (mousePosition: any) => void;
};

const createStore = (initProps?: Partial<FlowProps>) => {
  const DEFAULT_PROPS: FlowProps = {
    layout: 'LR',
    panOnDrag: true,
    nodes: [],
    edges: [],
  };

  return createWithEqualityFn<FlowState>()(
    temporal(
      (set, get) => ({
        ...DEFAULT_PROPS,
        ...initProps,
        copyNodes: [],
        copyEdges: [],
        isAddingNode: false,
        candidateNode: null,
        // nodeMenus: [],
        mousePosition: { pageX: 0, pageY: 0, elementX: 0, elementY: 0 },
        onNodesChange: (changes) => {
          set({
            // @ts-ignore
            nodes: applyNodeChanges(changes, get().nodes),
          });
        },
        onEdgesChange: (changes) => {
          set({
            // @ts-ignore
            edges: applyEdgeChanges(changes, get().edges),
          });
        },
        onConnect: (connection) => {
          set({
            // @ts-ignore
            edges: addEdge(connection, get().edges),
          });
        },
        setNodes: (nodes) => {
          set({ nodes: transformNodes(nodes) });
        },
        setEdges: (edges) => {
          set({ edges });
        },
        addNodes: (payload, isTransform = true) => {
          const newNodes: any = (get().nodes as any).concat(
            transformNodes(Array.isArray(payload) ? payload : [payload]),
          );
          set({ nodes: newNodes });
        },
        addEdges: (payload) => {
          // @ts-ignore
          set({ edges: get().edges.concat(payload) });
        },
        // setNodeMenus: (nodeMenus: any) => {
        //   set({ nodeMenus });
        // },
        setIsAddingNode: (payload) => {
          set({ isAddingNode: payload });
        },
        setCandidateNode: (candidateNode) => {
          set({ candidateNode });
        },
        setMousePosition: (mousePosition: any) => {
          set({ mousePosition });
        },
        setLayout: (layout: 'LR' | 'TB') => {
          if (!layout) {
            return;
          }
          set({ layout });
        },
      }),
      {
        // nodes and edges are reference types, so use deep comparison
        equality: isDeepEqual,
        // Partial function
        partialize: (state) => {
          const { nodes, edges } = state;
          return {
            edges,
            nodes,
          };
        },
        onSave(pastState, currentState) {
          console.log('onSave', pastState, currentState);
        },
      },
    ),
    Object.is,
  );
};

export { createStore };
