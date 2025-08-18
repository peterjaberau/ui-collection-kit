import { FetchCommonSettingPayload, SetCommonSettingPayload } from "#lowcoder/api/commonSettingApi";
import { ReduxActionTypes } from "#lowcoder/constants/reduxActionConstants";

export const fetchCommonSettings = (payload: FetchCommonSettingPayload) => {
  return {
    type: ReduxActionTypes.FETCH_COMMON_SETTING,
    payload,
  };
};

export const setCommonSettings = <T = any>(payload: SetCommonSettingPayload<T>) => {
  return {
    type: ReduxActionTypes.SET_COMMON_SETTING,
    payload,
  };
};
