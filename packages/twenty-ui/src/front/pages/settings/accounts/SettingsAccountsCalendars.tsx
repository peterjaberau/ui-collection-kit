import { SettingsAccountsCalendarChannelsContainer } from '@twenty-modules/settings/accounts/components/SettingsAccountsCalendarChannelsContainer';
import { SettingsPageContainer } from '@twenty-modules/settings/components/SettingsPageContainer';
import { SettingsPath } from '@twenty-modules/types/SettingsPath';
import { SubMenuTopBarContainer } from '@twenty-modules/ui/layout/page/components/SubMenuTopBarContainer';
import { Trans, useLingui } from '@lingui/react/macro';
import { getSettingsPath } from '@twenty-ui/front/utils/navigation/getSettingsPath';
import { Section } from '@twenty-ui//layout';

export const SettingsAccountsCalendars = () => {
  const { t } = useLingui();

  return (
    <SubMenuTopBarContainer
      title={t`Calendars`}
      links={[
        {
          children: <Trans>User</Trans>,
          href: getSettingsPath(SettingsPath.ProfilePage),
        },
        {
          children: <Trans>Accounts</Trans>,
          href: getSettingsPath(SettingsPath.Accounts),
        },
        { children: <Trans>Calendars</Trans> },
      ]}
    >
      <SettingsPageContainer>
        <Section>
          <SettingsAccountsCalendarChannelsContainer />
        </Section>
      </SettingsPageContainer>
    </SubMenuTopBarContainer>
  );
};
