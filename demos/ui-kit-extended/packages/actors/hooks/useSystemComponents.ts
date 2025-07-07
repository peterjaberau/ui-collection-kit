import { useSelector } from "@xstate/react"
import { useSystem } from "./useSystem"

export function useSystemComponents() {
  const { systemActorRef } = useSystem()
  const sysComponentsActorRef = systemActorRef.system.get("sys-components")
  const sysComponentsState = useSelector(sysComponentsActorRef, (state) => state)
  const sendToSysComponents = sysComponentsActorRef.send

  return {
    sysComponentsActorRef,
    sysComponentsState,
    sendToSysComponents,
  }
}
