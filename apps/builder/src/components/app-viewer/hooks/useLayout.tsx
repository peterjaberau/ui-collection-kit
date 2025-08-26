import { memo, useMemo } from "react"
import { useUiActor } from "#actors/hooks/useUiActor"
import { useEntitiesActor } from "#actors/hooks/useEntitiesActor"


export const useLayout = () => {

  const { entitiesApp } = useEntitiesActor()
  const { uiApplications } = useUiActor()

  const appMode = entitiesApp.mode
  const isPublished = appMode === "PUBLISHED"


  // FIXED, ANVIL, AUTO
  const layoutSystemType = uiApplications?.currentApplication?.applicationDetail?.appPositioning?.type || "FIXED"

  const isAnvilLayout = layoutSystemType === "ANVIL"

  const currentApplication = uiApplications?.currentApplication




  return {
    isAnvilLayout,
    layoutSystemType,
  }



}
