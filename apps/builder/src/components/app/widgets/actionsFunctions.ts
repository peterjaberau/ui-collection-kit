/*
- ActionExecutionSagas
    - executeAppAction
- EvaluationsSaga
    - evaluateAndExecuteDynamicTrigger
        - (unEvalTree.getUnevalTreeWithWidgetsRegistered)
    - evalAndLintingHandler
        - (requiresLinting.getRequiresLinting)
        - (requiresEval.shouldTriggerEvaluation)
    - updateDataTreeHandler
        - (postEvalActions)
        - (getAppMode)
        - (resetWidgetsMetaState)
        - (parseUpdatesAndDeleteUndefinedUpdates)
        - (setEvaluatedTree)
        - (ConfigTreeActions.setConfigTree)
        - (updateMetaState)
        - (updatedDataTree)
    - evaluateTreeSaga
        - (getAllActionValidationConfig)
        - (unevalTree)
        - (getWidgets)
        - (getMetaWidgets)
        - (getSelectedAppTheme)
        (getInstanceId) (getCurrentApplicationId) (getCurrentPageId) (getApplicationLastDeployedAt)
        (getAppMode) (getWidgetsMeta) (evalTreeRequestData)



 */





export function* executeActionTriggers({ trigger, eventType, triggerMeta }: any) {
  //const source = getSourceFromTriggerMeta(triggerMeta);

  switch (trigger.type) {
    case "RUN_PLUGIN_ACTION":
      //executePluginActionTriggerSaga
      break
    case "CLEAR_PLUGIN_ACTION":
      //clearActionResponse, getAction, updateActionData
      break
    case "NAVIGATE_TO":
      //navigateActionSaga
      break
    case "SHOW_ALERT":
      //showAlertSaga
      break
    case "SHOW_MODAL_BY_NAME":
      //openModalSaga
      break
    case "CLOSE_MODAL":
      //closeModalSaga
      break
    case "DOWNLOAD":
      //downloadSaga
      break
    case "COPY_TO_CLIPBOARD":
      //copySaga
      break
    case "RESET_WIDGET_META_RECURSIVE_BY_NAME":
      //resetWidgetActionSaga
      break
    case "GET_CURRENT_LOCATION":
      //getCurrentLocationSaga
      break
    case "WATCH_CURRENT_LOCATION":
      //watchCurrentLocation
      break
    case "STOP_WATCHING_CURRENT_LOCATION":
      //stopWatchCurrentLocation
      break
    case "POST_MESSAGE":
      //postMessageSaga
      break
    case "LOGOUT_USER_INIT":
      //globalFunctionLogoutUser
      break
    default:
      console.log("Trigger type unknown", trigger, source)
  }
}

export function* executeAppAction({ payload }) {
  //evaluateAndExecuteDynamicTrigger
}

export function* initiateActionTriggerExecution({ action }) {
  //executeAppAction
}

export function* watchActionExecutionSagas() {
  // EXECUTE_TRIGGER_REQUEST --> initiateActionTriggerExecution
  // SET_APP_VERSION_ON_WORKER --> setAppVersionOnWorkerSaga
  // EVALUATE_ACTION_SELECTOR_FIELD --> evaluateActionSelectorFieldSaga
}
