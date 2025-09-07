import { assign, setup } from "xstate"
import { currentAppHistoryInitialState } from "./currentAppHistory.defaults"
import { stateMock } from "#illa/actors/mock"


export const currentAppHistoryMachine = setup({
  types: {} as any,
  actions: {
    initCurrentAppHistoryReducer: assign(({ context, event }) => {}),
    updateCurrentAppHistoryReducer: assign(({ context, event }) => {}),
    updateCurrentSnapshotIDReducer: assign(({ context, event }) => {}),
  },
  actors: {},
  guards: {},
}).createMachine({
  id: "currentAppHistory",
  initial: "idle",
  context: ({ input }: any) => ({
    ...currentAppHistoryInitialState,
    ...stateMock.currentAppHistory,
    ...input,
  }),
  states: {
    idle: {
      on: {
        initCurrentAppHistory: { actions: ["initCurrentAppHistoryReducer"] },
        updateCurrentAppHistory: { actions: ["updateCurrentAppHistoryReducer"] },
        updateCurrentSnapshotID: { actions: ["updateCurrentSnapshotIDReducer"] },
      },
    },
  },
})
