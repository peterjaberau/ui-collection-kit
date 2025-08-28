import { SnipingModeProperty } from "./actionsTypes"
import { ExecuteTriggerPayload } from "./actionsTypes"

/*
  specification:
  input: {
    propValueMap = {
      "[data,run,isDynamicPropertyPath]": string | boolean
    }
  }

  output: {
    PropertyUpdates[] = {
      propertyPath: string
      propertyValue?: unknown
      isDynamicPropertyPath?: boolean
      shouldDeleteProperty?: boolean
    }[]
  }

 */
function getSnipingModeUpdates(propValueMap: any): any {
  return [
    {
      propertyPath: "onClick",
      propertyValue: propValueMap.run,
      isDynamicPropertyPath: true,
    },
  ]
}


// step 1
export const executeTrigger = (payload: any) =>
  initiateActionTriggerExecution({
    type: "EXECUTE_TRIGGER_REQUEST",
    payload,
  })


// step 2
export function initiateActionTriggerExecution(action: {type: string, payload: any}) {
  const { event, source, triggerPropertyName } = action.payload;

  executeAppAction(action.payload)

}


// step 3
export function executeAppAction(payload) {
  const {
    callbackData,
    dynamicString,
    event: { type },
    globalContext,
    source,
    triggerPropertyName,
  } = payload;
}


export function evaluateAndExecuteDynamicTrigger(
  dynamicTrigger: string,
  eventType: string,
  triggerMeta: any,
  callbackData?: any,
  globalContext?: any,
) {


}
