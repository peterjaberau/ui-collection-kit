import { SettingsServerlessFunctionNewForm } from '@twenty-modules/settings/serverless-functions/components/SettingsServerlessFunctionNewForm';
import { SettingsServerlessFunctionTabEnvironmentVariablesSection } from '@twenty-modules/settings/serverless-functions/components/tabs/SettingsServerlessFunctionTabEnvironmentVariablesSection';
import { useDeleteOneServerlessFunction } from '@twenty-modules/settings/serverless-functions/hooks/useDeleteOneServerlessFunction';
import { ServerlessFunctionFormValues } from '@twenty-modules/settings/serverless-functions/hooks/useServerlessFunctionUpdateFormState';
import { SettingsServerlessFunctionHotkeyScope } from '@twenty-modules/settings/serverless-functions/types/SettingsServerlessFunctionHotKeyScope';
import { SettingsPath } from '@twenty-modules/types/SettingsPath';
import { ConfirmationModal } from '@twenty-modules/ui/layout/modal/components/ConfirmationModal';
import { useScopedHotkeys } from '@twenty-modules/ui/utilities/hotkey/hooks/useScopedHotkeys';
import { useState } from 'react';
import { Key } from 'ts-key-enum';
import { useHotkeyScopeOnMount } from '@twenty-ui/front/hooks/useHotkeyScopeOnMount';
import { useNavigateSettings } from '@twenty-ui/front/hooks/useNavigateSettings';
import { Button } from '@twenty-ui/input';
import { H2Title } from '@twenty-ui/display';
import { Section } from '@twenty-ui/layout';

export const SettingsServerlessFunctionSettingsTab = ({
  formValues,
  serverlessFunctionId,
  onChange,
  onCodeChange,
}: {
  formValues: ServerlessFunctionFormValues;
  serverlessFunctionId: string;
  onChange: (key: string) => (value: string) => void;
  onCodeChange: (filePath: string, value: string) => void;
}) => {
  const navigate = useNavigateSettings();
  const [isDeleteFunctionModalOpen, setIsDeleteFunctionModalOpen] =
    useState(false);
  const { deleteOneServerlessFunction } = useDeleteOneServerlessFunction();

  const deleteFunction = async () => {
    await deleteOneServerlessFunction({ id: serverlessFunctionId });
    navigate(SettingsPath.ServerlessFunctions);
  };

  useHotkeyScopeOnMount(
    SettingsServerlessFunctionHotkeyScope.ServerlessFunctionSettingsTab,
  );

  useScopedHotkeys(
    [Key.Delete],
    () => {
      setIsDeleteFunctionModalOpen(true);
    },
    SettingsServerlessFunctionHotkeyScope.ServerlessFunctionSettingsTab,
  );

  useScopedHotkeys(
    [Key.Escape],
    () => {
      navigate(SettingsPath.ServerlessFunctions);
    },
    SettingsServerlessFunctionHotkeyScope.ServerlessFunctionSettingsTab,
  );
  return (
    <>
      <SettingsServerlessFunctionNewForm
        formValues={formValues}
        onChange={onChange}
      />
      <SettingsServerlessFunctionTabEnvironmentVariablesSection
        formValues={formValues}
        onCodeChange={onCodeChange}
      />
      <Section>
        <H2Title title="Danger zone" description="Delete this function" />
        <Button
          accent="danger"
          onClick={() => setIsDeleteFunctionModalOpen(true)}
          variant="secondary"
          size="small"
          title="Delete function"
        />
      </Section>
      <ConfirmationModal
        confirmationValue={formValues.name}
        confirmationPlaceholder={formValues.name}
        isOpen={isDeleteFunctionModalOpen}
        setIsOpen={setIsDeleteFunctionModalOpen}
        title="Function Deletion"
        subtitle={
          <>
            This action cannot be undone. This will permanently delete your
            function. <br /> Please type in the function name to confirm.
          </>
        }
        onConfirmClick={deleteFunction}
        confirmButtonText="Delete function"
      />
    </>
  );
};
