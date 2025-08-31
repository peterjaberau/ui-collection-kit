import { unsafeFunctionForEval } from "utils/DynamicBindingUtils";
import setupDOM from "../SetupDOM";
import { addPlatformFunctionsToEvalContext } from "#actor-workers/Evaluation/Actions";
import { overrideWebAPIs } from "../fns/overrides";
import { WorkerEnv } from "./workerEnv";

export default function (request: any) {
  self.$isDataField = false;
  unsafeFunctionForEval.forEach((func: any) => {
    // @ts-ignore
    self[func] = undefined;
  });
  setupDOM();
  overrideWebAPIs(self);

  WorkerEnv.setFeatureFlags(request.data.featureFlags);
  WorkerEnv.setCloudHosting(request.data.cloudHosting);
  addPlatformFunctionsToEvalContext(self);

  return true;
}

export function setEvaluationVersion(request: any) {
  const { data } = request;
  const { version } = data;

  // @ts-ignore
  self.evaluationVersion = version || 1;

  return true;
}
