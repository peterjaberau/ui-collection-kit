import { createMachine, setup, assign, spawnChild } from "xstate"
import settingsMock from "../mock/settings"

export const settingsMachine = setup({
  types: {} as any,
  actions: {},
  actors: {},
  guards: {},
}).createMachine({
  context: ({ input }: any) => {
    return {
      ...settingsMock,
      ...input,
    }
  },
})
