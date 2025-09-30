import { SYSTEM_ACTOR_ID } from "#state-actors/constants"
import { getSpawnedActor } from "../../utils"

export const dragShadowSelector = (actorRef: any) => {

  const getDragShadowActor = getSpawnedActor(SYSTEM_ACTOR_ID.CURRENT_APP_DRAG_SHADOW, actorRef)
  const getDragShadowState = getDragShadowActor?.getSnapshot()
  const getDragShadowContext = getDragShadowState?.context

  return {
    getDragShadowActor,
    getDragShadowState,
    getDragShadowContext,
  }

}
