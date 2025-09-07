import { SYSTEM_ACTOR_ID } from "#illa/actors/constants"
import { getSpawnedActor } from "../../utils"

export const collaboratorsSelector = (actorRef: any) => {

  const getCollaboratorsActor = getSpawnedActor(SYSTEM_ACTOR_ID.CURRENT_APP_COLLABORATORS, actorRef)
  const getCollaboratorsState = getCollaboratorsActor?.getSnapshot()
  const getCollaboratorsContext = getCollaboratorsState?.context

  return {
    getCollaboratorsActor,
    getCollaboratorsState,
    getCollaboratorsContext,
  }

}
