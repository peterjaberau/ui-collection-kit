export default {
  props: {
    dataTreePath: "btnCalculate.onClick",
    integrationOptions: [
      {
        label: "Execute a query",
        value: "integration",
        children: [
          {
            label: "New query",
            value: "datasources",
            id: "create",
          },
        ],
      },
      {
        label: "Execute a JS function",
        value: "jsFunction",
        children: [
          {
            label: "New JS Object",
            value: "jsFunction",
            id: "create",
          },
        ],
      },
      {
        label: "Navigate to",
        value: "navigateTo",
      },
      {
        label: "Show alert",
        value: "showAlert",
      },
      {
        label: "Show modal",
        value: "showModal",
      },
      {
        label: "Close modal",
        value: "closeModal",
      },
      {
        label: "Store value",
        value: "storeValue",
      },
      {
        label: "Remove value",
        value: "removeValue",
      },
      {
        label: "Clear store",
        value: "clearStore",
      },
      {
        label: "Download",
        value: "download",
      },
      {
        label: "Copy to clipboard",
        value: "copyToClipboard",
      },
      {
        label: "Reset widget",
        value: "resetWidget",
      },
      {
        label: "Set interval",
        value: "setInterval",
      },
      {
        label: "Clear interval",
        value: "clearInterval",
      },
      {
        label: "Get geolocation",
        value: "appsmith.geolocation.getCurrentPosition",
      },
      {
        label: "Watch geolocation",
        value: "appsmith.geolocation.watchPosition",
      },
      {
        label: "Stop watching geolocation",
        value: "appsmith.geolocation.clearWatch",
      },
      {
        label: "Post message",
        value: "postWindowMessage",
      },
      {
        label: "Logout user",
        value: "logoutUser",
      },
    ],
    isChainedAction: false,
    modalDropdownList: [
      {
        label: "New Modal",
        value: "Modal",
        id: "create",
      },
    ],
    pageDropdownOptions: [
      {
        label: "Page1",
        id: "68ad34afd8deff53ee072777",
        value: "'Page1'",
      },
    ],
    value: "{{storeValue('localCalculatedVar', calculatedTxt.setText(Input1.text));}}",
    widgetOptionTree: [
      {
        label: "Input1",
        id: "Input1",
        value: '"Input1"',
        type: "INPUT_WIDGET_V2",
      },
      {
        label: "Text1",
        id: "Text1",
        value: '"Text1"',
        type: "TEXT_WIDGET",
      },
      {
        label: "containerPlayground",
        id: "containerPlayground",
        value: '"containerPlayground"',
        type: "CONTAINER_WIDGET",
      },
      {
        label: "calculatedTxt",
        id: "calculatedTxt",
        value: '"calculatedTxt"',
        type: "TEXT_WIDGET",
      },
      {
        label: "containerActions",
        id: "containerActions",
        value: '"containerActions"',
        type: "CONTAINER_WIDGET",
      },
      {
        label: "containerRoot",
        id: "containerRoot",
        value: '"containerRoot"',
        type: "CONTAINER_WIDGET",
      },
    ],
  },
  dataTree: {
    localVariables: {
      meta: null,
      ENTITY_TYPE: "JSACTION",
      type: null,
    },
    MainContainer: {
      meta: {},
      ENTITY_TYPE: "WIDGET",
      type: "CANVAS_WIDGET",
    },
    Input1: {
      meta: {
        text: "",
        inputText: "",
      },
      ENTITY_TYPE: "WIDGET",
      type: "INPUT_WIDGET_V2",
    },
    Text1: {
      meta: {},
      ENTITY_TYPE: "WIDGET",
      type: "TEXT_WIDGET",
    },
    Canvas2: {
      meta: {},
      ENTITY_TYPE: "WIDGET",
      type: "CANVAS_WIDGET",
    },
    containerPlayground: {
      meta: {},
      ENTITY_TYPE: "WIDGET",
      type: "CONTAINER_WIDGET",
    },
    btnCalculate: {
      meta: {},
      ENTITY_TYPE: "WIDGET",
      type: "BUTTON_WIDGET",
    },
    calculatedTxt: {
      meta: {},
      ENTITY_TYPE: "WIDGET",
      type: "TEXT_WIDGET",
    },
    Canvas3: {
      meta: {},
      ENTITY_TYPE: "WIDGET",
      type: "CANVAS_WIDGET",
    },
    containerActions: {
      meta: {},
      ENTITY_TYPE: "WIDGET",
      type: "CONTAINER_WIDGET",
    },
    Canvas1: {
      meta: {},
      ENTITY_TYPE: "WIDGET",
      type: "CANVAS_WIDGET",
    },
    containerRoot: {
      meta: {},
      ENTITY_TYPE: "WIDGET",
      type: "CONTAINER_WIDGET",
    },
    appsmith: {
      meta: null,
      ENTITY_TYPE: "APPSMITH",
      type: null,
    },
  },
  ideType: "App",
  NAVIGATE_TO_TAB_SWITCHER: [
    {
      id: "page-name",
      text: "Page name",
    },
    {
      id: "url",
      text: "URL",
    },
  ],
  apiAndQueryCallbackTabSwitches: [
    {
      id: "onSuccess",
      text: "onSuccess",
    },
    {
      id: "onFailure",
      text: "onFailure",
    },
  ],
  defaultNavigateToTab: {
    id: "page-name",
    text: "Page name",
  },
  navigateToSwitches: [
    {
      id: "page-name",
      text: "Page name",
    },
    {
      id: "url",
      text: "URL",
    },
  ],
  remainingFields: [
    {
      field: "KEY_TEXT_FIELD_STORE_VALUE",
    },
    {
      field: "VALUE_TEXT_FIELD",
    },
  ],
}
