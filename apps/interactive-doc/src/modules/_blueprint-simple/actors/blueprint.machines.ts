import { assign, fromCallback, setup } from "xstate"
import { configDefaults } from './blueprint.data'


const actorHandlerFromCallback = fromCallback(({ sendBack, input }) => {

  const logicHandler = () => {
    return []
  }

  return () => sendBack({type: 'onEvent', payload: logicHandler()})
})

export const blueprintRootMachine = setup({
  types: {
    context: {} as any,
    events: {} as any,
  } as any,
  actions: {
    actionHandler: ({ context, event }: any) => {

    },
    actionAssigner: assign(({ context, event }: any) => {

    }),

  },
  actors: {
    actorHandlerFromCallback,
  },
  guards: {
    guardHandler: ({ context, event }) => {
      return true
    },
  },
}).createMachine({
  initial: "idle",
  context: ({ input }: any) => {
    return {
      obj: {},
      arr: [],
      b: false,
      n: 0,
      s: null,
      ...configDefaults,
      ...input,
    }
  },
  states: {
    idle: {
      on: {
        "onInvoke": {
          target: "invoking",
          actions: ['actionAssigner'],
        },
      },
    },
    invoking: {
      invoke: {
        id: "actorHandlerFromCallback",
        src: "actorHandlerFromCallback",
        input: ({ context }) => {
          return {
            obj: context.obj,
            arr: context.arr,
          }
        },
        onDone: {
          target: "ready",
        },
        onError: {
          target: "idle",
        }
      },
    },
    ready: {
      always: {
        target: 'idle',
        actions: ['actionAssigner']
      }
    }
  },
})
