import { Trans, useLingui } from '@lingui/react/macro';

import { SettingsPageContainer } from '@twenty-modules/settings/components/SettingsPageContainer';
import { ChangePassword } from '@twenty-modules/settings/profile/components/ChangePassword';
import { DeleteAccount } from '@twenty-modules/settings/profile/components/DeleteAccount';
import { EmailField } from '@twenty-modules/settings/profile/components/EmailField';
import { NameFields } from '@twenty-modules/settings/profile/components/NameFields';
import { ProfilePictureUploader } from '@twenty-modules/settings/profile/components/ProfilePictureUploader';
import { SettingsPath } from '@twenty-modules/types/SettingsPath';
import { SubMenuTopBarContainer } from '@twenty-modules/ui/layout/page/components/SubMenuTopBarContainer';
import { getSettingsPath } from '@twenty-ui/front/utils/navigation/getSettingsPath';
import { H2Title } from '@twenty-ui//display';
import { Section } from '@twenty-ui//layout';

export const SettingsProfile = () => {
  const { t } = useLingui();

  return (
    <SubMenuTopBarContainer
      title={t`Profile`}
      links={[
        {
          children: <Trans>User</Trans>,
          href: getSettingsPath(SettingsPath.ProfilePage),
        },
        { children: <Trans>Profile</Trans> },
      ]}
    >
      <SettingsPageContainer>
        <Section>
          <H2Title title={t`Picture`} />
          <ProfilePictureUploader />
        </Section>
        <Section>
          <H2Title
            title={t`Name`}
            description={t`Your name as it will be displayed`}
          />
          <NameFields />
        </Section>
        <Section>
          <H2Title
            title={t`Email`}
            description={t`The email associated to your account`}
          />
          <EmailField />
        </Section>
        <Section>
          <ChangePassword />
        </Section>
        <Section>
          <DeleteAccount />
        </Section>
      </SettingsPageContainer>
    </SubMenuTopBarContainer>
  );
};
