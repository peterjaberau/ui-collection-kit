import { ReduxActionTypes } from "ce/constants/ReduxActionConstants";
import type { ApiResponse } from "api/ApiResponses";

export const getCurrentUser = (userProfile?: ApiResponse) => ({
  type: ReduxActionTypes.FETCH_USER_INIT,
  payload: { userProfile },
});
