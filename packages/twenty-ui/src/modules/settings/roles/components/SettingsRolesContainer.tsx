import { SettingsPath } from '@twenty-modules/types/SettingsPath';

import { getSettingsPath } from '@twenty-ui/front/utils/navigation/getSettingsPath';

import { SettingsPageContainer } from '@twenty-modules/settings/components/SettingsPageContainer';
import { SettingsRoleDefaultRole } from '@twenty-modules/settings/roles/components/SettingsRolesDefaultRole';

import { SettingsRolesList } from '@twenty-modules/settings/roles/components/SettingsRolesList';
import { settingsAllRolesSelector } from '@twenty-modules/settings/roles/states/settingsAllRolesSelector';
import { settingsRolesIsLoadingState } from '@twenty-modules/settings/roles/states/settingsRolesIsLoadingState';
import { SubMenuTopBarContainer } from '@twenty-modules/ui/layout/page/components/SubMenuTopBarContainer';
import { Trans, useLingui } from '@lingui/react/macro';
import { useRecoilValue } from 'recoil';
import { H3Title } from '@twenty-ui/display';

export const SettingsRolesContainer = () => {
  const { t } = useLingui();

  const settingsAllRoles = useRecoilValue(settingsAllRolesSelector);
  const settingsRolesIsLoading = useRecoilValue(settingsRolesIsLoadingState);

  if (settingsRolesIsLoading) {
    return null;
  }

  return (
    <SubMenuTopBarContainer
      title={<H3Title title={t`Roles`} />}
      links={[
        {
          children: <Trans>Workspace</Trans>,
          href: getSettingsPath(SettingsPath.Workspace),
        },
        { children: <Trans>Roles</Trans> },
      ]}
    >
      <SettingsPageContainer>
        <SettingsRolesList />
        <SettingsRoleDefaultRole roles={settingsAllRoles} />
      </SettingsPageContainer>
    </SubMenuTopBarContainer>
  );
};
