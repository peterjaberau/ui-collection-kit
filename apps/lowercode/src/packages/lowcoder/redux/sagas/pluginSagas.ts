import { EvaluationReduxAction, ReduxActionTypes } from "#lowcoder/constants/reduxActionConstants";
import { GenericApiResponse } from "#lowcoder/api/apiResponses";
import { all, put, takeEvery } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import { DatasourceApi, DataSourceTypeInfo } from "#lowcoder/api/datasourceApi";
import { validateResponse } from "#lowcoder/api/apiUtils";
import log from "loglevel";
import { messageInstance } from "#lowcoder-design/components/GlobalInstances";

import { FetchDataSourceTypesActionPayload } from "#lowcoder/redux/reduxActions/datasourceActions";

export function* fetchDataSourceTypesSaga(
  action: EvaluationReduxAction<FetchDataSourceTypesActionPayload>
) {
  const { organizationId, onSuccess } = action.payload;
  try {
    const response: AxiosResponse<GenericApiResponse<DataSourceTypeInfo[]>> =
      yield DatasourceApi.fetchDatasourceType(organizationId);

    const isValidResponse: boolean = validateResponse(response);

    if (isValidResponse) {
      onSuccess?.(response.data.data);
      yield put({
        type: ReduxActionTypes.FETCH_DATA_SOURCE_TYPES_SUCCESS,
        payload: response.data.data,
      });
    }
  } catch (error: any) {
    log.error("fetch data source type error: ", error);
    messageInstance.error(error.message);
  }
}

export function* pluginSagas() {
  yield all([takeEvery(ReduxActionTypes.FETCH_DATA_SOURCE_TYPES, fetchDataSourceTypesSaga)]);
}
