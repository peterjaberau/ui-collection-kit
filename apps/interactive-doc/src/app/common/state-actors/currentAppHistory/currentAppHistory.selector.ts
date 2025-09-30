import { useActors } from "../hooks/useActors"

export const currentAppHistorySelector = () => {
  const { currentAppHistoryActorRef: currentAppHistoryRef } = useActors()
  const currentAppHistoryState = currentAppHistoryRef?.getSnapshot()
  const currentAppHistoryContext = currentAppHistoryState?.context

  return {
    currentAppHistoryRef,
    currentAppHistoryState,
    currentAppHistoryContext,
  }
}
