import { AppState } from "#lowcoder/redux/reducers";
import { SystemConfig } from "#lowcoder/constants/configConstants";

export const getSystemConfigFetching = (state: AppState) => {
  return state.ui.config.fetchingConfig;
};

export const selectSystemConfig = (state: AppState): SystemConfig | undefined => {
  return state.ui.config.systemConfig;
};

export const getBrandingConfig = (state: AppState) => {
  return state.ui.config.systemConfig?.branding;
};

export const getExternalEditorState = (state: AppState) => {
  return state.ui.config.editorExternalState;
};

export const getDeploymentId = (state: AppState) => {
  return state.ui.config.deploymentId;
};
