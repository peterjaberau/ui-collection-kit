import { SettingsAdminGeneral } from '@twenty-modules/settings/admin-panel/components/SettingsAdminGeneral';
import { SettingsAdminConfigVariables } from '@twenty-modules/settings/admin-panel/config-variables/components/SettingsAdminConfigVariables';
import { SETTINGS_ADMIN_TABS } from '@twenty-modules/settings/admin-panel/constants/SettingsAdminTabs';
import { SETTINGS_ADMIN_TABS_ID } from '@twenty-modules/settings/admin-panel/constants/SettingsAdminTabsId';
import { SettingsAdminHealthStatus } from '@twenty-modules/settings/admin-panel/health-status/components/SettingsAdminHealthStatus';
import { activeTabIdComponentState } from '@twenty-modules/ui/layout/tab/states/activeTabIdComponentState';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';

export const SettingsAdminTabContent = () => {
  const activeTabId = useRecoilComponentValueV2(
    activeTabIdComponentState,
    SETTINGS_ADMIN_TABS_ID,
  );

  switch (activeTabId) {
    case SETTINGS_ADMIN_TABS.GENERAL:
      return <SettingsAdminGeneral />;
    case SETTINGS_ADMIN_TABS.CONFIG_VARIABLES:
      return <SettingsAdminConfigVariables />;
    case SETTINGS_ADMIN_TABS.HEALTH_STATUS:
      return <SettingsAdminHealthStatus />;
    default:
      return null;
  }
};
