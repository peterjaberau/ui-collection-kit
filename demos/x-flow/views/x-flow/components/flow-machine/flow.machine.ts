import { getRandomString } from './utils';
import { nodeMachine } from './node.machine';
import { getFlowDetails } from '../flow/config';
import {
  ActorRefFrom,
  assertEvent,
  assign,
  enqueueActions,
  fromPromise,
  setup,
  stopChild,
} from 'xstate';
import { create } from 'mutative';
import set from 'set-value';
import { Ok, Result } from 'ts-results';

export const flowMachine = setup({
  types: {
    events: {} as {
      type:
        | 'flow.load'
        | 'nodeInstance.spawn'
        | 'nodeInstance.kill'
        | 'nodeInstance.select'
        | 'nodeInstance.editNew'
        | any;
      [k: string]: any;
    } as any,
    context: {} as {
      flow: {
        key: string | any;
        name: string | any;
        domain: string | any;
        initialValues: { nodes: any[]; edges: any[] };
        settings: {
          title: string;
          type: string;
          icon: any;
          settingSchema: any;
          [k: string]: any;
        };
        props: {
          nodeSelector: { showSearch: boolean } | any;
          globalConfig?: {
            nodePanel?: {
              hidden?: boolean;
              width?: number;
              hideDesc?: boolean;
              onClick?: (nodeId: any) => void;
            };
            nodeView?: {
              hideTitleTips?: boolean;
              status?: {
                value?: string;
                color?: string;
                name?: string;
              }[];
            };
            edges?: {
              hideEdgeAddBtn?: boolean;
              hideEdgeDelBtn?: boolean;
              deletable?: boolean;
            };
            controls?: {
              hideAddNode?: boolean;
              hideAnnotate?: boolean;
            };
          };
          logPanel?: {
            logList?: any[];
            loading?: boolean;
            logWidget?: any;
            width?: number;
          };
          readOnly?: boolean;
          [k: string]: any;
        };
      };
      spawnNode: {
        type: string;
        data: any;
        position: { x: number; y: number } | any;
        ports: { id: string; type: string; group: string }[] | any;
      };
      nodeInstances: Map<
        string,
        {
          actorNodeRef: ActorRefFrom<typeof nodeMachine>;
          latestSelectedNodes: Map<string, any>;
        }
      >;
    } as any,
  } as any,
  actions: {
    flowLoad: assign(({ context, event }) => {
      // assertEvent(event, 'flow.load');
      const name = event.payload?.name ?? 'ui';

      const flowDetails = getFlowDetails({ name });

      return create(context, (draft) => {
        draft.flow = {
          key: name,
          ...flowDetails,
        };
      });
    }),

    flowUpdateProps: assign(({ context, event }) => {
      assertEvent(event, 'flow.updateProps');
      const { flow } = context;
      const { name, value } = event.payload;

      return create(context, (draft) => {
        draft.flow.props = {
          ...context.flow.props,
          ...event.payload,
        };
      });
    }),

    nodeInstanceCreate: assign(({ context, event, spawn }: any) => {
      assertEvent(event, 'nodeInstance.spawn');
      const systemId = getRandomString();
      const { spawnNode } = context;
      const actorNodeRef = spawn(nodeMachine, {
        input: {
          ...(event.payload as any),
          // type: spawnNode.type,
          // data: spawnNode.data,
          // position: spawnNode.position,
          // ports: spawnNode.ports,
        } satisfies any,
        id: systemId,
      });

      return create(context, (draft: any) => {
        draft.nodeInstances.set(actorNodeRef.id, {
          actorNodeRef: actorNodeRef,
          latestSelectedNodes: new Map(),
        });
      });
    }),

    nodeInstanceKill: assign(({ event, context }) => {
      assertEvent(event, 'nodeInstance.kill');
      const actorNodeId = event.payload.id;
      stopChild(actorNodeId);
      return create(context, (draft: any) => {
        draft.nodeInstances.delete(actorNodeId);
      });
    }),

    nodeInstanceSelect: enqueueActions(({ context, enqueue, event }: any) => {
      assertEvent(event, 'nodeInstance.select');
      const nodeInstance = context.nodeInstances.get(event.payload.id);
      if (!nodeInstance) return;

      enqueue.sendTo(nodeInstance.actorNodeRef, {
        type: 'select',
        payload: {
          selectedItems: nodeInstance.latestSelectedItems,
        } as any,
      } as any);
    }),

    nodeInstanceEditNew: assign(({ context, event }) => {
      assertEvent(event, 'nodeInstance.editNew');

      return create(context, (draft) => {
        set(draft.spawnNode, event.payload.key, event.payload.value);
      });
    }),

    logContext: ({ context }) => {
      console.log({ context });
    },
  },
  actors: {
    nodeMachine,
    getInitialContext: fromPromise(async ({ input }: any) => {
      await new Promise((res) => setTimeout(res, 1_00));

      const name = input?.name ?? 'primitive';
      const flowDetails = getFlowDetails({ name });

      return new Ok({
        name: flowDetails.name,
        domain: flowDetails.domain,
        initialValues: flowDetails.initialValues,
        settings: flowDetails.settings,
        widgets: flowDetails.widgets,
        props: flowDetails.props,
      });
    }),
  },
}).createMachine({
  id: 'flowMachine',
  initial: 'busy',
  context: {
    flow: {
      initialValues: {
        nodes: [],
        edges: [],
      },
      key: undefined,
      props: {
        layout: false,
      },
      settings: {
        settingSchema: [],
      },
    },
    nodeInstances: new Map(),
    spawnNode: {
      type: 'Start',
      data: {},
      // position: { x: 10, y: 270 },
      ports: [{ id: 'right', type: 'output', group: 'right' }],
    },
  },
  states: {
    busy: {
      always: {
        target: 'idle',
        actions: ['flowLoad'],
      },
      target: 'idle',
    },
    idle: {
      on: {
        'flow.load': {
          target: 'busy',
          actions: ['flowLoad'],
        },
        'flow.updateProps': {
          actions: ['flowUpdateProps'],
        },
        'nodeInstance.editNew': {
          actions: ['nodeInstanceEditNew', 'logContext'],
        },
        'nodeInstance.select': {
          actions: ['nodeInstanceSelect'],
        },
        'nodeInstance.kill': {
          actions: ['nodeInstanceKill'],
        },
        'nodeInstance.spawn': {
          actions: ['nodeInstanceCreate'],
        },
      },
    },
  },
});
