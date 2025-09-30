import { useActors } from "../../hooks/useActors"

export const collaboratorsSelector = () => {
  const { currentAppCollaboratorsActorRef: collaboratorsRef } = useActors()
  const collaboratorsState = collaboratorsRef?.getSnapshot()
  const collaboratorsContext = collaboratorsState?.context

  return {
    collaboratorsRef,
    collaboratorsState,
    collaboratorsContext,
  }
}
