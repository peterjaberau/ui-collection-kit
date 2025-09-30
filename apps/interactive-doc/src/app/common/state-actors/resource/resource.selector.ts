import { SYSTEM_ACTOR_ID } from "#state-actors/constants"
import { getSpawnedActor } from "../utils"

export const resourceSelector = (actorRef: any) => {

  const getResourceActor = getSpawnedActor(SYSTEM_ACTOR_ID.RESOURCE, actorRef)
  const getResourceState = getResourceActor?.getSnapshot()
  const getResourceContext = getResourceState?.context

  return {
    getResourceActor,
    getResourceState,
    getResourceContext,
  }

}
