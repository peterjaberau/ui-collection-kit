import { SYSTEM_ACTOR_ID } from "#illa/actors/constants"
import { getSpawnedActor } from "../../utils"

export const teamSelector = (actorRef: any) => {

  const getTeamActor = getSpawnedActor(SYSTEM_ACTOR_ID.TEAM, actorRef)
  const getTeamState = getTeamActor?.getSnapshot()
  const getTeamContext = getTeamState?.context

  return {
    getTeamActor,
    getTeamState,
    getTeamContext,
  }

}
