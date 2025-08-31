import { getEntityForEvalContextMap } from "#actor-workers/Evaluation/getEntityForEvalContextMap";

export function getEntityForEvalContext(
  entity: any,
  entityName: string,
) {
  const getterMethod = getEntityForEvalContextMap[entity.ENTITY_TYPE];

  if (!getterMethod) return entity;

  return getterMethod(entityName, entity);
}
