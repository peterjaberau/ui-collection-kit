import { CommandMenuWorkflowRunViewStepContent } from '@twenty-modules/command-menu/pages/workflow/step/view-run/components/CommandMenuWorkflowRunViewStepContent';
import { useCommandMenuWorkflowRunIdOrThrow } from '@twenty-modules/command-menu/pages/workflow/step/view-run/hooks/useCommandMenuWorkflowRunIdOrThrow';
import { getWorkflowVisualizerComponentInstanceId } from '@twenty-modules/workflow/utils/getWorkflowVisualizerComponentInstanceId';
import { WorkflowVisualizerComponentInstanceContext } from '@twenty-modules/workflow/workflow-diagram/states/contexts/WorkflowVisualizerComponentInstanceContext';

export const CommandMenuWorkflowRunViewStep = () => {
  const workflowRunId = useCommandMenuWorkflowRunIdOrThrow();

  return (
    <WorkflowVisualizerComponentInstanceContext.Provider
      value={{
        instanceId: getWorkflowVisualizerComponentInstanceId({
          recordId: workflowRunId,
        }),
      }}
    >
      <CommandMenuWorkflowRunViewStepContent />
    </WorkflowVisualizerComponentInstanceContext.Provider>
  );
};
