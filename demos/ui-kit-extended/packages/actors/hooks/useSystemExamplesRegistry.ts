import { useSelector } from "@xstate/react"
import { useSystem } from "./useSystem"

export function useSystemExamplesRegistry() {
  const { systemActorRef } = useSystem()
  const sysExamplesRegistryActorRef = systemActorRef.system.get("sys-examples-registry")
  const sysExamplesRegistryState: any = useSelector(sysExamplesRegistryActorRef, (state) => state)
  const sendToSysExamplesRegistry = sysExamplesRegistryActorRef.send

  const examplesRegistry = sysExamplesRegistryState.context.registry
  const examplesRegistryNames = Object.keys(examplesRegistry)
  const examplesRegistryComponent = (name: string) => examplesRegistry[name]

  return {
    sysExamplesRegistryActorRef,
    sysExamplesRegistryState,
    sendToSysExamplesRegistry,
  }
}
