import { SettingsPageContainer } from '@twenty-modules/settings/components/SettingsPageContainer';
import { SettingsIntegrationDatabaseConnectionShowContainer } from '@twenty-modules/settings/integrations/database-connection/components/SettingsIntegrationDatabaseConnectionShowContainer';
import { SettingsPath } from '@twenty-modules/types/SettingsPath';
import { SubMenuTopBarContainer } from '@twenty-modules/ui/layout/page/components/SubMenuTopBarContainer';
import { getSettingsPath } from '@twenty-ui/front/utils/navigation/getSettingsPath';

export const SettingsIntegrationShowDatabaseConnection = () => {
  return (
    <SubMenuTopBarContainer
      title="Database Connection"
      links={[
        {
          children: 'Workspace',
          href: getSettingsPath(SettingsPath.Workspace),
        },
        {
          children: 'Integrations',
          href: getSettingsPath(SettingsPath.Integrations),
        },
        { children: 'Database Connection' },
      ]}
    >
      <SettingsPageContainer>
        <SettingsIntegrationDatabaseConnectionShowContainer />
      </SettingsPageContainer>
    </SubMenuTopBarContainer>
  );
};
