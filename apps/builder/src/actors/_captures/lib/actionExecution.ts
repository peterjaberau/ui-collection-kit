
export function executeAppAction(payload: any) {
  const {
    callbackData,
    dynamicString,
    event: { type },
    globalContext,
    source,
    triggerPropertyName,
  } = payload;

  if (!dynamicString || typeof dynamicString !== "string") {
    return;
  }

}


export function evaluateAndExecuteDynamicTrigger(
  dynamicTrigger: string,
  eventType: any,
  triggerMeta: any,
  callbackData?: any,
  globalContext?: any,
) {}
