import { useGetAvailablePackages } from '@twenty-modules/settings/serverless-functions/hooks/useGetAvailablePackages';
import { useServerlessFunctionUpdateFormState } from '@twenty-modules/settings/serverless-functions/hooks/useServerlessFunctionUpdateFormState';
import { WorkflowCodeAction } from '@twenty-modules/workflow/types/Workflow';
import { WorkflowStepHeader } from '@twenty-modules/workflow/workflow-steps/components/WorkflowStepHeader';

import { INDEX_FILE_PATH } from '@twenty-modules/serverless-functions/constants/IndexFilePath';
import { WorkflowStepBody } from '@twenty-modules/workflow/workflow-steps/components/WorkflowStepBody';
import { WorkflowEditActionServerlessFunctionFields } from '@twenty-modules/workflow/workflow-steps/workflow-actions/code-action/components/WorkflowEditActionServerlessFunctionFields';
import { getWrongExportedFunctionMarkers } from '@twenty-modules/workflow/workflow-steps/workflow-actions/code-action/utils/getWrongExportedFunctionMarkers';
import { useActionHeaderTypeOrThrow } from '@twenty-modules/workflow/workflow-steps/workflow-actions/hooks/useActionHeaderTypeOrThrow';
import { useActionIconColorOrThrow } from '@twenty-modules/workflow/workflow-steps/workflow-actions/hooks/useActionIconColorOrThrow';
import { getActionIcon } from '@twenty-modules/workflow/workflow-steps/workflow-actions/utils/getActionIcon';
import styled from '@emotion/styled';
import { Monaco } from '@monaco-editor/react';
import { editor } from 'monaco-editor';
import { AutoTypings } from 'monaco-editor-auto-typings';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';
import { CodeEditor } from '@twenty-ui/input';
import { useIcons } from '@twenty-ui/display';

const StyledCodeEditorContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

type WorkflowReadonlyActionServerlessFunctionProps = {
  action: WorkflowCodeAction;
};

export const WorkflowReadonlyActionServerlessFunction = ({
  action,
}: WorkflowReadonlyActionServerlessFunctionProps) => {
  const { getIcon } = useIcons();
  const serverlessFunctionId = action.settings.input.serverlessFunctionId;
  const serverlessFunctionVersion =
    action.settings.input.serverlessFunctionVersion;

  const { availablePackages } = useGetAvailablePackages({
    id: serverlessFunctionId,
  });

  const { formValues, loading } = useServerlessFunctionUpdateFormState({
    serverlessFunctionId,
    serverlessFunctionVersion,
  });

  const handleEditorDidMount = async (
    editor: editor.IStandaloneCodeEditor,
    monaco: Monaco,
  ) => {
    await AutoTypings.create(editor, {
      monaco,
      preloadPackages: true,
      onlySpecifiedPackages: true,
      versions: availablePackages,
      debounceDuration: 0,
    });
  };

  const headerTitle = isDefined(action.name)
    ? action.name
    : 'Code - Serverless Function';
  const headerIcon = getActionIcon(action.type);
  const headerIconColor = useActionIconColorOrThrow(action.type);
  const headerType = useActionHeaderTypeOrThrow(action.type);

  if (loading) {
    return null;
  }

  return (
    <>
      <WorkflowStepHeader
        Icon={getIcon(headerIcon)}
        iconColor={headerIconColor}
        initialTitle={headerTitle}
        headerType={headerType}
        disabled
      />
      <WorkflowStepBody>
        <WorkflowEditActionServerlessFunctionFields
          functionInput={action.settings.input.serverlessFunctionInput}
          readonly
        />
        <StyledCodeEditorContainer>
          <CodeEditor
            height={343}
            value={formValues.code?.[INDEX_FILE_PATH]}
            language={'typescript'}
            onMount={handleEditorDidMount}
            setMarkers={getWrongExportedFunctionMarkers}
            options={{
              readOnly: true,
              domReadOnly: true,
            }}
          />
        </StyledCodeEditorContainer>
      </WorkflowStepBody>
    </>
  );
};
