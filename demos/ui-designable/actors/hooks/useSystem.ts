import { useSelector } from "@xstate/react"
import { SystemContext } from "../system.provider"

export function useSystem() {
  const systemActorRef = SystemContext.useActorRef()
  const systemState = useSelector(systemActorRef, (state) => state)
  const sendToSystem = systemActorRef.send

  return {
    systemActorRef,
    systemState,
    sendToSystem,
  }
}
