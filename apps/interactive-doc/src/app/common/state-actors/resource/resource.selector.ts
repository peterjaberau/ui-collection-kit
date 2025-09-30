import { useActors } from "../hooks/useActors"

export const resourceSelector = () => {
  const { resourceActorRef: resourceRef } = useActors()
  const resourceState = resourceRef?.getSnapshot()
  const resourceContext = resourceState?.context

  return {
    resourceRef,
    resourceState,
    resourceContext,
  }
}
