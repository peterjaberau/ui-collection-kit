import { assign, setup } from "xstate"
import { dashboardAppInitialState } from "./appInfo.defaults"
import { getFromMock } from "#state-actors/mock"

export const appInfoMachine = setup({
  types: {} as any,
  actions: {
    updateAppInfoReducer: assign(({ context, event }) => {}),
    updateAppContributeReducer: assign(({ context, event }) => {}),
    updateAppPublicReducer: assign(({ context, event }) => {}),
    updateAppDeployedReducer: assign(({ context, event }) => {}),
  },
  actors: {},
  guards: {},
}).createMachine({
  id: "appInfo",
  initial: "idle",
  context: ({ input }: any) => ({
    ...dashboardAppInitialState,
    ...getFromMock().currentApp.appInfo,
    ...input,
  }),
  states: {
    idle: {
      on: {
        updateAppInfo: { actions: ["updateAppInfoReducer"] },
        updateAppContribute: { actions: ["updateAppContributeReducer"] },
        updateAppPublic: { actions: ["updateAppPublicReducer"] },
        updateAppDeployed: { actions: ["updateAppDeployedReducer"] },
      },
    },
  },
})
