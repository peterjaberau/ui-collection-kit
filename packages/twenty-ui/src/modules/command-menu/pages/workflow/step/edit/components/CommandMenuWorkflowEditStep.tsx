import { useCommandMenuWorkflowIdOrThrow } from '@twenty-modules/command-menu/pages/workflow/hooks/useCommandMenuWorkflowIdOrThrow';
import { CommandMenuWorkflowEditStepContent } from '@twenty-modules/command-menu/pages/workflow/step/edit/components/CommandMenuWorkflowEditStepContent';
import { useWorkflowWithCurrentVersion } from '@twenty-modules/workflow/hooks/useWorkflowWithCurrentVersion';
import { WorkflowStepContextProvider } from '@twenty-modules/workflow/states/context/WorkflowStepContext';
import { getWorkflowVisualizerComponentInstanceId } from '@twenty-modules/workflow/utils/getWorkflowVisualizerComponentInstanceId';
import { WorkflowVisualizerComponentInstanceContext } from '@twenty-modules/workflow/workflow-diagram/states/contexts/WorkflowVisualizerComponentInstanceContext';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const CommandMenuWorkflowEditStep = () => {
  const workflowId = useCommandMenuWorkflowIdOrThrow();
  const workflow = useWorkflowWithCurrentVersion(workflowId);

  if (!isDefined(workflow)) {
    return null;
  }

  return (
    <WorkflowVisualizerComponentInstanceContext.Provider
      value={{
        instanceId: getWorkflowVisualizerComponentInstanceId({
          recordId: workflowId,
        }),
      }}
    >
      <WorkflowStepContextProvider
        value={{ workflowVersionId: workflow.currentVersion.id }}
      >
        <CommandMenuWorkflowEditStepContent workflow={workflow} />
      </WorkflowStepContextProvider>
    </WorkflowVisualizerComponentInstanceContext.Provider>
  );
};
