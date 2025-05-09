import { SettingsPageContainer } from '@twenty-modules/settings/components/SettingsPageContainer';
import { SettingsPath } from '@twenty-modules/types/SettingsPath';
import { SubMenuTopBarContainer } from '@twenty-modules/ui/layout/page/components/SubMenuTopBarContainer';
import { useColorScheme } from '@twenty-modules/ui/theme/hooks/useColorScheme';

import { Trans, useLingui } from '@lingui/react/macro';
import { DateTimeSettings } from '@twenty-ui/front/pages/settings/profile/appearance/components/DateTimeSettings';
import { LocalePicker } from '@twenty-ui/front/pages/settings/profile/appearance/components/LocalePicker';
import { getSettingsPath } from '@twenty-ui/front/utils/navigation/getSettingsPath';
import { ColorSchemePicker } from '@twenty-ui//input';
import { H2Title } from '@twenty-ui//display';
import { Section } from '@twenty-ui//layout';

export const SettingsExperience = () => {
  const { colorScheme, setColorScheme } = useColorScheme();

  const { t } = useLingui();

  return (
    <SubMenuTopBarContainer
      title={t`Experience`}
      links={[
        {
          children: <Trans>User</Trans>,
          href: getSettingsPath(SettingsPath.ProfilePage),
        },
        { children: <Trans>Experience</Trans> },
      ]}
    >
      <SettingsPageContainer>
        <Section>
          <H2Title title={t`Appearance`} />
          <ColorSchemePicker
            value={colorScheme}
            onChange={setColorScheme}
            lightLabel={t`Light`}
            darkLabel={t`Dark`}
            systemLabel={t`System settings`}
          />
        </Section>
        <Section>
          <H2Title
            title={t`Date and time`}
            description={t`Configure how dates are displayed across the app`}
          />
          <DateTimeSettings />
        </Section>

        <Section>
          <H2Title
            title={t`Language`}
            description={t`Select your preferred language`}
          />
          <LocalePicker />
        </Section>
      </SettingsPageContainer>
    </SubMenuTopBarContainer>
  );
};
