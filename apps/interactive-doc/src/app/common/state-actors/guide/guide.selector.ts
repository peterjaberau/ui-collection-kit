import { useActors } from "../hooks/useActors"

export const guideSelector = () => {
  const { guideActorRef: guideRef } = useActors()
  const guideState = guideRef?.getSnapshot()
  const guideContext = guideState?.context

  return {
    guideRef,
    guideState,
    guideContext,
  }
}
