import ExecutionMetaData from "./utils/ExecutionMetaData";
import TriggerEmitter from "./utils/TriggerEmitter";
import { BatchKey } from "#actor-constants";

function postWindowMessageFnDescriptor(
  message: any,
  source: string,
  targetOrigin: string,
) {
  return {
    type: "POST_MESSAGE" as const,
    payload: {
      message,
      source,
      targetOrigin,
    },
  };
}


export default function postWindowMessage(...args: any) {
  const metaData = ExecutionMetaData.getExecutionMetaData();

  TriggerEmitter.emit(BatchKey.process_batched_triggers, {
    // @ts-ignore
    trigger: postWindowMessageFnDescriptor(...args),
    ...metaData,
  });
}
