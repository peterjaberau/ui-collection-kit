import { createMachine, setup, assign, spawnChild } from "xstate"
import uiMock from "../mock/ui"

export const uiMachine = setup({
  types: {} as any,
  actions: {},
  actors: {},
  guards: {},
}).createMachine({
  context: ({ input }: any) => {
    return {
      ...uiMock,
      ...input,
    }
  },
})
