import { createMachine, setup, assign, spawnChild, fromPromise } from "xstate"

export const moveHelperMachine = setup({
  types: {} as any,
  actions: {},
  actors: {},
  guards: {},
}).createMachine({
  context: ({ input }: any) => {
    return {}
  },
})

