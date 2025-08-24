import { createMachine, setup, assign, spawnChild } from "xstate"
import entitiesMock from "../mock/entities"

export const entitiesMachine = setup({
  types: {} as any,
  actions: {},
  actors: {},
  guards: {},
}).createMachine({
  context: ({ input }: any) => {
    return {
      ...entitiesMock,
      ...input,
    }
  },
})
