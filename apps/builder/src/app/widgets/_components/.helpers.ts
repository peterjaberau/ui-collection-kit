

export interface ExecuteTriggerPayload {
  triggerPropertyName?: string
  dynamicString: string
  event: {
    type: string
    callback?: (result: any) => void
  }
  source?: {
    id: string
    name: string
    entityType?: "ACTION" | "WIDGET" | "APPSMITH" | "JSACTION" | "MODULE_INPUT" | "MODULE_INSTANCE"
    collectionId?: string
    isJSAction?: boolean
    actionId?: string
  }
  widgetId?: string
  callbackData?: any
  globalContext?: any
}

function executeAction(actionPayload: ExecuteTriggerPayload): void {}


