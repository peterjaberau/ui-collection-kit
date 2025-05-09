import { MOCK_REMOTE_DATABASES } from '@twenty-modules/settings/integrations/constants/MockRemoteDatabases';
import { SETTINGS_INTEGRATION_REQUEST_CATEGORY } from '@twenty-modules/settings/integrations/constants/SettingsIntegrationRequest';
import { SETTINGS_INTEGRATION_WINDMILL_CATEGORY } from '@twenty-modules/settings/integrations/constants/SettingsIntegrationWindmill';
import { SETTINGS_INTEGRATION_ZAPIER_CATEGORY } from '@twenty-modules/settings/integrations/constants/SettingsIntegrationZapier';
import { SettingsIntegrationCategory } from '@twenty-modules/settings/integrations/types/SettingsIntegrationCategory';
import { getSettingsIntegrationAll } from '@twenty-modules/settings/integrations/utils/getSettingsIntegrationAll';
import { useIsFeatureEnabled } from '@twenty-modules/workspace/hooks/useIsFeatureEnabled';
import { FeatureFlagKey } from '@twenty-ui/front/generated/graphql';

export const useSettingsIntegrationCategories =
  (): SettingsIntegrationCategory[] => {
    const isAirtableIntegrationEnabled = useIsFeatureEnabled(
      FeatureFlagKey.IsAirtableIntegrationEnabled,
    );
    const isAirtableIntegrationActive = !!MOCK_REMOTE_DATABASES.find(
      ({ name }) => name === 'airtable',
    )?.isActive;

    const isPostgresqlIntegrationEnabled = useIsFeatureEnabled(
      FeatureFlagKey.IsPostgreSQLIntegrationEnabled,
    );
    const isPostgresqlIntegrationActive = !!MOCK_REMOTE_DATABASES.find(
      ({ name }) => name === 'postgresql',
    )?.isActive;

    const isStripeIntegrationEnabled = useIsFeatureEnabled(
      FeatureFlagKey.IsStripeIntegrationEnabled,
    );
    const isStripeIntegrationActive = !!MOCK_REMOTE_DATABASES.find(
      ({ name }) => name === 'stripe',
    )?.isActive;

    const allIntegrations = getSettingsIntegrationAll({
      isAirtableIntegrationEnabled,
      isAirtableIntegrationActive,
      isPostgresqlIntegrationEnabled,
      isPostgresqlIntegrationActive,
      isStripeIntegrationEnabled,
      isStripeIntegrationActive,
    });

    return [
      ...(allIntegrations.integrations.length > 0 ? [allIntegrations] : []),
      SETTINGS_INTEGRATION_ZAPIER_CATEGORY,
      SETTINGS_INTEGRATION_WINDMILL_CATEGORY,
      SETTINGS_INTEGRATION_REQUEST_CATEGORY,
    ];
  };
