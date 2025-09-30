import { assign, setup } from "xstate"
import { dragShadowInitialState } from "./dragShadow.defaults"
import { getFromMock } from "#state-actors/mock"

export const dragShadowMachine = setup({
  types: {} as any,
  actions: {
    updateDragShadowInfoReducer: assign(({ context, event }) => {}),
    deleteDragShadowInfoReducer: assign(({ context, event }) => {}),
    removeAnimationEndDragShadowInfoReducer: assign(({ context, event }) => {}),
    leaveContainerDragShadowInfoReducer: assign(({ context, event }) => {}),
    resetDragShadowInfoReducer: assign(({ context, event }) => {}),
    filterDragShadowInfoReducer: assign(({ context, event }) => {}),
  },
  actors: {},
  guards: {},
}).createMachine({
  id: "dragShadow",
  initial: "idle",
  context: ({ input }: any) => ({
    ...dragShadowInitialState,
    ...getFromMock().currentApp.dragShadow,
    ...input,
  }),
  states: {
    idle: {
      on: {
        updateDragShadowInfo: { actions: ["updateDragShadowInfoReducer"] },
        deleteDragShadowInfo: { actions: ["deleteDragShadowInfoReducer"] },
        removeAnimationEndDragShadowInfo: { actions: ["removeAnimationEndDragShadowInfoReducer"] },
        leaveContainerDragShadowInfo: { actions: ["leaveContainerDragShadowInfoReducer"] },
        resetDragShadowInfo: { actions: ["resetDragShadowInfoReducer"] },
        filterDragShadowInfo: { actions: ["filterDragShadowInfoReducer"] },
      },
    },
  },
})
