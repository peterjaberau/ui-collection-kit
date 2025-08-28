export const executeTrigger = (
  payload: ExecuteTriggerPayload,
): BatchAction<ExecuteTriggerPayload> =>
  batchAction({
    type: "EXECUTE_TRIGGER_REQUEST",
    payload,
  });
