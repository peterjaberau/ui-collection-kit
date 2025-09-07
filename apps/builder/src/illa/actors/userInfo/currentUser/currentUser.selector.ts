import { SYSTEM_ACTOR_ID } from "#illa/actors/constants"
import { getSpawnedActor } from "../../utils"

export const currentUserSelector = (actorRef: any) => {

  const getCurrentUserActor = getSpawnedActor(SYSTEM_ACTOR_ID.CURRENT_USER, actorRef)
  const getCurrentUserState = getCurrentUserActor?.getSnapshot()
  const getCurrentUserContext = getCurrentUserState?.context

  return {
    getCurrentUserActor,
    getCurrentUserState,
    getCurrentUserContext,
  }

}
