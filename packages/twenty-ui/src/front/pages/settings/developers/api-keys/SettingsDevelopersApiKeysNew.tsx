import { DateTime } from 'luxon';
import { useState } from 'react';

import { CoreObjectNameSingular } from '@twenty-modules/object-metadata/types/CoreObjectNameSingular';
import { useCreateOneRecord } from '@twenty-modules/object-record/hooks/useCreateOneRecord';
import { SaveAndCancelButtons } from '@twenty-modules/settings/components/SaveAndCancelButtons/SaveAndCancelButtons';
import { SettingsPageContainer } from '@twenty-modules/settings/components/SettingsPageContainer';
import { EXPIRATION_DATES } from '@twenty-modules/settings/developers/constants/ExpirationDates';
import { apiKeyTokenFamilyState } from '@twenty-modules/settings/developers/states/apiKeyTokenFamilyState';
import { ApiKey } from '@twenty-modules/settings/developers/types/api-key/ApiKey';
import { SettingsPath } from '@twenty-modules/types/SettingsPath';
import { Select } from '@twenty-modules/ui/input/components/Select';
import { TextInput } from '@twenty-modules/ui/input/components/TextInput';
import { SubMenuTopBarContainer } from '@twenty-modules/ui/layout/page/components/SubMenuTopBarContainer';
import { useLingui } from '@lingui/react/macro';
import { useRecoilCallback } from 'recoil';
import { Key } from 'ts-key-enum';
import { useGenerateApiKeyTokenMutation } from '@twenty-ui/front/generated/graphql';
import { useNavigateSettings } from '@twenty-ui/front/hooks/useNavigateSettings';
import { getSettingsPath } from '@twenty-ui/front/utils/navigation/getSettingsPath';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';
import { H2Title } from '@twenty-ui//display';
import { Section } from '@twenty-ui//layout';

export const SettingsDevelopersApiKeysNew = () => {
  const { t } = useLingui();
  const [generateOneApiKeyToken] = useGenerateApiKeyTokenMutation();
  const navigateSettings = useNavigateSettings();
  const [formValues, setFormValues] = useState<{
    name: string;
    expirationDate: number | null;
  }>({
    expirationDate: EXPIRATION_DATES[5].value,
    name: '',
  });

  const { createOneRecord: createOneApiKey } = useCreateOneRecord<ApiKey>({
    objectNameSingular: CoreObjectNameSingular.ApiKey,
  });

  const setApiKeyTokenCallback = useRecoilCallback(
    ({ set }) =>
      (apiKeyId: string, token: string) => {
        set(apiKeyTokenFamilyState(apiKeyId), token);
      },
    [],
  );

  const handleSave = async () => {
    const expiresAt = DateTime.now()
      .plus({ days: formValues.expirationDate ?? 30 })
      .toString();

    const newApiKey = await createOneApiKey?.({
      name: formValues.name,
      expiresAt,
    });

    if (!newApiKey) {
      return;
    }

    const tokenData = await generateOneApiKeyToken({
      variables: {
        apiKeyId: newApiKey.id,
        expiresAt: expiresAt,
      },
    });

    if (isDefined(tokenData.data?.generateApiKeyToken)) {
      setApiKeyTokenCallback(
        newApiKey.id,
        tokenData.data.generateApiKeyToken.token,
      );
      navigateSettings(SettingsPath.DevelopersApiKeyDetail, {
        apiKeyId: newApiKey.id,
      });
    }
  };
  const canSave = !!formValues.name && createOneApiKey;
  return (
    <SubMenuTopBarContainer
      title={t`New key`}
      links={[
        {
          children: t`Workspace`,
          href: getSettingsPath(SettingsPath.Workspace),
        },
        {
          children: t`APIs`,
          href: getSettingsPath(SettingsPath.APIs),
        },
        { children: t`New Key` },
      ]}
      actionButton={
        <SaveAndCancelButtons
          isSaveDisabled={!canSave}
          onCancel={() => {
            navigateSettings(SettingsPath.APIs);
          }}
          onSave={handleSave}
        />
      }
    >
      <SettingsPageContainer>
        <Section>
          <H2Title title={t`Name`} description={t`Name of your API key`} />
          <TextInput
            placeholder={t`E.g. backoffice integration`}
            value={formValues.name}
            onKeyDown={(e) => {
              if (e.key === Key.Enter) {
                handleSave();
              }
            }}
            onChange={(value) => {
              setFormValues((prevState) => ({
                ...prevState,
                name: value,
              }));
            }}
            fullWidth
          />
        </Section>
        <Section>
          <H2Title
            title={t`Expiration Date`}
            description={t`When the API key will expire.`}
          />
          <Select
            dropdownId="object-field-type-select"
            options={EXPIRATION_DATES}
            value={formValues.expirationDate}
            onChange={(value) => {
              setFormValues((prevState) => ({
                ...prevState,
                expirationDate: value,
              }));
            }}
          />
        </Section>
      </SettingsPageContainer>
    </SubMenuTopBarContainer>
  );
};
