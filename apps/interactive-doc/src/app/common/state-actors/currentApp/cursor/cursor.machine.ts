import { assign, setup } from "xstate"
import { cursorInitialState } from "./cursor.defaults"
import { getFromMock } from "#state-actors/mock"

export const cursorMachine = setup({
  types: {} as any,
  actions: {
    updateCursorReducer: assign(({ context, event }) => {}),
    deleteCursorReducer: assign(({ context, event }) => {}),
    removeAnimationEndCursorInfo: assign(({ context, event }) => {}),
    leaveContainerReducer: assign(({ context, event }) => {}),
    resetCursorReducer: assign(({ context, event }) => {}),
    filterCursorReducer: assign(({ context, event }) => {}),
  },
  actors: {},
  guards: {},
}).createMachine({
  id: "cursor",
  initial: "idle",
  context: ({ input }: any) => ({
    ...cursorInitialState,
    ...getFromMock().currentApp.cursor,
    ...input,
  }),
  states: {
    idle: {
      on: {
        updateCursor: { actions: ["updateCursorReducer"] },
        deleteCursor: { actions: ["deleteCursorReducer"] },
        removeAnimationEndCursorInfo: { actions: ["removeAnimationEndCursorInfo"] },
        leaveContainer: { actions: ["leaveContainerReducer"] },
        resetCursor: { actions: ["resetCursorReducer"] },
        filterCursor: { actions: ["filterCursorReducer"] },
      },
    },
  },
})
