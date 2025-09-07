import { SYSTEM_ACTOR_ID } from "#illa/actors/constants"
import { getSpawnedActor } from "../../utils"

export const layoutInfoSelector = (actorRef: any) => {

  const getLayoutInfoActor = getSpawnedActor(SYSTEM_ACTOR_ID.CURRENT_APP_LAYOUT_INFO, actorRef)
  const getLayoutInfoState = getLayoutInfoActor?.getSnapshot()
  const getLayoutInfoContext = getLayoutInfoState?.context

  return {
    getLayoutInfoActor,
    getLayoutInfoState,
    getLayoutInfoContext,
  }

}
