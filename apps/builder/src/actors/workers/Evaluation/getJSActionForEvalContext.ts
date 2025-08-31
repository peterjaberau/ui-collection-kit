import JSObjectCollection from "#actor-workers/Evaluation/JSObject/Collection";
import { jsObjectFunctionFactory } from "#actor-workers//Evaluation/fns/utils/jsObjectFnFactory";

function getJSFunctionsForEntity({
  jsObject,
  jsObjectName,
}: {
  jsObjectName: string;
  jsObject: any;
}) {
  // TODO: Fix this the next time the file is edited
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const jsObjectFunction: Record<string, any> = {};
  const resolvedFunctions = JSObjectCollection.getResolvedFunctions();
  const resolvedObject = Object.assign({}, resolvedFunctions[jsObjectName]);

  for (const fnName of Object.keys(resolvedObject || {})) {
    const fn = resolvedObject[fnName];

    if (typeof fn !== "function") continue;

    const data = jsObject[fnName]?.data;

    jsObjectFunction[fnName] = jsObjectFunctionFactory(
      fn,
      jsObjectName + "." + fnName,
    );

    if (!!data) {
      jsObjectFunction[fnName]["data"] = data;
    }
  }

  return jsObjectFunction;
}

export function getJSActionForEvalContext(
  entityName: string,
  entity: any,
) {
  const jsObjectName = entityName;
  const jsObject = entity as any;

  let jsObjectForEval = JSObjectCollection.getVariableState(entityName);

  const fns = getJSFunctionsForEntity({
    jsObjectName,
    jsObject,
  });

  if (!jsObjectForEval) {
    return Object.assign({}, jsObject, fns);
  }

  jsObjectForEval =
    JSObjectCollection.getVariablesForEvaluationContext(entityName);

  return Object.assign(jsObjectForEval, fns);
}
