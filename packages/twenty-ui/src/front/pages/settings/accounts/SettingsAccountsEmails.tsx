import { SettingsAccountsMessageChannelsContainer } from '@twenty-modules/settings/accounts/components/SettingsAccountsMessageChannelsContainer';
import { SettingsPageContainer } from '@twenty-modules/settings/components/SettingsPageContainer';
import { SettingsPath } from '@twenty-modules/types/SettingsPath';
import { SubMenuTopBarContainer } from '@twenty-modules/ui/layout/page/components/SubMenuTopBarContainer';
import { useLingui } from '@lingui/react/macro';
import { getSettingsPath } from '@twenty-ui/front/utils/navigation/getSettingsPath';
import { Section } from '@twenty-ui//layout';

export const SettingsAccountsEmails = () => {
  const { t } = useLingui();

  return (
    <SubMenuTopBarContainer
      title={t`Emails`}
      links={[
        {
          children: t`User`,
          href: getSettingsPath(SettingsPath.ProfilePage),
        },
        {
          children: t`Accounts`,
          href: getSettingsPath(SettingsPath.Accounts),
        },
        { children: t`Emails` },
      ]}
    >
      <SettingsPageContainer>
        <Section>
          <SettingsAccountsMessageChannelsContainer />
        </Section>
      </SettingsPageContainer>
    </SubMenuTopBarContainer>
  );
};
