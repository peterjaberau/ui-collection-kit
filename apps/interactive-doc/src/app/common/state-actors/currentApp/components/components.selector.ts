import { SYSTEM_ACTOR_ID } from "#state-actors/constants"
import { getSpawnedActor } from "../../utils"

export const componentsSelector = (actorRef: any) => {

  const getComponentsActor = getSpawnedActor(SYSTEM_ACTOR_ID.CURRENT_APP_COMPONENTS, actorRef)
  const getComponentsState = getComponentsActor?.getSnapshot()
  const getComponentsContext = getComponentsState?.context

  return {
    getComponentsActor,
    getComponentsState,
    getComponentsContext,
  }

}

//
// export function searchComponentFromMap(components, findDisplayName: any) {
//   if (components == null || findDisplayName == null) {
//     return null
//   }
//   return components[findDisplayName]
// }
