import { SettingsIntegrationEditDatabaseConnectionContent } from '@twenty-modules/settings/integrations/database-connection/components/SettingsIntegrationEditDatabaseConnectionContent';
import { useDatabaseConnection } from '@twenty-modules/settings/integrations/database-connection/hooks/useDatabaseConnection';

export const SettingsIntegrationEditDatabaseConnectionContainer = () => {
  const { connection, integration, databaseKey, tables } =
    useDatabaseConnection({});

  if (!connection || !integration) return null;

  return (
    <SettingsIntegrationEditDatabaseConnectionContent
      connection={connection}
      integration={integration}
      databaseKey={databaseKey}
      tables={tables}
    />
  );
};
