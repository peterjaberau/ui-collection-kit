import { SettingsPageContainer } from '@twenty-modules/settings/components/SettingsPageContainer';
import { SettingsIntegrationEditDatabaseConnectionContainer } from '@twenty-modules/settings/integrations/database-connection/components/SettingsIntegrationEditDatabaseConnectionContainer';
import { SettingsPath } from '@twenty-modules/types/SettingsPath';
import { SubMenuTopBarContainer } from '@twenty-modules/ui/layout/page/components/SubMenuTopBarContainer';
import { getSettingsPath } from '@twenty-ui/front/utils/navigation/getSettingsPath';

export const SettingsIntegrationEditDatabaseConnection = () => {
  return (
    <SubMenuTopBarContainer
      title="Edit connection"
      links={[
        {
          children: 'Workspace',
          href: getSettingsPath(SettingsPath.Workspace),
        },
        {
          children: 'Integrations',
          href: getSettingsPath(SettingsPath.Integrations),
        },
        { children: 'Edit connection' },
      ]}
    >
      <SettingsPageContainer>
        <SettingsIntegrationEditDatabaseConnectionContainer />
      </SettingsPageContainer>
    </SubMenuTopBarContainer>
  );
};
