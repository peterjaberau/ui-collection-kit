import { useActors } from "../../hooks/useActors"

export const executionSelector = () => {
  const { currentAppExecutionActorRef: executionRef } = useActors()
  const executionState = executionRef?.getSnapshot()
  const executionContext = executionState?.context

  return {
    executionRef,
    executionState,
    executionContext,
  }
}
