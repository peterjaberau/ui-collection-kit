import { isJSAction, isWidget } from "ce/workers/Evaluation/evaluationUtils";
import type { DataTreeEntity } from "entities/DataTree/dataTreeTypes";
import type { DataTreeEntityConfig } from "ce/entities/DataTree/types";

export default function isLintErrorLoggingEnabledForEntity(
  entity: DataTreeEntity,
  propertyPath: string,
  config: DataTreeEntityConfig,
) {
  if (isJSAction(entity)) {
    return true;
  }

  if (isWidget(entity)) {
    return !(propertyPath in config.reactivePaths);
  }
}
