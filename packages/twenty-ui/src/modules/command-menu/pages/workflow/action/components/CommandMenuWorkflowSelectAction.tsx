import { CommandMenuWorkflowSelectActionContent } from '@twenty-modules/command-menu/pages/workflow/action/components/CommandMenuWorkflowSelectActionContent';
import { useCommandMenuWorkflowIdOrThrow } from '@twenty-modules/command-menu/pages/workflow/hooks/useCommandMenuWorkflowIdOrThrow';
import { useWorkflowWithCurrentVersion } from '@twenty-modules/workflow/hooks/useWorkflowWithCurrentVersion';
import { getWorkflowVisualizerComponentInstanceId } from '@twenty-modules/workflow/utils/getWorkflowVisualizerComponentInstanceId';
import { WorkflowVisualizerComponentInstanceContext } from '@twenty-modules/workflow/workflow-diagram/states/contexts/WorkflowVisualizerComponentInstanceContext';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const CommandMenuWorkflowSelectAction = () => {
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
      <CommandMenuWorkflowSelectActionContent workflow={workflow} />
    </WorkflowVisualizerComponentInstanceContext.Provider>
  );
};
