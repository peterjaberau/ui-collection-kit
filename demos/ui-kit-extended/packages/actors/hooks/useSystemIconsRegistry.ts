import { useSelector } from "@xstate/react"
import { useSystem } from "./useSystem"

export function useSystemIconsRegistry() {
  const { systemActorRef } = useSystem()
  const sysIconsRegistryActorRef = systemActorRef.system.get("sys-icons-registry")
  const sysIconsRegistryState: any = useSelector(sysIconsRegistryActorRef, (state) => state)
  const sendToSysIconsRegistry = sysIconsRegistryActorRef.send

  const iconsRegistry = sysIconsRegistryState.context.registry
  const iconRegistryNames = Object.keys(iconsRegistry)




  // const iconsCacheRegistry = sysIconsRegistryState.context.cacheRegistry

  const iconRegistryComponent = (name: string) => iconsRegistry[name]

  const iconsLib = sysIconsRegistryState.context.iconsLib

  console.log("--iconsLib--", iconsLib)
  console.log("--sysIconsRegistryState.context--", sysIconsRegistryState.context)

  return {
    sysIconsRegistryActorRef,
    sysIconsRegistryState,
    sendToSysIconsRegistry,

    iconsRegistry,
    iconRegistryNames,
    iconRegistryComponent,

    iconsLib

    // iconsCacheRegistry
  }
}
