import { SYSTEM_ACTOR_ID } from "#state-actors/constants"
import { getSpawnedActor } from "../../utils"

export const cursorSelector = (actorRef: any) => {

  const getCursorActor = getSpawnedActor(SYSTEM_ACTOR_ID.CURRENT_APP_CURSOR, actorRef)
  const getCursorState = getCursorActor?.getSnapshot()
  const getCursorContext = getCursorState?.context

  return {
    getCursorActor,
    getCursorState,
    getCursorContext,
  }

}
