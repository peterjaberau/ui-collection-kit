const data = {
  appInfoActions: {
    updateAppInfoReducer: 'appInfo\/updateAppInfoReducer',
    updateAppContributeReducer: 'appInfo\/updateAppContributeReducer',
    updateAppPublicReducer: 'appInfo\/updateAppPublicReducer',
    updateAppDeployedReducer: 'appInfo\/updateAppDeployedReducer'
  },
  appReducer: 'function combination(state = {}, action) {\n    if (shapeAssertionError) {\n      throw shapeAssertionError;\n    }\n    if (true) {\n      const warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);\n      if (warningMessage) {\n        warning(warningMessage);\n      }\n    }\n    let hasChanged = false;\n    const nextState = {};\n    for (let i = 0; i < finalReducerKeys.length; i++) {\n      const key = finalReducerKeys[i];\n      const reducer = finalReducers[key];\n      const previousStateForKey = state[key];\n      const nextStateForKey = reducer(previousStateForKey, action);\n      if (typeof nextStateForKey === "undefined") {\n        const actionType = action && action.type;\n        throw new Error(false ? formatProdErrorMessage(14) : `When called with an action of type ${actionType ? `"${String(actionType)}"` : "(unknown type)"}, the slice reducer for key "${key}" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.`);\n      }\n      nextState[key] = nextStateForKey;\n      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;\n    }\n    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;\n    return hasChanged ? nextState : state;\n  }'
}
