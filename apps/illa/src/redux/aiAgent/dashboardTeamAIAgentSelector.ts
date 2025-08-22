import { Agent } from "@/public/public-types"
import { createSelector } from "@reduxjs/toolkit"
import { RootState } from "@/store"

export const getDashboardTeamAIAgent = (state: RootState) => {
  return state.aiAgent
}


export const getDashboardTeamAIAgentList = (state: RootState) => {
  return state.aiAgent.list
}

export const getAIAgentIDMapAgent = createSelector(
  [getDashboardTeamAIAgentList],
  (aiAgentList) => {
    const aiAgentIDMapAgent: Record<string, Agent> = {}
    aiAgentList.forEach((aiAgent) => {
      aiAgentIDMapAgent[aiAgent.aiAgentID] = aiAgent
    })
    return aiAgentIDMapAgent
  },
)
