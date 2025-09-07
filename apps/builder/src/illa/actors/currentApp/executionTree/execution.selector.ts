import { SYSTEM_ACTOR_ID } from "#illa/actors/constants"
import { getSpawnedActor } from "../../utils"

export const executionSelector = (actorRef: any) => {

  const getExecutionActor = getSpawnedActor(SYSTEM_ACTOR_ID.CURRENT_APP_EXECUTION, actorRef)
  const getExecutionState = getExecutionActor?.getSnapshot()
  const getExecutionContext = getExecutionState?.context

  return {
    getExecutionActor,
    getExecutionState,
    getExecutionContext,
  }

}
