import { SettingsAdminContent } from '@twenty-modules/settings/admin-panel/components/SettingsAdminContent';
import { SettingsPageContainer } from '@twenty-modules/settings/components/SettingsPageContainer';
import { SettingsPath } from '@twenty-modules/types/SettingsPath';
import { SubMenuTopBarContainer } from '@twenty-modules/ui/layout/page/components/SubMenuTopBarContainer';
import { useLingui } from '@lingui/react/macro';
import { getSettingsPath } from '@twenty-ui/front/utils/navigation/getSettingsPath';

export const SettingsAdmin = () => {
  const { t } = useLingui();

  return (
    <SubMenuTopBarContainer
      title={t`Admin Panel`}
      links={[
        {
          children: t`Other`,
          href: getSettingsPath(SettingsPath.AdminPanel),
        },
        { children: t`Admin Panel` },
      ]}
    >
      <SettingsPageContainer>
        <SettingsAdminContent />
      </SettingsPageContainer>
    </SubMenuTopBarContainer>
  );
};
