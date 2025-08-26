import { memo, useMemo } from "react"
import { useUiActor } from "#actors/hooks/useUiActor"
import { useEntitiesActor } from "#actors/hooks/useEntitiesActor"


export const usePage = () => {

  const { entitiesApp } = useEntitiesActor()
  const { uiApplications, currentApplication } = useUiActor()

  const appMode = entitiesApp.mode
  const isPublished = appMode === "PUBLISHED"



  // Layout
  // FIXED, ANVIL, AUTO
  const layoutSystemType = uiApplications?.currentApplication?.applicationDetail?.appPositioning?.type || "FIXED"
  const isAnvilLayout = layoutSystemType === "ANVIL"






  const layoutType = currentApplication?.applicationDetail?.appPositioning?.type || "FIXED"



  const isInitialized = uiAppView.initialized

  // guards
  // const canRenderCanvas =

}
