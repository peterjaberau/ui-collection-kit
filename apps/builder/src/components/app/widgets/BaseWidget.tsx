
// DataTree
export const ENTITY_TYPE = {
  ACTION: "ACTION",
  WIDGET: "WIDGET",
  APPSMITH: "APPSMITH",
  JSACTION: "JSACTION",
} as const;
export const JSACTION_TYPE = ENTITY_TYPE.JSACTION;
export const ACTION_TYPE = ENTITY_TYPE.ACTION;
type ValueOf<T> = T[keyof T];
export type EntityTypeValue = ValueOf<typeof ENTITY_TYPE>;


// ActionConstants
export interface ExecutionResult {
  success: boolean;
}
export interface TriggerSource {
  id: string;
  name: string;
  entityType?: EntityTypeValue;
  collectionId?: string;
  isJSAction?: boolean;
  actionId?: string;
}
export interface ExecuteActionPayloadEvent {
  type: EventType; // eg: ON_CLICK, ON_PAGE_LOAD
  callback?: (result: ExecutionResult) => void;
}
export enum EventType {
  ON_RESET = "ON_RESET",
  ON_PAGE_LOAD = "ON_PAGE_LOAD",
  ON_PREV_PAGE = "ON_PREV_PAGE",
  ON_NEXT_PAGE = "ON_NEXT_PAGE",
  ON_PAGE_SIZE_CHANGE = "ON_PAGE_SIZE_CHANGE",
  ON_ERROR = "ON_ERROR",
  ON_SUCCESS = "ON_SUCCESS",
  ON_ROW_SELECTED = "ON_ROW_SELECTED",
  ON_SEARCH = "ON_SEARCH",
  ON_CLICK = "ON_CLICK",
  ON_DATA_POINT_CLICK = "ON_DATA_POINT_CLICK",
  ON_FILES_SELECTED = "ON_FILES_SELECTED",
  ON_HOVER = "ON_HOVER",
  ON_TOGGLE = "ON_TOGGLE",
  ON_LOAD = "ON_LOAD",
  ON_MODAL_CLOSE = "ON_MODAL_CLOSE",
  ON_MODAL_SUBMIT = "ON_MODAL_SUBMIT",
  ON_TEXT_CHANGE = "ON_TEXT_CHANGE",
  ON_SUBMIT = "ON_SUBMIT",
  ON_CHECK_CHANGE = "ON_CHECK_CHANGE",
  ON_SWITCH_CHANGE = "ON_SWITCH_CHANGE",
  ON_SELECT = "ON_SELECT",
  ON_DATE_SELECTED = "ON_DATE_SELECTED",
  ON_DATE_RANGE_SELECTED = "ON_DATE_RANGE_SELECTED",
  ON_DROPDOWN_OPEN = "ON_DROPDOWN_OPEN",
  ON_DROPDOWN_CLOSE = "ON_DROPDOWN_CLOSE",
  ON_OPTION_CHANGE = "ON_OPTION_CHANGE",
  ON_FILTER_CHANGE = "ON_FILTER_CHANGE",
  ON_FILTER_UPDATE = "ON_FILTER_UPDATE",
  ON_MARKER_CLICK = "ON_MARKER_CLICK",
  ON_CREATE_MARKER = "ON_CREATE_MARKER",
  ON_TAB_CHANGE = "ON_TAB_CHANGE",
  ON_VIDEO_START = "ON_VIDEO_START",
  ON_VIDEO_END = "ON_VIDEO_END",
  ON_VIDEO_PLAY = "ON_VIDEO_PLAY",
  ON_VIDEO_PAUSE = "ON_VIDEO_PAUSE",
  ON_AUDIO_START = "ON_AUDIO_START",
  ON_AUDIO_END = "ON_AUDIO_END",
  ON_AUDIO_PLAY = "ON_AUDIO_PLAY",
  ON_AUDIO_PAUSE = "ON_AUDIO_PAUSE",
  ON_RATE_CHANGED = "ON_RATE_CHANGED",
  ON_IFRAME_URL_CHANGED = "ON_IFRAME_URL_CHANGED",
  ON_IFRAME_SRC_DOC_CHANGED = "ON_IFRAME_SRC_DOC_CHANGED",
  ON_IFRAME_MESSAGE_RECEIVED = "ON_IFRAME_MESSAGE_RECEIVED",
  ON_SNIPPET_EXECUTE = "ON_SNIPPET_EXECUTE",
  ON_SORT = "ON_SORT",
  ON_CHECKBOX_GROUP_SELECTION_CHANGE = "ON_CHECKBOX_GROUP_SELECTION_CHANGE",
  ON_LIST_PAGE_CHANGE = "ON_LIST_PAGE_CHANGE",
  ON_RECORDING_START = "ON_RECORDING_START",
  ON_RECORDING_COMPLETE = "ON_RECORDING_COMPLETE",
  ON_SWITCH_GROUP_SELECTION_CHANGE = "ON_SWITCH_GROUP_SELECTION_CHANGE",
  ON_JS_FUNCTION_EXECUTE = "ON_JS_FUNCTION_EXECUTE",
  ON_CAMERA_IMAGE_CAPTURE = "ON_CAMERA_IMAGE_CAPTURE",
  ON_CAMERA_IMAGE_SAVE = "ON_CAMERA_IMAGE_SAVE",
  ON_CAMERA_VIDEO_RECORDING_START = "ON_CAMERA_VIDEO_RECORDING_START",
  ON_CAMERA_VIDEO_RECORDING_STOP = "ON_CAMERA_VIDEO_RECORDING_STOP",
  ON_CAMERA_VIDEO_RECORDING_SAVE = "ON_CAMERA_VIDEO_RECORDING_SAVE",
  ON_ENTER_KEY_PRESS = "ON_ENTER_KEY_PRESS",
  ON_BLUR = "ON_BLUR",
  ON_FOCUS = "ON_FOCUS",
  ON_BULK_SAVE = "ON_BULK_SAVE",
  ON_BULK_DISCARD = "ON_BULK_DISCARD",
  ON_ROW_SAVE = "ON_ROW_SAVE",
  ON_ROW_DISCARD = "ON_ROW_DISCARD",
  ON_CODE_DETECTED = "ON_CODE_DETECTED",
  ON_ADD_NEW_ROW_SAVE = "ON_ADD_NEW_ROW_SAVE",
  ON_ADD_NEW_ROW_DISCARD = "ON_ADD_NEW_ROW_DISCARD",
  CUSTOM_WIDGET_EVENT = "CUSTOM_WIDGET_EVENT",
}
export interface ExecuteTriggerPayload {
  dynamicString: string;
  event: ExecuteActionPayloadEvent;
  callbackData?: Array<unknown>;
  triggerPropertyName?: string;
  source?: TriggerSource;
  widgetId?: string;
  globalContext?: Record<string, unknown>;
}



/**
 *  Widgets can execute actions using this `executeAction` method.
 *  Triggers may be specific to the widget
 */
function executeAction(actionPayload: ExecuteTriggerPayload): void {

}


/*

export interface PropertyUpdates {
  propertyPath: string;
  propertyValue?: unknown;
  isDynamicPropertyPath?: boolean; // Toggles the property mode to JS
  shouldDeleteProperty?: boolean; // Deletes the property, propertyValue is ignored
}

type SnipingModeSupportedKeys = "data" | "run" | "isDynamicPropertyPath";
export type SnipingModeProperty = Record<SnipingModeSupportedKeys, string | boolean>

export const getMethods = () => {
  return {
    getSnipingModeUpdates: (
      propValueMap: SnipingModeProperty,
    ): PropertyUpdates[] => {
      return [
        {
          propertyPath: "onClick",
          propertyValue: propValueMap.run,
          isDynamicPropertyPath: true,
        },
      ];
    },
  };
}

 */
