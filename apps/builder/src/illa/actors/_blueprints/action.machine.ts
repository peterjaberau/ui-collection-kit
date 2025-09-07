import { assign, setup } from "xstate"
import { actionInitialState } from "./action.defaults"

export const actionMachine = setup({
  types: {} as any,
  actions: {
    initActionListReducer: assign(({ context, event }) => {}),
  },
  actors: {},
  guards: {},
}).createMachine({
  id: "action",
  initial: "idle",
  context: ({ input }: any) => ({
    ...actionInitialState,
    ...input,
  }),
  states: {
    idle: {
      on: {
        initActionList: { actions: ["initActionListReducer"] },
      },
    },
  },
})
