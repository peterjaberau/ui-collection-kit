import { isWidget, isAction, isJSAction } from "#actor-workers/Evaluation/evaluationUtils";

export function isWidgetActionOrJsObject(entity: any): any {
  return isWidget(entity) || isAction(entity) || isJSAction(entity);
}
