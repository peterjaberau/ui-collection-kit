import { useCommandMenuWorkflowIdOrThrow } from '@twenty-modules/command-menu/pages/workflow/hooks/useCommandMenuWorkflowIdOrThrow';
import { CommandMenuWorkflowSelectTriggerTypeContent } from '@twenty-modules/command-menu/pages/workflow/trigger-type/components/CommandMenuWorkflowSelectTriggerTypeContent';
import { useWorkflowWithCurrentVersion } from '@twenty-modules/workflow/hooks/useWorkflowWithCurrentVersion';
import { getWorkflowVisualizerComponentInstanceId } from '@twenty-modules/workflow/utils/getWorkflowVisualizerComponentInstanceId';
import { WorkflowVisualizerComponentInstanceContext } from '@twenty-modules/workflow/workflow-diagram/states/contexts/WorkflowVisualizerComponentInstanceContext';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const CommandMenuWorkflowSelectTriggerType = () => {
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
      <CommandMenuWorkflowSelectTriggerTypeContent workflow={workflow} />
    </WorkflowVisualizerComponentInstanceContext.Provider>
  );
};
