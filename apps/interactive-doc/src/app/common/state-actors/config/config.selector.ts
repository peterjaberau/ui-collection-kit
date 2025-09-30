import { SYSTEM_ACTOR_ID } from "#state-actors/constants"
import { getSpawnedActor } from "../utils"

export const configSelector = (actorRef: any) => {

  const getConfigActor = getSpawnedActor(SYSTEM_ACTOR_ID.CONFIG, actorRef)
  const getConfigState = getConfigActor?.getSnapshot()
  const getConfigContext = getConfigState?.context

  return {
    getConfigActor,
    getConfigState,
    getConfigContext,
  }

}

//
// export function searchComponentFromMap(components, findDisplayName: any) {
//   if (components == null || findDisplayName == null) {
//     return null
//   }
//   return components[findDisplayName]
// }
