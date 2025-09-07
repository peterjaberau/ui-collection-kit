import { SYSTEM_ACTOR_ID } from "#illa/actors/constants"
import { getSpawnedActor } from "../../utils"

export const appInfoSelector = (actorRef: any) => {

  const getAppInfoActor = getSpawnedActor(SYSTEM_ACTOR_ID.CURRENT_APP_APP_INFO, actorRef)
  const getAppInfoState = getAppInfoActor?.getSnapshot()
  const getAppInfoContext = getAppInfoState?.context

  return {
    getAppInfoActor,
    getAppInfoState,
    getAppInfoContext,
  }

}
