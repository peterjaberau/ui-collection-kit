import { useActors } from "../../hooks/useActors"

export const layoutInfoSelector = () => {
  const { currentAppLayoutInfoActorRef: layoutInfoRef } = useActors()
  const layoutInfoState = layoutInfoRef?.getSnapshot()
  const layoutInfoContext = layoutInfoState?.context

  return {
    layoutInfoRef,
    layoutInfoState,
    layoutInfoContext,
  }
}
