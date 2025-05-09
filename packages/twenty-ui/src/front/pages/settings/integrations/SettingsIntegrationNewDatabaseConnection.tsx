import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { z } from 'zod';

import { useCreateOneDatabaseConnection } from '@twenty-modules/databases/hooks/useCreateOneDatabaseConnection';
import { getForeignDataWrapperType } from '@twenty-modules/databases/utils/getForeignDataWrapperType';
import { SaveAndCancelButtons } from '@twenty-modules/settings/components/SaveAndCancelButtons/SaveAndCancelButtons';
import { SettingsPageContainer } from '@twenty-modules/settings/components/SettingsPageContainer';
import {
  SettingsIntegrationDatabaseConnectionForm,
  settingsIntegrationPostgreSQLConnectionFormSchema,
  settingsIntegrationStripeConnectionFormSchema,
} from '@twenty-modules/settings/integrations/database-connection/components/SettingsIntegrationDatabaseConnectionForm';
import { useIsSettingsIntegrationEnabled } from '@twenty-modules/settings/integrations/hooks/useIsSettingsIntegrationEnabled';
import { useSettingsIntegrationCategories } from '@twenty-modules/settings/integrations/hooks/useSettingsIntegrationCategories';
import { AppPath } from '@twenty-modules/types/AppPath';
import { SettingsPath } from '@twenty-modules/types/SettingsPath';
import { SnackBarVariant } from '@twenty-modules/ui/feedback/snack-bar-manager/components/SnackBar';
import { useSnackBar } from '@twenty-modules/ui/feedback/snack-bar-manager/hooks/useSnackBar';
import { SubMenuTopBarContainer } from '@twenty-modules/ui/layout/page/components/SubMenuTopBarContainer';
import { CreateRemoteServerInput } from '@twenty-ui/front/generated-metadata/graphql';
import { useNavigateApp } from '@twenty-ui/front/hooks/useNavigateApp';
import { useNavigateSettings } from '@twenty-ui/front/hooks/useNavigateSettings';
import { getSettingsPath } from '@twenty-ui/front/utils/navigation/getSettingsPath';
import { H2Title } from '@twenty-ui//display';
import { Section } from '@twenty-ui//layout';

const createRemoteServerInputPostgresSchema =
  settingsIntegrationPostgreSQLConnectionFormSchema.transform<CreateRemoteServerInput>(
    (values) => ({
      foreignDataWrapperType: 'postgres_fdw',
      foreignDataWrapperOptions: {
        dbname: values.dbname,
        host: values.host,
        port: values.port,
      },
      userMappingOptions: {
        password: values.password,
        user: values.user,
      },
      schema: values.schema,
      label: values.label,
    }),
  );

type SettingsIntegrationNewConnectionPostgresFormValues = z.infer<
  typeof createRemoteServerInputPostgresSchema
>;

const createRemoteServerInputStripeSchema =
  settingsIntegrationStripeConnectionFormSchema.transform<CreateRemoteServerInput>(
    (values) => ({
      foreignDataWrapperType: 'stripe_fdw',
      foreignDataWrapperOptions: {
        api_key: values.api_key,
      },
      label: values.label,
    }),
  );

type SettingsIntegrationNewConnectionStripeFormValues = z.infer<
  typeof createRemoteServerInputStripeSchema
>;

type SettingsIntegrationNewConnectionFormValues =
  | SettingsIntegrationNewConnectionPostgresFormValues
  | SettingsIntegrationNewConnectionStripeFormValues;

export const SettingsIntegrationNewDatabaseConnection = () => {
  const { databaseKey = '' } = useParams();
  const navigate = useNavigateSettings();
  const navigateApp = useNavigateApp();

  const [integrationCategoryAll] = useSettingsIntegrationCategories();
  const integration = integrationCategoryAll.integrations.find(
    ({ from: { key } }) => key === databaseKey,
  );

  const { createOneDatabaseConnection } = useCreateOneDatabaseConnection();
  const { enqueueSnackBar } = useSnackBar();

  const isIntegrationEnabled = useIsSettingsIntegrationEnabled(databaseKey);

  const isIntegrationAvailable = !!integration && isIntegrationEnabled;

  useEffect(() => {
    if (!isIntegrationAvailable) {
      navigateApp(AppPath.NotFound);
    }
  }, [integration, databaseKey, navigateApp, isIntegrationAvailable]);

  const newConnectionSchema =
    databaseKey === 'postgresql'
      ? createRemoteServerInputPostgresSchema
      : createRemoteServerInputStripeSchema;

  const formConfig = useForm<SettingsIntegrationNewConnectionFormValues>({
    mode: 'onTouched',
    resolver: zodResolver(newConnectionSchema),
  });

  if (!isIntegrationAvailable) return null;

  const settingsIntegrationsPagePath = getSettingsPath(
    SettingsPath.Integrations,
  );

  const canSave = formConfig.formState.isValid;

  const handleSave = async () => {
    const formValues = formConfig.getValues();

    try {
      const createdConnection = await createOneDatabaseConnection(
        newConnectionSchema.parse({
          ...formValues,
          foreignDataWrapperType: getForeignDataWrapperType(databaseKey),
        }),
      );

      const connectionId = createdConnection.data?.createOneRemoteServer.id;

      if (!connectionId) {
        throw new Error('Failed to create connection');
      }

      navigate(SettingsPath.IntegrationDatabaseConnection, {
        databaseKey,
        connectionId,
      });
    } catch (error) {
      enqueueSnackBar((error as Error).message, {
        variant: SnackBarVariant.Error,
      });
    }
  };

  return (
    <SubMenuTopBarContainer
      title="New"
      links={[
        {
          children: 'Workspace',
          href: getSettingsPath(SettingsPath.Workspace),
        },
        {
          children: 'Integrations',
          href: settingsIntegrationsPagePath,
        },
        {
          children: integration.text,
          href: `${settingsIntegrationsPagePath}/${databaseKey}`,
        },
        { children: 'New' },
      ]}
      actionButton={
        <SaveAndCancelButtons
          isSaveDisabled={!canSave}
          onCancel={() =>
            navigate(SettingsPath.IntegrationDatabase, {
              databaseKey,
            })
          }
          onSave={handleSave}
        />
      }
    >
      <SettingsPageContainer>
        <FormProvider
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...formConfig}
        >
          <Section>
            <H2Title
              title="Connect a new database"
              description="Provide the information to connect your database"
            />
            <SettingsIntegrationDatabaseConnectionForm
              databaseKey={databaseKey}
            />
          </Section>
        </FormProvider>
      </SettingsPageContainer>
    </SubMenuTopBarContainer>
  );
};
