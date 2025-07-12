import { useSelector } from "@xstate/react"
import { useSystem } from "./useSystem"

export function useSystemStyles() {
  const { systemActorRef } = useSystem()
  const sysStylesActorRef = systemActorRef.system.get("sys-styles")
  const sysStylesState = useSelector(sysStylesActorRef, (state) => state)
  const sendToSysStyles = sysStylesActorRef.send

  return {
    sysStylesActorRef,
    sysStylesState,
    sendToSysStyles,
  }
}
