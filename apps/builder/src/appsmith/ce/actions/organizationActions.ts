import { ReduxActionTypes } from "ce/constants/ReduxActionConstants";
import type { UpdateOrganizationConfigRequest } from "ce/api/OrganizationApi";
import type { ApiResponse } from "api/ApiResponses";

export const getCurrentOrganization = (
  isBackgroundRequest = true,
  organizationConfig?: ApiResponse,
) => ({
  type: ReduxActionTypes.FETCH_CURRENT_ORGANIZATION_CONFIG,
  payload: {
    isBackgroundRequest,
    organizationConfig,
  },
});

export const updateOrganizationConfig = (
  payload: UpdateOrganizationConfigRequest,
) => ({
  type: ReduxActionTypes.UPDATE_ORGANIZATION_CONFIG,
  payload,
});

export const fetchMyOrganizations = () => {
  return {
    type: ReduxActionTypes.FETCH_MY_ORGANIZATIONS_INIT,
  };
};
