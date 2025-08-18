import { createMachine, setup, assign, spawnChild } from "xstate"

export const spaceBlockMachine = setup({
  types: {} as any,
  actions: {},
  actors: {},
  guards: {},
}).createMachine({
  context: ({ input }: any) => {
    return {}
  },
})
