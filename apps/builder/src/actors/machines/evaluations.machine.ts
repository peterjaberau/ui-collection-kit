import { createMachine, setup, assign, spawnChild } from "xstate"
import evaluationsMock from "../mock/evaluations"

export const evaluationsMachine = setup({
  types: {} as any,
  actions: {},
  actors: {},
  guards: {},
}).createMachine({
  context: ({ input }: any) => {
    return {
      ...evaluationsMock,
      ...input,
    }
  },
})
