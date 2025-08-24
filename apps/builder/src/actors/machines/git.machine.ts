import { createMachine, setup, assign, spawnChild } from "xstate"
import gitMock from "../mock/git"

export const gitMachine = setup({
  types: {} as any,
  actions: {},
  actors: {},
  guards: {},
}).createMachine({
  context: ({ input }: any) => {
    return {
      ...gitMock,
      ...input,
    }
  },
})
