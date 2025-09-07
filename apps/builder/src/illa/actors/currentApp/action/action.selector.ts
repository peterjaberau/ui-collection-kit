import { SYSTEM_ACTOR_ID } from "#illa/actors/constants"
import { getSpawnedActor } from "../../utils"

export const actionSelector = (actorRef: any) => {

  const getActionActor = getSpawnedActor(SYSTEM_ACTOR_ID.CURRENT_APP_ACTION, actorRef)
  const getActionState = getActionActor?.getSnapshot()
  const getActionContext = getActionState?.context

  return {
    getActionActor,
    getActionState,
    getActionContext,
  }

}
