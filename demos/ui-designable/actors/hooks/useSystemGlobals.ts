import { useSelector } from "@xstate/react"
import { useSystem } from "./useSystem"

export function useSystemGlobals() {
  const { systemActorRef } = useSystem()
  const sysGlobalsActorRef = systemActorRef.system.get("sys-globals")
  const sysGlobalsState = useSelector(sysGlobalsActorRef, (state) => state)
  const sendToSysGlobals = sysGlobalsActorRef.send

  return {
    sysGlobalsActorRef,
    sysGlobalsState,
    sendToSysGlobals,
  }
}
