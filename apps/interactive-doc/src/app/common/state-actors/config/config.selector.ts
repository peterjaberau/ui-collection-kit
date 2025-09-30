import { useActors } from "../hooks/useActors"

export const configSelector = () => {
  const { configActorRef: configRef } = useActors()
  const configState = configRef?.getSnapshot()
  const configContext = configState?.context

  return {
    configRef,
    configState,
    configContext,
  }
}
