import { klona } from "klona/full";
import { evaluateAsync } from "../evaluate";
import { dataTreeEvaluator } from "./evalTree";

export default function (request: any) {
  const { data } = request;
  const { expression } = data;
  const evalTree = dataTreeEvaluator?.evalTree;
  const configTree = dataTreeEvaluator?.configTree;

  if (!evalTree || !configTree) return {};

  return evaluateAsync(expression, klona(evalTree), configTree, {}, undefined);
}
