import { useRootActor } from "./useRootActor"
import { getSpawnedActor } from "../utils"
import { SYSTEM_ACTOR_ID } from "../constants"

export function useActors() {
  const { rootActorRef } = useRootActor()

  /*
  currentApp actors
 */
  const currentAppActorRef = getSpawnedActor(SYSTEM_ACTOR_ID.CURRENT_APP, rootActorRef)
  const currentAppActionActorRef = getSpawnedActor(SYSTEM_ACTOR_ID.CURRENT_APP_ACTION, rootActorRef)
  const currentAppAppInfoActorRef = getSpawnedActor(SYSTEM_ACTOR_ID.CURRENT_APP_APP_INFO, rootActorRef)
  const currentAppCollaboratorsActorRef = getSpawnedActor(SYSTEM_ACTOR_ID.CURRENT_APP_COLLABORATORS, rootActorRef)
  const currentAppComponentsActorRef = getSpawnedActor(SYSTEM_ACTOR_ID.CURRENT_APP_COMPONENTS, rootActorRef)
  const currentAppCursorActorRef = getSpawnedActor(SYSTEM_ACTOR_ID.CURRENT_APP_CURSOR, rootActorRef)
  const currentAppDragShadowActorRef = getSpawnedActor(SYSTEM_ACTOR_ID.CURRENT_APP_DRAG_SHADOW, rootActorRef)
  const currentAppExecutionActorRef = getSpawnedActor(SYSTEM_ACTOR_ID.CURRENT_APP_EXECUTION, rootActorRef)
  const currentAppLayoutInfoActorRef = getSpawnedActor(SYSTEM_ACTOR_ID.CURRENT_APP_LAYOUT_INFO, rootActorRef)

  /*
  other actors (console, ai...)
 */
  const aiAgentActorRef = getSpawnedActor(SYSTEM_ACTOR_ID.AI_AGENT, rootActorRef)
  const configActorRef = getSpawnedActor(SYSTEM_ACTOR_ID.CONFIG, rootActorRef)
  const builderInfoActorRef = getSpawnedActor(SYSTEM_ACTOR_ID.BUILDER_INFO, rootActorRef)
  const guideActorRef = getSpawnedActor(SYSTEM_ACTOR_ID.GUIDE, rootActorRef)
  const resourceActorRef = getSpawnedActor(SYSTEM_ACTOR_ID.RESOURCE, rootActorRef)
  const currentAppHistoryActorRef = getSpawnedActor(SYSTEM_ACTOR_ID.CURRENT_APP_HISTORY, rootActorRef)
  const currentUserActorRef = getSpawnedActor(SYSTEM_ACTOR_ID.CURRENT_USER, rootActorRef)
  const teamActorRef = getSpawnedActor(SYSTEM_ACTOR_ID.TEAM, rootActorRef)

  return {
    //currentApp actors
    currentAppActorRef,
    currentAppActionActorRef,
    currentAppAppInfoActorRef,
    currentAppCollaboratorsActorRef,
    currentAppComponentsActorRef,
    currentAppCursorActorRef,
    currentAppDragShadowActorRef,
    currentAppExecutionActorRef,
    currentAppLayoutInfoActorRef,

    //other modules actors
    rootActorRef,
    aiAgentActorRef,
    configActorRef,
    builderInfoActorRef,
    guideActorRef,
    resourceActorRef,
    currentAppHistoryActorRef,
    currentUserActorRef,
    teamActorRef,
  }
}
