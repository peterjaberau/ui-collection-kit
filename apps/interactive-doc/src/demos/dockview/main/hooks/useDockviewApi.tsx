import { useSelector } from "@xstate/react"
import { useDockview } from "./useDockview"

export function useDockviewApi() {
  const { dockviewRef } = useDockview()

  const dockviewApiRef = dockviewRef.system.get("dockview-api")
  const dockviewApiState = useSelector(dockviewApiRef, (state) => state)
  const dockviewApiContext = dockviewApiState.context
  const sendToDockviewApi = dockviewApiRef.send

  return {
    dockviewApiRef,
    dockviewApiState,
    dockviewApiContext,
    sendToDockviewApi,
  }
}
