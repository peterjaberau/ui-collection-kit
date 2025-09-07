import { assign, setup } from "xstate"
import { layoutInfoInitialState } from "./layoutInfo.defaults"
import { stateMock } from "#illa/actors/mock"

export const layoutInfoMachine = setup({
  types: {} as any,
  actions: {
    setWidgetLayoutInfoReducer: assign(({ context, event }) => {}),
    updateWidgetLayoutInfoReducer: assign(({ context, event }) => {}),
    batchUpdateWidgetLayoutInfoReducer: assign(({ context, event }) => {}),
    updateWidgetLayoutInfoWhenChangeDisplayNameReducer: assign(({ context, event }) => {}),
  },
  actors: {},
  guards: {},
}).createMachine({
  id: "layoutInfo",
  initial: "idle",
  context: ({ input }: any) => ({
    ...layoutInfoInitialState,
    ...stateMock.currentApp.layoutInfo,
    ...input,
  }),
  states: {
    idle: {
      on: {
        setWidgetLayoutInfo: { actions: ["setWidgetLayoutInfoReducer"] },
        updateWidgetLayoutInfo: { actions: ["updateWidgetLayoutInfoReducer"] },
        batchUpdateWidgetLayoutInfo: { actions: ["batchUpdateWidgetLayoutInfoReducer"] },
        updateWidgetLayoutInfoWhenChangeDisplayName: {
          actions: ["updateWidgetLayoutInfoWhenChangeDisplayNameReducer"],
        },
      },
    },
  },
})
