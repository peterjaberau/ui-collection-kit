import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useGetDatabaseConnections } from '@twenty-modules/databases/hooks/useGetDatabaseConnections';
import { SettingsPageContainer } from '@twenty-modules/settings/components/SettingsPageContainer';
import { SettingsIntegrationPreview } from '@twenty-modules/settings/integrations/components/SettingsIntegrationPreview';
import { SettingsIntegrationDatabaseConnectionsListCard } from '@twenty-modules/settings/integrations/database-connection/components/SettingsIntegrationDatabaseConnectionsListCard';
import { useIsSettingsIntegrationEnabled } from '@twenty-modules/settings/integrations/hooks/useIsSettingsIntegrationEnabled';
import { useSettingsIntegrationCategories } from '@twenty-modules/settings/integrations/hooks/useSettingsIntegrationCategories';
import { AppPath } from '@twenty-modules/types/AppPath';
import { SettingsPath } from '@twenty-modules/types/SettingsPath';
import { SubMenuTopBarContainer } from '@twenty-modules/ui/layout/page/components/SubMenuTopBarContainer';
import { useNavigateApp } from '@twenty-ui/front/hooks/useNavigateApp';
import { getSettingsPath } from '@twenty-ui/front/utils/navigation/getSettingsPath';
import { H2Title } from '@twenty-ui//display';
import { Section } from '@twenty-ui//layout';

export const SettingsIntegrationDatabase = () => {
  const { databaseKey = '' } = useParams();
  const navigateApp = useNavigateApp();

  const [integrationCategoryAll] = useSettingsIntegrationCategories();
  const integration = integrationCategoryAll.integrations.find(
    ({ from: { key } }) => key === databaseKey,
  );

  const isIntegrationEnabled = useIsSettingsIntegrationEnabled(databaseKey);

  const isIntegrationAvailable = !!integration && isIntegrationEnabled;

  useEffect(() => {
    if (!isIntegrationAvailable) {
      navigateApp(AppPath.NotFound);
    }
  }, [integration, databaseKey, navigateApp, isIntegrationAvailable]);

  const { connections } = useGetDatabaseConnections({
    databaseKey,
    skip: !isIntegrationAvailable,
  });

  if (!isIntegrationAvailable) return null;

  return (
    <SubMenuTopBarContainer
      title={integration.text}
      links={[
        {
          children: 'Workspace',
          href: getSettingsPath(SettingsPath.Workspace),
        },
        {
          children: 'Integrations',
          href: getSettingsPath(SettingsPath.Integrations),
        },
        { children: integration.text },
      ]}
    >
      <SettingsPageContainer>
        <SettingsIntegrationPreview
          integrationLogoUrl={integration.from.image}
        />
        <Section>
          <H2Title
            title={`${integration.text} database`}
            description={`Connect or access your ${integration.text} data`}
          />
          <SettingsIntegrationDatabaseConnectionsListCard
            integration={integration}
            connections={connections}
          />
        </Section>
      </SettingsPageContainer>
    </SubMenuTopBarContainer>
  );
};
