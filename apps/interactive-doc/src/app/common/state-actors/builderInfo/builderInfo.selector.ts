import { useActors } from "../hooks/useActors"

export const builderInfoSelector = () => {
  const { builderInfoActorRef: builderInfoRef } = useActors()
  const builderInfoState = builderInfoRef?.getSnapshot()
  const builderInfoContext = builderInfoState?.context

  return {
    builderInfoRef,
    builderInfoState,
    builderInfoContext,
  }
}
