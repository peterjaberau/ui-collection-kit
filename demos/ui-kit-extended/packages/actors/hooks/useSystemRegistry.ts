import { useSelector } from "@xstate/react"
import { useSystem } from "./useSystem"

export function useSystemRegistry() {
  const { systemActorRef } = useSystem()
  const sysRegistryActorRef = systemActorRef.system.get("sys-registry")
  const sysRegistryState: any = useSelector(sysRegistryActorRef, (state) => state)
  const sendToSysRegistry = sysRegistryActorRef.send

  const registry = sysRegistryState.context.registry
  const registryNames = Object.keys(registry)

  const registryComponent = (name: string) => registry[name]


  return {
    sysRegistryActorRef,
    sysRegistryState,
    sendToSysRegistry,

    registry,
    registryNames,
    registryComponent,
  }
}
