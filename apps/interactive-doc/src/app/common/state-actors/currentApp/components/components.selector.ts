import { useActors } from "../../hooks/useActors"

export const componentsSelector = () => {
  const { currentAppComponentsActorRef: componentsRef } = useActors()
  const componentsState = componentsRef?.getSnapshot()
  const componentsContext = componentsState?.context

  return {
    componentsRef,
    componentsState,
    componentsContext,
  }
}
