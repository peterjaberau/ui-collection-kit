import { createMachine, assign, spawnChild, setup, fromPromise } from 'xstate';
import { createSystem, defineConfig } from '@chakra-ui/react';
import dataSystemDefaults from './system.defaults';

export const sysGlobalsMachine = createMachine({
  context: ({ input }: any) => ({
    globals: dataSystemDefaults.globals,
    ...input,
  }),
});

export const sysStylesMachine = createMachine({
  context: ({ input }: any) => ({
    styles: dataSystemDefaults.styles,
    ...input,
  }),
});

export const sysRegistryMachine: any = setup({
  types: {
    context: {} as any,
    events: {} as any,
  } as any,
}).createMachine({
  context: ({ input }: any) =>
    ({
      registry: dataSystemDefaults.registry,
      ...input,
    }) as any,
  entry: [],
});

export const navigationSystemMachine: any = setup({
  types: {
    context: {} as any,
    events: {} as any,
  } as any,
}).createMachine({
  context: ({ input }: any) => {
    return {
      ...dataSystemDefaults.navigationSystem,
      ...input,
    };
  },
  on: {
    TOGGLE_VISIBILITY_CHANGE: {
      actions: assign(({ context, event }) => {
        const { value }: any = event;
        context[value].isVisible = !context[value]?.isVisible;
      }),
    },
  },
});

export const sidePanelMachine = setup({
  actions: {
    handleExpandChange: assign(({ context, event }) => {
      context.content.expand = event.value
    }),
    togglePin: assign(({ context, event }) => {
      context.content.pin = !context.content.pin
    }),
    toggleExpand: assign(({ context, event }) => {
      context.content.expand = !context.content.expand
    }),

  },
}).createMachine({
  initial: 'idle',
  context: ({ input }) => {
    return {
      ...input
    };
  },
  states: {
    idle: {
      on: {
        onExpandChange: {
          actions: ['handleExpandChange'],
        },
        onPin: {
          actions: ['togglePin'],
        },
        onExpand: {
          actions: ['toggleExpand'],
        }
      },
    },
  },
});

export const sidePanelsMachine = setup({
  actors: {
    sidePanelMachine,
    getPanels: fromPromise(async () => {
      return {
        data: dataSystemDefaults.sidePanels,
      };
    }),
  },
}).createMachine({
  initial: 'loading',
  context: ({ input }) => ({
    panels: {},
    input,
  }),
  states: {
    loading: {
      invoke: {
        src: 'getPanels',
        onDone: {
          target: 'Ready',
          actions: assign({
            panels: ({ context, event, spawn }) => {
              return event.output.data.map((item: any) => {
                return spawn('sidePanelMachine', {
                  id: item.id,
                  systemId: item.id,
                  input: item,
                });
              });
            },
          }),
        },
      },
    },
    Ready: {
      on: {
        SET_ACTIVE_STYLE: {
          actions: assign(({ context, event }) => {
            context.active = event.value;
          }),
        },
      },
    },
  },
});
