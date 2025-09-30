import { assign, setup } from "xstate"
import { actionInitialState } from "./action.defaults"
import { getFromMock } from "#state-actors/mock"

export const actionMachine = setup({
  types: {} as any,
  actions: {
    initActionListReducer: assign(({ context, event }) => {}),
    addActionItemReducer: assign(({ context, event }) => {}),
    batchAddActionItemReducer: assign(({ context, event }) => {}),
    updateActionItemReducer: assign(({ context, event }) => {}),
    removeActionItemReducer: assign(({ context, event }) => {}),
    resetActionReducer: assign(({ context, event }) => {}),
    updateActionDisplayNameReducer: assign(({ context, event }) => {}),
    batchUpdateMultiActionSlicePropsReducer: assign(({ context, event }) => {}),
    batchUpdateResourceID: assign(({ context, event }) => {}),
    batchUpdateActionItemReducer: assign(({ context, event }) => {}),
  },
  actors: {},
  guards: {},
}).createMachine({
  id: "action",
  initial: "idle",
  context: ({ input }: any) => ({
    ...actionInitialState,
    ...getFromMock().currentApp.action,
    ...input,
  }),
  states: {
    idle: {
      on: {
        initActionList: { actions: ["initActionListReducer"] },
        addActionItem: { actions: ["addActionItemReducer"] },
        batchAddActionItem: { actions: ["batchAddActionItemReducer"] },
        updateActionItem: { actions: ["updateActionItemReducer"] },
        removeActionItem: { actions: ["removeActionItemReducer"] },
        resetAction: { actions: ["resetActionReducer"] },
        updateActionDisplayName: { actions: ["updateActionDisplayNameReducer"] },
        batchUpdateMultiActionSliceProps: { actions: ["batchUpdateMultiActionSlicePropsReducer"] },
        batchUpdateResourceID: { actions: ["batchUpdateResourceID"] },
        batchUpdateActionItem: { actions: ["batchUpdateActionItemReducer"] },
      },
    },
  },
})
