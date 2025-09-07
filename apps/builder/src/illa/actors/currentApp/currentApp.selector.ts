import { SYSTEM_ACTOR_ID } from "#illa/actors/constants"
import { actionSelector } from "./action/action.selector"
import { appInfoSelector } from "./appInfo/appInfo.selector"
import { collaboratorsSelector } from "./collaborators/collaborators.selector"
import { componentsSelector } from "./components/components.selector"
import { cursorSelector } from "./cursor/cursor.selector"
import { dragShadowSelector } from "./dragShadow/dragShadow.selector"
import { executionSelector } from "./executionTree/execution.selector"
import { layoutInfoSelector } from "./layoutInfo/layoutInfo.selector"

//pass the rootActorRef
export const currentAppSelector = (actorRef: any) => {

  const { getActionContext } = actionSelector(actorRef)
  const { getAppInfoContext } = appInfoSelector(actorRef)
  const { getCollaboratorsContext } = collaboratorsSelector(actorRef)
  const { getComponentsContext } = componentsSelector(actorRef)
  const { getCursorContext } = cursorSelector(actorRef)
  const { getDragShadowContext } = dragShadowSelector(actorRef)
  const { getExecutionContext } = executionSelector(actorRef)
  const { getLayoutInfoContext } = layoutInfoSelector(actorRef)

  return {
    action: getActionContext,
    appInfo: getAppInfoContext,
    collaborators: getCollaboratorsContext,
    components: getComponentsContext,
    cursor: getCursorContext,
    dragShadow: getDragShadowContext,
    execution: getExecutionContext,
    layoutInfo: getLayoutInfoContext,
  }

}
