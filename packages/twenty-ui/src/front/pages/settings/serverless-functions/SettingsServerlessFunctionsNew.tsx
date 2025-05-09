import { SaveAndCancelButtons } from '@twenty-modules/settings/components/SaveAndCancelButtons/SaveAndCancelButtons';
import { SettingsPageContainer } from '@twenty-modules/settings/components/SettingsPageContainer';
import { SubMenuTopBarContainer } from '@twenty-modules/ui/layout/page/components/SubMenuTopBarContainer';

import { SettingsServerlessFunctionNewForm } from '@twenty-modules/settings/serverless-functions/components/SettingsServerlessFunctionNewForm';
import { useCreateOneServerlessFunction } from '@twenty-modules/settings/serverless-functions/hooks/useCreateOneServerlessFunction';
import { ServerlessFunctionNewFormValues } from '@twenty-modules/settings/serverless-functions/hooks/useServerlessFunctionUpdateFormState';
import { SettingsServerlessFunctionHotkeyScope } from '@twenty-modules/settings/serverless-functions/types/SettingsServerlessFunctionHotKeyScope';
import { SettingsPath } from '@twenty-modules/types/SettingsPath';
import { useScopedHotkeys } from '@twenty-modules/ui/utilities/hotkey/hooks/useScopedHotkeys';
import { useState } from 'react';
import { Key } from 'ts-key-enum';
import { useHotkeyScopeOnMount } from '@twenty-ui/front/hooks/useHotkeyScopeOnMount';
import { useNavigateSettings } from '@twenty-ui/front/hooks/useNavigateSettings';
import { getSettingsPath } from '@twenty-ui/front/utils/navigation/getSettingsPath';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const SettingsServerlessFunctionsNew = () => {
  const navigate = useNavigateSettings();
  const [formValues, setFormValues] = useState<ServerlessFunctionNewFormValues>(
    {
      name: '',
      description: '',
    },
  );

  const { createOneServerlessFunction } = useCreateOneServerlessFunction();
  const handleSave = async () => {
    const newServerlessFunction = await createOneServerlessFunction({
      name: formValues.name,
      description: formValues.description,
    });

    if (!isDefined(newServerlessFunction?.data)) {
      return;
    }
    navigate(SettingsPath.ServerlessFunctions, {
      id: newServerlessFunction.data.createOneServerlessFunction.id,
    });
  };

  const onChange = (key: string) => {
    return (value: string) => {
      setFormValues((prevState) => ({
        ...prevState,
        [key]: value,
      }));
    };
  };

  const canSave = !!formValues.name && createOneServerlessFunction;

  useHotkeyScopeOnMount(
    SettingsServerlessFunctionHotkeyScope.ServerlessFunctionNew,
  );

  useScopedHotkeys(
    [Key.Enter],
    () => {
      if (canSave !== false) {
        handleSave();
      }
    },
    SettingsServerlessFunctionHotkeyScope.ServerlessFunctionNew,
    [canSave],
  );
  useScopedHotkeys(
    [Key.Escape],
    () => {
      navigate(SettingsPath.ServerlessFunctions);
    },
    SettingsServerlessFunctionHotkeyScope.ServerlessFunctionNew,
  );

  return (
    <SubMenuTopBarContainer
      title="New Function"
      links={[
        {
          children: 'Workspace',
          href: getSettingsPath(SettingsPath.Workspace),
        },
        {
          children: 'Functions',
          href: getSettingsPath(SettingsPath.ServerlessFunctions),
        },
        { children: 'New' },
      ]}
      actionButton={
        <SaveAndCancelButtons
          isSaveDisabled={!canSave}
          onCancel={() => {
            navigate(SettingsPath.ServerlessFunctions);
          }}
          onSave={handleSave}
        />
      }
    >
      <SettingsPageContainer>
        <SettingsServerlessFunctionNewForm
          formValues={formValues}
          onChange={onChange}
        />
      </SettingsPageContainer>
    </SubMenuTopBarContainer>
  );
};

export default SettingsServerlessFunctionsNew;
