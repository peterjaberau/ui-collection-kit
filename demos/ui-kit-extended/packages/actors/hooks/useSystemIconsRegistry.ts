import { useSelector } from "@xstate/react"
import { useSystem } from "./useSystem"

export function useSystemIconsRegistry() {
  const { systemActorRef } = useSystem()
  const sysIconsRegistryActorRef = systemActorRef.system.get("sys-icons-registry")
  const sysIconsRegistryState: any = useSelector(sysIconsRegistryActorRef, (state) => state)
  const sendToSysIconsRegistry = sysIconsRegistryActorRef.send

  const iconsRegistry = sysIconsRegistryState.context.registry
  const iconRegistryNames = Object.keys(iconsRegistry)

  const iconRegistryComponent = (name: string) => iconsRegistry[name]

  return {
    sysIconsRegistryActorRef,
    sysIconsRegistryState,
    sendToSysIconsRegistry,

    iconsRegistry,
    iconRegistryNames,
    iconRegistryComponent,
  }
}
