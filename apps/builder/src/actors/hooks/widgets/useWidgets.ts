import { useSelector } from "@xstate/react"
import { useEntitiesActor } from "../useEntitiesActor"
import { useEvaluationsActor } from "../useEvaluationsActor"

export function useWidgets() {
  const { entitiesCanvasWidgets } = useEntitiesActor()
  const { evaluationsTree } = useEvaluationsActor()


  const getWidgets = entitiesCanvasWidgets
  const getWidget = (widgetId: string) => {
    return getWidgets[widgetId]
  }
  const getWidgetByID = (widgetId: string) => {
    return getWidgets[widgetId]
  }

  const getDataTreeForActionCreator = () => {
    const dataTree: any = {}
    Object.keys(evaluationsTree).forEach((key) => {
      const value: any = evaluationsTree[key]

      dataTree[key] = {
        meta: value?.meta || null,
        ENTITY_TYPE: value?.ENTITY_TYPE || null,
        type: value?.type || null,
      }
    })
    return dataTree
  }

  return {
    getWidgets,
    getWidget,
    getWidgetByID,

    getDataTreeForActionCreator,
  }
}
