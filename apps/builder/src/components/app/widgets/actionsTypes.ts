export interface WidgetMethods {
  // getQueryGenerationConfig?: GetQueryGenerationConfig
  // getPropertyUpdatesForQueryBinding?: GetPropertyUpdatesForQueryBinding
  getSnipingModeUpdates?: GetSnipingModeUpdates
  // getCanvasHeightOffset?: GetCanvasHeightOffset
  // getEditorCallouts?: GetEditorCallouts
  // getOneClickBindingConnectableWidgetConfig?: GetOneClickBindingConnectableWidgetConfig
  // IconCmp?: (props: SVGProps<SVGSVGElement>) => JSX.Element
  // ThumbnailCmp?: (props: SVGProps<SVGSVGElement>) => JSX.Element
}

type SnipingModeSupportedKeys = "data" | "run" | "isDynamicPropertyPath"
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


export type GetSnipingModeUpdates = (propValueMap: Record<SnipingModeSupportedKeys, string | boolean>) => Array<PropertyUpdates>
export type SnipingModeProperty = Record<SnipingModeSupportedKeys, string | boolean>
export interface PropertyUpdates {
  propertyPath: string
  propertyValue?: unknown
  isDynamicPropertyPath?: boolean // Toggles the property mode to JS
  shouldDeleteProperty?: boolean // Deletes the property, propertyValue is ignored
}


export interface ExecuteTriggerPayload {
  dynamicString: string;
  event: {
    type: EventType;
    callback?: (result: { success: boolean }) => void
  };
  callbackData?: Array<unknown>;
  triggerPropertyName?: string;
  source?: {
    id: string;
    name: string;
    entityType?: "ACTION" | "WIDGET" | "APPSMITH" | "JSACTION" | "MODULE_INPUT" | "MODULE_INSTANCE";
    collectionId?: string;
    isJSAction?: boolean;
    actionId?: string;
  };
  widgetId?: string;
  globalContext?: Record<string, unknown>;
}




export interface ReduxAction<T> {
  type: ReduxActionType | ReduxActionErrorType;
  payload: T;
}

export type ReduxActionType =
  (typeof ReduxActionTypes)[keyof typeof ReduxActionTypes];
