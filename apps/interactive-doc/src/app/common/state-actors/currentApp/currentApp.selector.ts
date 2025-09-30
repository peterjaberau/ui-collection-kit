import { useActors } from "../hooks/useActors"
import { actionSelector } from "./action/action.selector"
import { appInfoSelector } from "./appInfo/appInfo.selector"
import { collaboratorsSelector } from "./collaborators/collaborators.selector"
import { componentsSelector } from "./components/components.selector"
import { cursorSelector } from "./cursor/cursor.selector"
import { dragShadowSelector } from "./dragShadow/dragShadow.selector"
import { executionSelector } from "./executionTree/execution.selector"
import { layoutInfoSelector } from "./layoutInfo/layoutInfo.selector"

//pass the rootActorRef
export const currentAppSelector = () => {
  const { currentAppActorRef: currentAppRef } = useActors()
  const currentAppState = currentAppRef?.getSnapshot()
  const currentAppContext = currentAppState?.context

  const { actionContext } = actionSelector()
  const { appInfoContext } = appInfoSelector()
  const { collaboratorsContext } = collaboratorsSelector()
  const { componentsContext } = componentsSelector()
  const { cursorContext } = cursorSelector()
  const { dragShadowContext } = dragShadowSelector()
  const { executionContext } = executionSelector()
  const { layoutInfoContext } = layoutInfoSelector()

  return {
    currentAppRef,
    currentAppState,
    currentAppContext,
    currentApp: {
      action: actionContext,
      appInfo: appInfoContext,
      collaborators: collaboratorsContext,
      components: componentsContext,
      cursor: cursorContext,
      dragShadow: dragShadowContext,
      execution: executionContext,
      layoutInfo: executionContext,
    },
  }
}
