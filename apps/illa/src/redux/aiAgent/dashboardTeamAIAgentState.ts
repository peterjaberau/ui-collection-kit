// @ts-nocheck
import { Agent } from "@/public/public-types"

export interface AIAgentState {
  list: Agent[]
}

export const AgentInitial: AIAgentState = {
  list: [],
}
