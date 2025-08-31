import { ENTITY_TYPE } from "#actor-constants"
import { getJSActionForEvalContext } from "#actor-workers/Evaluation/getJSActionForEvalContext"

export const getEntityForEvalContextMap: Record<string, (entityName: string, entity: any) => unknown> = {
  [ENTITY_TYPE.JSACTION]: (entityName, entity) => {
    return getJSActionForEvalContext(entityName, entity)
  },
}
