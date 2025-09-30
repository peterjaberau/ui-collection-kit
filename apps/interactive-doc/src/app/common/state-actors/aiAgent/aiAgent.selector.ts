import { SYSTEM_ACTOR_ID } from "#state-actors/constants"
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
