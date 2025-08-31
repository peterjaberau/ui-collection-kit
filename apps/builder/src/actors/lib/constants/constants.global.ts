/*
  $__name__$ is just to reduce occurrences of global def showing up in auto completion for user as `$` is less commonly used as entityName/

  GLOBAL_DEFS are maintained to support definition for array of objects which currently aren't supported by our generateTypeDef.
*/
export const GLOBAL_DEFS: any = {
  $__dropdownOption__$: {
    label: "string",
    value: "string",
  },
  $__dropdrowOptionWithChildren__$: {
    label: "string",
    value: "string",
    children: "[$__dropdrowOptionWithChildren__$]",
  },
  $__chartDataPoint__$: {
    x: "string",
    y: "string",
  },
  $__file__$: {
    data: "string",
    dataFormat: "string",
    name: "text",
    type: "file",
  },
  $__mapMarker__$: {
    lat: "number",
    long: "number",
    title: "string",
    description: "string",
  },
};

export const GLOBAL_FUNCTIONS: any = {
  "!name": "DATA_TREE.APPSMITH.FUNCTIONS",
  navigateTo: {
    "!url":
      "https://docs.appsmith.com/reference/appsmith-framework/widget-actions/navigate-to",
    "!doc":
      "Enables navigation between the internal pages of the App or to an external URL.",
    "!type":
      "fn(pageNameOrUrl: string, params: {}, target?: string) -> +Promise",
  },
  showAlert: {
    "!url":
      "https://docs.appsmith.com/reference/appsmith-framework/widget-actions/show-alert",
    "!doc":
      "Displays a temporary toast-style alert message to the user for precisely 5 seconds. The duration of the alert message can't be modified.",
    "!type": "fn(message: string, style: string) -> +Promise",
  },
  showModal: {
    "!url":
      "https://docs.appsmith.com/reference/appsmith-framework/widget-actions/show-modal",
    "!doc":
      "Opens an existing Modal widget and bring it into focus on the page",
    "!type": "fn(modalName: string) -> +Promise",
  },
  closeModal: {
    "!url":
      "https://docs.appsmith.com/reference/appsmith-framework/widget-actions/close-modal",
    "!doc": "Close a modal",
    "!type": "fn(modalName: string) -> +Promise",
  },
  storeValue: {
    "!url":
      "https://docs.appsmith.com/reference/appsmith-framework/widget-actions/store-value",
    "!doc":
      "Stores the data in the browser's local storage as key-value pairs that represent storage objects and can be later accessed anywhere in the application via <code>appsmith.store</code>.",
    "!type": "fn(key: string, value: any, persist?: bool) -> +Promise",
  },
  removeValue: {
    "!url":
      "https://docs.appsmith.com/reference/appsmith-framework/widget-actions/remove-value",
    "!doc": "Remove key value data locally",
    "!type": "fn(key: string) -> +Promise",
  },
  clearStore: {
    "!url":
      "https://docs.appsmith.com/reference/appsmith-framework/widget-actions/clear-store",
    "!doc": "Clear all key value data locally",
    "!type": "fn() -> +Promise",
  },
  download: {
    "!url":
      "https://docs.appsmith.com/reference/appsmith-framework/widget-actions/download",
    "!doc":
      "Download any data as a file, leveraging the capabilities of the downloadjs library.",
    "!type":
      "fn(data: string|+Blob, fileName: string, fileType?: string) -> +Promise",
  },
  copyToClipboard: {
    "!url":
      "https://docs.appsmith.com/reference/appsmith-framework/widget-actions/copy-to-clipboard",
    "!doc": "Copies the given text to clipboard",
    "!type": "fn(data: string, options: object) -> +Promise",
  },
  resetWidget: {
    "!url":
      "https://docs.appsmith.com/reference/appsmith-framework/widget-actions/reset-widget",
    "!doc":
      "Resets a widget to its default state. All user input changes are reverted and its properties' default values are applied.",
    "!type": "fn(widgetName: string, resetChildren: bool) -> +Promise",
  },
  setInterval: {
    "!url":
      "https://docs.appsmith.com/reference/appsmith-framework/widget-actions/intervals-time-events",
    "!doc": "Executes a function at a given interval",
    "!type":
      "fn(callback: fn() -> void, interval: number, id?: string) -> number",
  },
  clearInterval: {
    "!url":
      "https://docs.appsmith.com/reference/appsmith-framework/widget-actions/clear-interval",
    "!doc": "Stop executing a setInterval with id",
    "!type": "fn(id: string) -> void",
  },
  postWindowMessage: {
    "!url":
      "https://docs.appsmith.com/reference/appsmith-framework/widget-actions/post-message",
    "!doc":
      "Establish cross-origin communication between Window objects/page and iframes",
    "!type": "fn(message: unknown, source: string, targetOrigin: string)",
  },
  logoutUser: {
    "!url":
      "https://docs.appsmith.com/reference/appsmith-framework/widget-actions/logout-user",
    "!doc": "Logout user",
    "!type": "fn(redirectURL: string) -> void",
  },
};

export const ternDocsInfo: any = {
  showAlert: {
    exampleArgs: [
      "'This is a success message', 'success'",
      "'This is an error message', 'error'",
    ],
  },
  showModal: {
    exampleArgs: ["Modal1.name"],
  },
  closeModal: {
    exampleArgs: ["Modal1.name"],
  },
  navigateTo: {
    exampleArgs: [
      "'Page1', { id: 1 }",
      "'https://appsmith.com', {}, 'NEW_WINDOW'",
    ],
  },
  copyToClipboard: {
    exampleArgs: ["'Hello'"],
  },
  download: {
    exampleArgs: [
      "'Hello World', 'hello.txt', 'text/plain'",
      "FilePicker1.files[0].data, 'data.json'",
    ],
  },
  storeValue: {
    exampleArgs: ["'key', 'value'"],
  },
  removeValue: {
    exampleArgs: ["'key'"],
  },
  clearStore: {
    exampleArgs: [""],
  },
  resetWidget: {
    exampleArgs: ["'Table1', false"],
  },
  setInterval: {
    exampleArgs: ["() => showAlert('Hello'), 1000, 'id'"],
  },
  clearInterval: {
    exampleArgs: ["'id'"],
  },
  postWindowMessage: {
    exampleArgs: ["message, 'Iframe1', '*'"],
  },
  logoutUser: {
    exampleArgs: ["url"],
  },
};
