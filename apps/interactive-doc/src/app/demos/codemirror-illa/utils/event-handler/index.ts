
//TODO: add code to the below functions

// common utils
export const goToURL = (params: any) => {

}

export const showNotification = (params: any) => {

}

export const copyToClipboard = (copiedValue: any) => {
}

export const setRouter = (params: any) => {

}

export const downloadFile = (params: any) => {

}

// globalDataUtils
export const setGlobalDataIn = (params: any, callback: any) => {
  const { key, path } = params
  if (typeof key !== "string" || typeof path !== "string") return
  // store.dispatch(executionActions.setInGlobalStateInExecutionReducer(params))
  if (callback) {
    callback?.(params)
  }
}

export const setGlobalDataValue = (params: any, callback: any) => {
  const { key } = params
  if (typeof key !== "string") return
  // store.dispatch(executionActions.setGlobalStateInExecutionReducer(params))
  if (callback) {
    callback?.(params)
  }
}

// localStorage
export const clearLocalStorage = (callback: any) => {
  if (callback) {
    callback?.()
  }
  // store.dispatch(executionActions.clearLocalStorageInExecutionReducer())
}

export const setValueLocalStorage = (params: any, callback: any) => {
  const { key } = params
  if (typeof key !== "string") return
  if (callback) {
    callback?.(params)
  }
  // store.dispatch(executionActions.setLocalStorageInExecutionReducer(params))
}
