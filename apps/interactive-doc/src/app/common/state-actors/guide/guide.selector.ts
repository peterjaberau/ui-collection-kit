import { SYSTEM_ACTOR_ID } from "#state-actors/constants"
import { getSpawnedActor } from "../utils"

export const guideSelector = (actorRef: any) => {

  const getGuideActor = getSpawnedActor(SYSTEM_ACTOR_ID.GUIDE, actorRef)
  const getGuideState = getGuideActor?.getSnapshot()
  const getGuideContext = getGuideState?.context

  return {
    getGuideActor,
    getGuideState,
    getGuideContext,
  }

}
