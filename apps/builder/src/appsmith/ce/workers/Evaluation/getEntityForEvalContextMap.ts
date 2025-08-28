import { ENTITY_TYPE } from "ce/entities/DataTree/types";
import type { DataTreeEntity } from "entities/DataTree/dataTreeTypes";
import { getJSActionForEvalContext } from "ce/workers/Evaluation/getJSActionForEvalContext";

export const getEntityForEvalContextMap: Record<
  string,
  (entityName: string, entity: DataTreeEntity) => unknown
> = {
  [ENTITY_TYPE.JSACTION]: (entityName, entity) => {
    return getJSActionForEvalContext(entityName, entity);
  },
};
