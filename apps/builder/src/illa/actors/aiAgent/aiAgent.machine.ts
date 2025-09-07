import { assign, setup } from "xstate"
import { aiAgentInitial } from "./aiAgent.defaults"
import { stateMock } from "#illa/actors/mock"

export const aiAgentMachine = setup({
  types: {} as any,
  actions: {
    updateTeamAIAgentListReducer: assign(({ context, event }) => {}),
    addTeamAIAgentReducer: assign(({ context, event }) => {}),
    removeTeamAIAgentReducer: assign(({ context, event }) => {}),
    modifyTeamAIAgentReducer: assign(({ context, event }) => {}),
  },
  actors: {},
  guards: {},
}).createMachine({
  id: "aiAgent",
  initial: "idle",
  context: ({ input }: any) => ({
    ...aiAgentInitial,
    ...stateMock.aiAgent,
    ...input,
  }),
  states: {
    idle: {
      on: {
        updateTeamAIAgentList: { actions: ["updateTeamAIAgentListReducer"] },
        addTeamAIAgent: { actions: ["addTeamAIAgentReducer"] },
        removeTeamAIAgent: { actions: ["removeTeamAIAgentReducer"] },
        modifyTeamAIAgent: { actions: ["modifyTeamAIAgentReducer"] },
      },
    },
  },
})
