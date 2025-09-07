import { SYSTEM_ACTOR_ID } from "#illa/actors/constants"
import { getSpawnedActor } from "../utils"

export const aiAgentSelector = (actorRef: any) => {

  const getAiAgentActor = getSpawnedActor(SYSTEM_ACTOR_ID.AI_AGENT, actorRef)

  const getAiAgentState = getAiAgentActor?.getSnapshot()
  const getAiAgentContext = getAiAgentState?.context

  return {
    getAiAgentActor,
    getAiAgentState,
    getAiAgentContext,
  }

}
