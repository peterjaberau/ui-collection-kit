import { createMachine, setup, assign, spawnChild } from "xstate"

export const coreDesignerMachine = setup({
  types: {} as any,
  actions: {},
  actors: {},
  guards: {},
}).createMachine({
  context: ({ input }: any) => {
    return {}
  },
})

export const coreDesignerCursorMachine = setup({
  types: {} as any,
  actions: {},
  actors: {},
  guards: {},
}).createMachine({
  context: ({ input }: any) => {
    return {}
  },
})


