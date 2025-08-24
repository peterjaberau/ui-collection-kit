import { createMachine, setup, assign, spawnChild } from "xstate"
import formMock from "../mock/form"

export const formMachine = setup({
  types: {} as any,
  actions: {},
  actors: {},
  guards: {},
}).createMachine({
  context: ({ input }: any) => {
    return {
      ...formMock,
      ...input,
    }
  },
})
