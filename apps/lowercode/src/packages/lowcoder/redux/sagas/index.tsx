import orgSagas from "#lowcoder/redux/sagas/orgSagas";
import { pluginSagas } from "#lowcoder/redux/sagas/pluginSagas";
import { datasourceSagas } from "#lowcoder/redux/sagas/datasourceSagas";
import userSagas from "#lowcoder/redux/sagas/userSagas";
import subscriptionSagas from "#lowcoder/redux/sagas/subscriptionSagas";
import enterpriseSagas from "#lowcoder/redux/sagas/enterpriseSagas";
import applicationSagas from "#lowcoder/redux/sagas/applicationSagas";
import configSagas from "#lowcoder/redux/sagas/configSagas";
import appSnapshotSagas from "#lowcoder/redux/sagas/appSnapshotSagas";
import commonSettingsSagas from "./commonSettingsSagas";
import { queryLibrarySagas } from "./queryLibrarySagas";
import { folderSagas } from "./folderSagas";
import { all, call, spawn } from "redux-saga/effects";
import log from "loglevel";
import { datasourcePermissionSagas } from "./datasourcePermissionSagas";
import { jsLibrarySagas } from "#lowcoder/redux/sagas/jsLibrarySagas";

export const sagas = [
  applicationSagas,
  folderSagas,
  userSagas,
  orgSagas,
  queryLibrarySagas,
  datasourceSagas,
  datasourcePermissionSagas,
  pluginSagas,
  configSagas,
  appSnapshotSagas,
  commonSettingsSagas,
  jsLibrarySagas,
  subscriptionSagas,
  enterpriseSagas,
];

export function* rootSaga(sagasToRun = sagas) {
  yield all(
    sagasToRun.map((saga) =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (e) {
            log.error(e);
          }
        }
      })
    )
  );
}
