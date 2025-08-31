import { isAction } from "#actor-workers/Evaluation/evaluationUtils"

export function isRunNClearFnQualifierEntity(entity: any): any {
  return isAction(entity)
}
