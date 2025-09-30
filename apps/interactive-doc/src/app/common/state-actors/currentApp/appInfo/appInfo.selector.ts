import { useActors } from "../../hooks/useActors"

export const appInfoSelector = () => {
  const { currentAppAppInfoActorRef: appInfoRef } = useActors()
  const appInfoState = appInfoRef?.getSnapshot()
  const appInfoContext = appInfoState?.context

  return {
    appInfoRef,
    appInfoState,
    appInfoContext,
  }
}
