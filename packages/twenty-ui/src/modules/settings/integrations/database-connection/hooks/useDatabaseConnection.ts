import { WatchQueryFetchPolicy } from '@apollo/client';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useGetDatabaseConnection } from '@twenty-modules/databases/hooks/useGetDatabaseConnection';
import { useGetDatabaseConnectionTables } from '@twenty-modules/databases/hooks/useGetDatabaseConnectionTables';
import { useIsSettingsIntegrationEnabled } from '@twenty-modules/settings/integrations/hooks/useIsSettingsIntegrationEnabled';
import { useSettingsIntegrationCategories } from '@twenty-modules/settings/integrations/hooks/useSettingsIntegrationCategories';
import { AppPath } from '@twenty-modules/types/AppPath';
import { useNavigateApp } from '@twenty-ui/front/hooks/useNavigateApp';

export const useDatabaseConnection = ({
  fetchPolicy,
}: {
  fetchPolicy?: WatchQueryFetchPolicy;
}) => {
  const { databaseKey = '', connectionId = '' } = useParams();
  const navigateApp = useNavigateApp();

  const [integrationCategoryAll] = useSettingsIntegrationCategories();
  const integration = integrationCategoryAll.integrations.find(
    ({ from: { key } }) => key === databaseKey,
  );

  const isIntegrationEnabled = useIsSettingsIntegrationEnabled(databaseKey);

  const isIntegrationAvailable = !!integration && isIntegrationEnabled;

  const { connection, loading } = useGetDatabaseConnection({
    databaseKey,
    connectionId,
    skip: !isIntegrationAvailable,
    fetchPolicy,
  });

  useEffect(() => {
    if (!isIntegrationAvailable || (!loading && !connection)) {
      navigateApp(AppPath.NotFound);
    }
  }, [
    integration,
    databaseKey,
    navigateApp,
    isIntegrationAvailable,
    connection,
    loading,
  ]);

  const { tables } = useGetDatabaseConnectionTables({
    connectionId,
    skip: !connection,
    shouldFetchPendingSchemaUpdates: true,
    fetchPolicy,
  });

  return { connection, integration, databaseKey, tables };
};
