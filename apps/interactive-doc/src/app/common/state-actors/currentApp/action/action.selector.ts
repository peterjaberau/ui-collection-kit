import { useActors } from "../../hooks/useActors"

export const actionSelector = () => {
  const { currentAppActionActorRef: actionRef } = useActors()
  const actionState = actionRef?.getSnapshot()
  const actionContext = actionState?.context

  return {
    actionRef,
    actionState,
    actionContext,
  }
}
