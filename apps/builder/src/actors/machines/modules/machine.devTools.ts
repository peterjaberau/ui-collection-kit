import { createMachine, setup, assign, spawnChild } from "xstate"

export const devToolsMachine = setup({
  types: {} as any,
  actions: {
    persist: assign(({ context, event }) => {
      // console.log("DevTools Event:", event)
      context.path = event.path || '-'
      context.payload = event.payload || {}
    }),
  },
  actors: {},
  guards: {},
}).createMachine({
  initial: "idle",
  context: ({ input }: any) => {
    return {
      path: "-",
      payload: {},
      ...input,
    }
  },
  states: {
    idle: {
      on: {
        INSPECT: {
          actions: ["persist"],
        },
      },
    },
  },
})
