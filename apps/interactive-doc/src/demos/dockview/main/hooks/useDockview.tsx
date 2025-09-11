import { useSelector } from "@xstate/react"
import { DockviewContext } from "../actors/dockview.provider"

export function useDockview() {
  const dockviewRef = DockviewContext.useActorRef()
  const dockviewState = useSelector(dockviewRef, (state) => state)
  const dockviewContext = dockviewState.context
  const sendToDockview = dockviewRef.send


  return {
    dockviewRef,
    dockviewState,
    dockviewContext,
    sendToDockview,
  }
}
