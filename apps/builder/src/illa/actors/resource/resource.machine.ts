import { assign, setup } from "xstate"
import { resourceInitialState } from "./resource.defaults"
import { stateMock } from "#illa/actors/mock"

export const resourceMachine = setup({
  types: {} as any,
  actions: {
    updateResourceListReducer: assign(({ context, event }) => {}),
    addResourceItemReducer: assign(({ context, event }) => {}),
    updateResourceItemReducer: assign(({ context, event }) => {}),
    removeResourceItemReducer: assign(({ context, event }) => {}),
  },
  actors: {},
  guards: {},
}).createMachine({
  id: "resource",
  initial: "idle",
  context: ({ input }: any) => ({
    ...resourceInitialState,
    ...stateMock.resource,
    ...input,
  }),
  states: {
    idle: {
      on: {
        updateResourceList: { actions: ["updateResourceListReducer"] },
        addResourceItem: { actions: ["addResourceItemReducer"] },
        updateResourceItem: { actions: ["updateResourceItemReducer"] },
        removeResourceItem: { actions: ["removeResourceItemReducer"] },
      },
    },
  },
})
