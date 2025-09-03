import { useEntitiesActor } from "../useEntitiesActor"
import { useEvaluationsActor } from "../useEvaluationsActor"
import { useTriggerActor } from "../modules/useTriggerActor"

export function useWidget({ widgetId }: { widgetId: string }) {
  const { entitiesCanvasWidgets } = useEntitiesActor()
  const { evaluationsTree } = useEvaluationsActor()
  const { trigger } = useTriggerActor()

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

  // const executeTrigger = (payload: any) => {
  //
  // }



  return {
    widget,
    widgetEvaluated,
    compareEvaluated,
    trigger,
  }
}
