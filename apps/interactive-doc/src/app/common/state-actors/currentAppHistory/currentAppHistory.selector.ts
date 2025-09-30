import { SYSTEM_ACTOR_ID } from "#state-actors/constants"
import { getSpawnedActor } from "../utils"

export const currentAppHistorySelector = (actorRef: any) => {

  const getCurrentAppHistoryActor = getSpawnedActor(SYSTEM_ACTOR_ID.CURRENT_APP_HISTORY, actorRef)
  const getCurrentAppHistoryState = getCurrentAppHistoryActor?.getSnapshot()
  const getCurrentAppHistoryContext = getCurrentAppHistoryState?.context

  return {
    getCurrentAppHistoryActor,
    getCurrentAppHistoryState,
    getCurrentAppHistoryContext,
  }

}
