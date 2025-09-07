import { assign, setup } from "xstate"
import { collaboratorsInitialState } from "./collaborators.defaults"
import { stateMock } from "#illa/actors/mock"

export const collaboratorsMachine = setup({
  types: {} as any,
  actions: {
    setInRoomUsers: assign(({ context, event }) => {}),
    clearComponentAttachedUsers: assign(({ context, event }) => {}),
    updateComponentAttachedUsers: assign(({ context, event }) => {}),
  },
  actors: {},
  guards: {},
}).createMachine({
  id: "collaborators",
  initial: "idle",
  context: ({ input }: any) => ({
    ...collaboratorsInitialState,
    ...stateMock.currentApp.collaborators,
    ...input,
  }),
  states: {
    idle: {
      on: {
        setInRoomUsers: { actions: ["setInRoomUsers"] },
        clearComponentAttachedUsers: { actions: ["clearComponentAttachedUsers"] },
        updateComponentAttachedUsers: { actions: ["updateComponentAttachedUsers"] },
      },
    },
  },
})
