import { validateWidgetProperty } from "#actor-workers/common/DataTreeEvaluator/validationUtils";
import { removeFunctions } from "#actor-workers/Evaluation/evaluationUtils";

export default function (request: any) {
  const { data } = request;
  const { property, props, validation, value } = data;

  return removeFunctions(
    validateWidgetProperty(validation, value, props, property),
  );
}
