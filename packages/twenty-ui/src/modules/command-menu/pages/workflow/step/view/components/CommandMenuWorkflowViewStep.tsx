import { useCommandMenuWorkflowVersionIdOrThrow } from '@twenty-modules/command-menu/pages/workflow/step/view/hooks/useCommandMenuWorkflowVersionIdOrThrow';
import { CommandMenuWorkflowViewStepContent } from '@twenty-modules/command-menu/pages/workflow/step/view/components/CommandMenuWorkflowViewStepContent';
import { getWorkflowVisualizerComponentInstanceId } from '@twenty-modules/workflow/utils/getWorkflowVisualizerComponentInstanceId';
import { WorkflowVisualizerComponentInstanceContext } from '@twenty-modules/workflow/workflow-diagram/states/contexts/WorkflowVisualizerComponentInstanceContext';

export const CommandMenuWorkflowViewStep = () => {
  const workflowVersionId = useCommandMenuWorkflowVersionIdOrThrow();

  return (
    <WorkflowVisualizerComponentInstanceContext.Provider
      value={{
        instanceId: getWorkflowVisualizerComponentInstanceId({
          recordId: workflowVersionId,
        }),
      }}
    >
      <CommandMenuWorkflowViewStepContent />
    </WorkflowVisualizerComponentInstanceContext.Provider>
  );
};
