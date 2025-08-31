import { get, isEmpty } from "lodash";
import { diff as deepDiff } from "deep-diff";
import { dataTreeEvaluator } from "../handlers/evalTree";
import { getType } from "#actor-utils/TypeHelpers";


let prevJSUpdates: any;

function getVariableObject(jsUpdates: any) {
  const prevJSObjects = Object.entries(jsUpdates);
  const prevJSObjectVar: any = {};

  for (const [jsObjectName, jsObjectBody] of prevJSObjects as any) {
    const variables = jsObjectBody.parsedBody?.variables;

    if (!variables?.length) continue;

    const varKeyMap: Record<string, string> = {};

    variables.forEach(({ name }: any) => {
      varKeyMap[name] = name;
    });
    prevJSObjectVar[jsObjectName] = varKeyMap;
  }

  return prevJSObjectVar;
}

function getVariableDiff(jsUpdates: any) {
  if (isEmpty(jsUpdates)) return;

  if (!prevJSUpdates) {
    prevJSUpdates = jsUpdates;

    return;
  }

  const prevJSObjectVar = getVariableObject(prevJSUpdates);
  const jsObjectVar = getVariableObject(jsUpdates);
  const diff = deepDiff(prevJSObjectVar, jsObjectVar);

  prevJSUpdates = jsUpdates;

  return diff;
}

export function getJSVariableCreatedEvents(jsUpdates: any) {
  const jsVarDiff = getVariableDiff(jsUpdates);

  const jsVarsCreated: { path: string; type: string }[] = [];

  jsVarDiff?.forEach((diff) => {
    if (diff.kind === "N" && diff.path?.length === 2) {
      const evalTree = dataTreeEvaluator?.getEvalTree() || {};
      const value = get(evalTree, diff.path);
      const type = getType(value);

      jsVarsCreated.push({ path: diff.path?.join("."), type });
    }
  });

  return jsVarsCreated;
}
