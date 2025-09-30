import { assign, enqueueActions, setup } from "xstate"

export const orchestrationMachine = setup({
  types: {} as any,
  actions: {
    // handleStartExecution: assign(({ context, event }) => {}),
    getActionList: assign(({ context, event }) => {}),
    getAllComponentDisplayNameMapProps: assign(({ context, event }) => {}),
    getCurrentUser: assign(({ context, event }) => {}),
    getBuilderInfo: assign(({ context, event }) => {}),
    getOriginalGlobalData: assign(({ context, event }) => {}),
  },
  actors: {},
  guards: {},
}).createMachine({
  id: "config",
  initial: "idle",
  context: ({ input }: any) => ({
    args: {
      actions: [],
      widgets: [],
      currentUserInfo: {},
      builderInfo: {},
      originalGlobalData: {},
    },
    ...input,
  }),
  states: {
    idle: {
      on: {
        EXECUTION_STARTED: {
          // actions: ["handleStartExecution"],
          target: "executing",
        },
      },
    },
    executing: {
      entry: enqueueActions(({ context, enqueue, check }) => {}),
    },
  },
})
