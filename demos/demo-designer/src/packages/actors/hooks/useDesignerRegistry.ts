import { useSelector } from "@xstate/react"
import { useDesignerActor } from "./useDesignerActor"

export function useDesignerRegistry() {
  const { designerActorRef } = useDesignerActor()

  const designerRegistryRef = designerActorRef.system.get("designer-registry")
  const designerRegistry: any = useSelector(designerRegistryRef, (state) => state)
  const sendToDesignerRegistry = designerRegistryRef.send

  const getLocales = designerRegistry.context.locales
  const getIcons = designerRegistry.context.icons
  const getBehaviors = designerRegistry.context.behaviors

  const isLoading = designerRegistry.matches("loading")
  const isReady = designerRegistry.matches("ready")

  return {
    designerRegistryRef,
    designerRegistry,
    sendToDesignerRegistry,

    getLocales,
    getIcons,
    getBehaviors,

    isLoading,
    isReady,
  }
}
