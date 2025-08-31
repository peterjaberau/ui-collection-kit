import { MAIN_THREAD_ACTION } from "#actor-constants";
import { dataTreeEvaluator } from "workers/Evaluation/handlers/evalTree";
import ExecutionMetaData from "./ExecutionMetaData";
import { WorkerMessenger } from "./Messenger";

export function promisify<P extends ReadonlyArray<unknown>>(
  fnDescriptor: (...params: P) => { type: string; payload: any },
) {
  return async function (...args: P) {
    const actionDescription = fnDescriptor(...args);
    const metaData = ExecutionMetaData.getExecutionMetaData();

    const response = await WorkerMessenger.request({
      method: MAIN_THREAD_ACTION.PROCESS_TRIGGER,
      data: {
        trigger: actionDescription,
        ...metaData,
      },
    });

    if (!dataTreeEvaluator) throw new Error("No data tree evaluator found");

    ExecutionMetaData.setExecutionMetaData(metaData);
    self["$isDataField"] = false;
    const { data, error } = response;

    if (error) {
      throw error;
    }

    return data;
  };
}
