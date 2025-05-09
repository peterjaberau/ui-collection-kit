import { SettingsPageContainer } from '@twenty-modules/settings/components/SettingsPageContainer';
import { SettingsLabContent } from '@twenty-modules/settings/lab/components/SettingsLabContent';
import { SettingsPath } from '@twenty-modules/types/SettingsPath';
import { SubMenuTopBarContainer } from '@twenty-modules/ui/layout/page/components/SubMenuTopBarContainer';
import { getSettingsPath } from '@twenty-ui/front/utils/navigation/getSettingsPath';
import { t } from '@lingui/core/macro';

export const SettingsLab = () => {
  return (
    <SubMenuTopBarContainer
      title={t`Lab`}
      links={[
        {
          children: t`Other`,
          href: getSettingsPath(SettingsPath.Lab),
        },
        { children: t`Lab` },
      ]}
    >
      <SettingsPageContainer>
        <SettingsLabContent />
      </SettingsPageContainer>
    </SubMenuTopBarContainer>
  );
};
