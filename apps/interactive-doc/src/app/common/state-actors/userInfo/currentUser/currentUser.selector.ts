import { useActors } from "../../hooks/useActors"

export const currentUserSelector = () => {
  const { currentUserActorRef: currentUserRef } = useActors()
  const currentUserState = currentUserRef?.getSnapshot()
  const currentUserContext = currentUserState?.context

  return {
    currentUserRef,
    currentUserState,
    currentUserContext,
  }
}
