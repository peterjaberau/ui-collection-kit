import { assign, setup } from "xstate"
import { guideInitialState } from "./guide.defaults"
import { getFromMock } from "#state-actors/mock"

export const guideMachine = setup({
  types: {} as any,
  actions: {
    updateGuideInfoReducer: assign(({ context, event }) => {}),
    updateCurrentStepReducer: assign(({ context, event }) => {}),
    updateGuideStatusReducer: assign(({ context, event }) => {}),
    updateInsideStepReducer: assign(({ context, event }) => {}),
    updateNextStepReducer: assign(({ context, event }) => {}),
  },
  actors: {},
  guards: {},
}).createMachine({
  id: "guide",
  initial: "idle",
  context: ({ input }: any) => ({
    ...guideInitialState,
    ...getFromMock().guide,
    ...input,
  }),
  states: {
    idle: {
      on: {
        updateGuideInfo: { actions: ["updateGuideInfoReducer"] },
        updateCurrentStep: { actions: ["updateCurrentStepReducer"] },
        updateGuideStatus: { actions: ["updateGuideStatusReducer"] },
        updateInsideStep: { actions: ["updateInsideStepReducer"] },
        updateNextStep: { actions: ["updateNextStepReducer"] },
      },
    },
  },
})
