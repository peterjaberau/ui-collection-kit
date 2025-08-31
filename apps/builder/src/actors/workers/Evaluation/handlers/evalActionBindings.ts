import { dataTreeEvaluator } from "./evalTree";
import { removeFunctions } from "#actor-workers/Evaluation/evaluationUtils";

export default function (request: any) {
  const { data } = request;
  const { bindings, executionParams } = data;

  if (!dataTreeEvaluator) {
    return { values: undefined, errors: [] };
  }

  const values = dataTreeEvaluator.evaluateActionBindings(
    bindings,
    executionParams,
  );

  const cleanValues = removeFunctions(values);

  const errors = dataTreeEvaluator.errors;

  dataTreeEvaluator.clearErrors();

  return { values: cleanValues, errors };
}
