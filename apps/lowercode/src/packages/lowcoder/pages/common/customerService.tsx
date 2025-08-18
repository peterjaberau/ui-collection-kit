import { User } from "#lowcoder/constants/userConstants";
import { isSaasMode } from "#lowcoder/util/envUtils";
import { SystemConfig } from "#lowcoder/constants/configConstants";

export const customerService: ((onPanelClose?: () => void) => React.ReactNode) | undefined =
  undefined;

export function showCustomerServicePanel() {}

export const showSwitchOrg = (user: User, config?: SystemConfig) => {
  return isSaasMode(config);
};

export const showHelpDropdown = (isEdit: boolean) => {
  return isEdit;
};
