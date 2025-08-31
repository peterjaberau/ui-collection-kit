import { useEntitiesActor } from "../useEntitiesActor"
import { useEvaluationsActor } from "../useEvaluationsActor"

export function useWidget({ widgetId }: { widgetId: string }) {
  const { entitiesCanvasWidgets } = useEntitiesActor()
  const { evaluationsTree } = useEvaluationsActor()

  const widget = entitiesCanvasWidgets[widgetId]
  const widgetName = widget?.widgetName

  const widgetEvaluated = evaluationsTree[widgetName]

  const compareEvaluated = (keys: string[]) => {
    let comparedKeys: any = {}
    keys.forEach((key) => {
      comparedKeys[key] = {
        widget: widget[key],
        evaluated: widgetEvaluated[key]
      }
    })
    return comparedKeys
  }



  return {
    widget,
    widgetEvaluated,
    compareEvaluated
  }
}
