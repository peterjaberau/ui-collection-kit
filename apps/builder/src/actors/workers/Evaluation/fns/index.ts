import navigateTo from "./navigateTo"
import showAlert from "./showAlert"
import { closeModal, showModal } from "./modalFns"
import download from "./download"
import postWindowMessage from "./postWindowMessage"
import copyToClipboard from "./copyToClipboard"
import resetWidget from "./resetWidget"
import { clearStore, removeValue, storeValue } from "./storeFns"
import run, { clear } from "./actionFns"
import { isAppsmithEntity } from "#actor-workers/Evaluation/evaluationUtils"
import { getGeoLocation, stopWatchGeoLocation, watchGeoLocation } from "./geolocationFns"
import { getFnWithGuards, isAsyncGuard } from "./utils/fnGuard"
import { isRunNClearFnQualifierEntity } from "#actor-workers/Evaluation/fns/utils/isRunNClearFnQualifierEntity"
import { logoutUser } from "./logout"

export const getPlatformFunctions = () => {
  return platformFns
}

export const getEntityFunctions = () => {
  return entityFns
}

const platformFns = [
  {
    name: "navigateTo",
    fn: navigateTo,
  },
  {
    name: "showAlert",
    fn: showAlert,
  },
  {
    name: "showModal",
    fn: showModal,
  },
  {
    name: "closeModal",
    fn: closeModal,
  },
  {
    name: "download",
    fn: download,
  },
  {
    name: "postWindowMessage",
    fn: postWindowMessage,
  },
  {
    name: "copyToClipboard",
    fn: copyToClipboard,
  },
  {
    name: "resetWidget",
    fn: resetWidget,
  },
  {
    name: "storeValue",
    fn: storeValue,
  },
  {
    name: "removeValue",
    fn: removeValue,
  },
  {
    name: "clearStore",
    fn: clearStore,
  },
  {
    name: "logoutUser",
    fn: logoutUser,
  },
]

const entityFns = [
  {
    name: "run",
    qualifier: (entity: any) => isRunNClearFnQualifierEntity(entity),
    fn: (entity: any, entityName: string) => {
      const actionEntity = entity as any

      actionEntity.name = entityName

      return getFnWithGuards(run.bind(actionEntity as any), `${entityName}.run`, [isAsyncGuard])
    },
  },
  {
    name: "clear",
    qualifier: (entity: any) => isRunNClearFnQualifierEntity(entity),
    fn: (entity: any, entityName: string) =>
      getFnWithGuards(clear.bind(entity as any), `${entityName}.clear`, [isAsyncGuard]),
  },
  {
    name: "getGeoLocation",
    path: "appsmith.geolocation.getCurrentPosition",
    qualifier: (entity: any) => isAppsmithEntity(entity),
    fn: () => getFnWithGuards(getGeoLocation, "appsmith.geolocation.getCurrentPosition", [isAsyncGuard]),
  },
  {
    name: "watchGeoLocation",
    path: "appsmith.geolocation.watchPosition",
    qualifier: (entity: any) => isAppsmithEntity(entity),
    fn: () => getFnWithGuards(watchGeoLocation, "appsmith.geolocation.watchPosition", [isAsyncGuard]),
  },
  {
    name: "stopWatchGeoLocation",
    path: "appsmith.geolocation.clearWatch",
    qualifier: (entity: any) => isAppsmithEntity(entity),
    fn: () => getFnWithGuards(stopWatchGeoLocation, "appsmith.geolocation.clearWatch", [isAsyncGuard]),
  },
]

export const getActionTriggerFunctionNames = (): Record<string, string> => {
  return ActionTriggerFunctionNames
}

const ActionTriggerFunctionNames: Record<string, string> = {
  CLEAR_INTERVAL: "clearInterval",
  CLEAR_PLUGIN_ACTION: "action.clear",
  CLOSE_MODAL: "closeModal",
  COPY_TO_CLIPBOARD: "copyToClipboard",
  DOWNLOAD: "download",
  NAVIGATE_TO: "navigateTo",
  RESET_WIDGET_META_RECURSIVE_BY_NAME: "resetWidget",
  RUN_PLUGIN_ACTION: "action.run",
  SET_INTERVAL: "setInterval",
  SHOW_ALERT: "showAlert",
  SHOW_MODAL_BY_NAME: "showModal",
  STORE_VALUE: "storeValue",
  REMOVE_VALUE: "removeValue",
  CLEAR_STORE: "clearStore",
  GET_CURRENT_LOCATION: "getCurrentLocation",
  WATCH_CURRENT_LOCATION: "watchLocation",
  STOP_WATCHING_CURRENT_LOCATION: "stopWatch",
  POST_MESSAGE: "postWindowMessage",
  SET_TIMEOUT: "setTimeout",
  CLEAR_TIMEOUT: "clearTimeout",
  LOGOUT_USER_INIT: "logoutUser",
}
