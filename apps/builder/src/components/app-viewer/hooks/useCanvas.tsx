import { memo, useMemo } from "react"
import { useUiActor } from "#actors/hooks/useUiActor"
import { useEntitiesActor } from "#actors/hooks/useEntitiesActor"



export const useCanvas = () => {

  const { entitiesApp } = useEntitiesActor()
  const { uiApplications, currentApplication } = useUiActor()

  const appMode = entitiesApp.mode
  const isPublished = appMode === "PUBLISHED"

  const renderMode = entitiesApp.mode === "EDIT" ? "CANVAS" : "PAGE"

  // FIXED, ANVIL, AUTO
  const layoutSystemType = uiApplications?.currentApplication?.applicationDetail?.appPositioning?.type || "FIXED"
  const isAnvilLayout = layoutSystemType === "ANVIL"

  const getLayoutSystem = () => {
    switch (layoutSystemType) {
      case "ANVIL":
        return {
          canvasSystem: {
            Canvas: renderMode === "CANVAS" ? "AnvilEditorCanvas Component": "AnvilViewerCanvas Component",
            propertyEnhancer: {}
          },
          widgetSystem: {
            WidgetWrapper: renderMode === "CANVAS" ? "AnvilEditorWrapper Component": "AnvilViewerWrapper Component",,
            propertyEnhancer: {}
          }
      case "AUTO":
        return {
          canvasSystem: {
            Canvas: "",
            propertyEnhancer: ""
          },
          widgetSystem: {
            WidgetWrapper: "",
            propertyEnhancer: ""
          }
        };
      default:
        // FIXED
        return {
          canvasSystem: {
            Canvas: "",
            propertyEnhancer: ""
          },
          widgetSystem: {
            WidgetWrapper: "",
            propertyEnhancer: ""
          }
        };
    }
  }

  const canvasSystem = {}
  const widgetSystem = {}





  // guards
  // const canRenderCanvas =

}
