import type { ActionEntity } from "ce/entities/DataTree/types";
import type { DataTreeEntity } from "entities/DataTree/dataTreeTypes";
import { isAction } from "ce/workers/Evaluation/evaluationUtils";

export function isRunNClearFnQualifierEntity(
  entity: DataTreeEntity,
): entity is ActionEntity {
  return isAction(entity);
}
