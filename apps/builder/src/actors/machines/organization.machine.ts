import { createMachine, setup, assign, spawnChild } from "xstate"
import organizationMock from "../mock/organization"

export const organizationMachine = setup({
  types: {} as any,
  actions: {},
  actors: {},
  guards: {},
}).createMachine({
  context: ({ input }: any) => {
    return {
      ...organizationMock,
      ...input,
    }
  },
})
