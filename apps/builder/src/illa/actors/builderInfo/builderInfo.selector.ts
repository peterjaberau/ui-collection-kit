import { SYSTEM_ACTOR_ID } from "#illa/actors/constants"
import { getSpawnedActor } from "../utils"

export const builderInfoSelector = (actorRef: any) => {

  const getBuilderInfoActor = getSpawnedActor(SYSTEM_ACTOR_ID.BUILDER_INFO, actorRef)
  const getBuilderInfoState = getBuilderInfoActor?.getSnapshot()
  const getBuilderInfoContext = getBuilderInfoState?.context

  return {
    getBuilderInfoActor,
    getBuilderInfoState,
    getBuilderInfoContext,
  }

}
