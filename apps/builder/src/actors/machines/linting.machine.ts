import { createMachine, setup, assign, spawnChild } from "xstate"
import lintingMock from "../mock/linting"

export const lintingMachine = setup({
  types: {} as any,
  actions: {},
  actors: {},
  guards: {},
}).createMachine({
  context: ({ input }: any) => {
    return {
      ...lintingMock,
      ...input,
    }
  },
})
