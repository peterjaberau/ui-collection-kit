export enum SYSTEM_INTEGRATIONS {
  none = "none",
  integration = "integration",
  jsFunction = "jsFunction",
}

export enum SYSTEM_GLOBAL_FUNCTIONS {
  navigateTo = "navigateTo",
  showAlert = "showAlert",
  showModal = "showModal",
  closeModal = "closeModal",
  storeValue = "storeValue",
  removeValue = "removeValue",
  clearStore = "clearStore",
  download = "download",
  copyToClipboard = "copyToClipboard",
  resetWidget = "resetWidget",
  setInterval = "setInterval",
  clearInterval = "clearInterval",
  postWindowMessage = "postWindowMessage",
  logoutUser = "logoutUser",
}

export enum SYSTEM_NAMESPACED_FUNCTIONS {
  getGeolocation = "appsmith.geolocation.getCurrentPosition",
  watchGeolocation = "appsmith.geolocation.watchPosition",
  stopWatchGeolocation = "appsmith.geolocation.clearWatch",
}

export enum SYSTEM_NAMESPACED_FUNCTIONS {}


export const SystemFunction = {
  ...SYSTEM_INTEGRATIONS,
  ...SYSTEM_GLOBAL_FUNCTIONS,
  ...SYSTEM_NAMESPACED_FUNCTIONS,
  ...SYSTEM_NAMESPACED_FUNCTIONS,
};

export const SystemFunctionsWithFields = [
  ...Object.values(SYSTEM_NAMESPACED_FUNCTIONS),
  ...Object.keys(SYSTEM_GLOBAL_FUNCTIONS),
]


export enum SystemWorkers {
  LINT_WORKER = "LINT_WORKER",
  EVALUATION_WORKER = "EVALUATION_WORKER",
  SETUP_WORKER = "SETUP_WORKER",
}
export enum WorkerErrorTypes {
  CLONE_ERROR = "CLONE_ERROR",
}
