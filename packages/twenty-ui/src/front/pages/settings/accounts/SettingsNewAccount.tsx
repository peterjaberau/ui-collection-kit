import { SettingsNewAccountSection } from '@twenty-modules/settings/accounts/components/SettingsNewAccountSection';
import { SettingsPageContainer } from '@twenty-modules/settings/components/SettingsPageContainer';
import { SettingsPath } from '@twenty-modules/types/SettingsPath';
import { SubMenuTopBarContainer } from '@twenty-modules/ui/layout/page/components/SubMenuTopBarContainer';
import { getSettingsPath } from '@twenty-ui/front/utils/navigation/getSettingsPath';

export const SettingsNewAccount = () => {
  return (
    <SubMenuTopBarContainer
      title="New Account"
      links={[
        {
          children: 'User',
          href: getSettingsPath(SettingsPath.ProfilePage),
        },
        {
          children: 'Accounts',
          href: getSettingsPath(SettingsPath.Accounts),
        },
        { children: `New` },
      ]}
    >
      <SettingsPageContainer>
        <SettingsNewAccountSection />
      </SettingsPageContainer>
    </SubMenuTopBarContainer>
  );
};
