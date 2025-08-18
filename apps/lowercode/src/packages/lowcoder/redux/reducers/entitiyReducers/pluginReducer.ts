import { createReducer } from "#lowcoder/util/reducerUtils";
import { ReduxAction, ReduxActionTypes } from "#lowcoder/constants/reduxActionConstants";
import { DataSourceTypeInfo } from "#lowcoder/api/datasourceApi";

export interface PluginDataState {
  data: DataSourceTypeInfo[];
  isDataSourceTypesFetched: boolean;
}

const initialState: PluginDataState = {
  data: [],
  isDataSourceTypesFetched: false,
};

const pluginReducer = createReducer(initialState, {
  [ReduxActionTypes.FETCH_DATA_SOURCE_TYPES_SUCCESS]: (
    state: PluginDataState,
    action: ReduxAction<DataSourceTypeInfo[]>
  ): PluginDataState => {
    return {
      data: action.payload,
      isDataSourceTypesFetched: true,
    };
  },
});
export default pluginReducer;
