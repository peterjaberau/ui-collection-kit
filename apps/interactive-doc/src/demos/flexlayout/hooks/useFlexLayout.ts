import { useSelector } from "@xstate/react"
import { FlexLayoutContext } from "#demos/flexlayout/actors/flexlayout.provider"

export function useFlexLayout() {
  const flexLayoutRef = FlexLayoutContext.useActorRef()
  const flexLayoutState = useSelector(flexLayoutRef, (state) => state)
  const flexLayoutContext = flexLayoutState.context
  const sendToFlexLayout = flexLayoutRef.send


  return {
    flexLayoutRef,
    flexLayoutState,
    flexLayoutContext,
    sendToFlexLayout,
  }
}
