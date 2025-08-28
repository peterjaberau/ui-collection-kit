import { ReduxActionTypes } from "ce/constants/ReduxActionConstants";

export const forceOpenWidgetPanel = (flag: boolean) => ({
  type: ReduxActionTypes.SET_FORCE_WIDGET_PANEL_OPEN,
  payload: flag,
});
