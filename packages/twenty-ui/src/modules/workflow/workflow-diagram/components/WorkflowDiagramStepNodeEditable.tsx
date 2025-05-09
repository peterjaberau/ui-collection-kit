import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';
import { useWorkflowWithCurrentVersion } from '@twenty-modules/workflow/hooks/useWorkflowWithCurrentVersion';
import { workflowVisualizerWorkflowIdComponentState } from '@twenty-modules/workflow/states/workflowVisualizerWorkflowIdComponentState';
import { assertWorkflowWithCurrentVersionIsDefined } from '@twenty-modules/workflow/utils/assertWorkflowWithCurrentVersionIsDefined';
import { WorkflowDiagramStepNodeEditableContent } from '@twenty-modules/workflow/workflow-diagram/components/WorkflowDiagramStepNodeEditableContent';
import { WorkflowDiagramStepNodeData } from '@twenty-modules/workflow/workflow-diagram/types/WorkflowDiagram';
import { useDeleteStep } from '@twenty-modules/workflow/workflow-steps/hooks/useDeleteStep';

export const WorkflowDiagramStepNodeEditable = ({
  id,
  data,
  selected,
}: {
  id: string;
  data: WorkflowDiagramStepNodeData;
  selected?: boolean;
}) => {
  const workflowVisualizerWorkflowId = useRecoilComponentValueV2(
    workflowVisualizerWorkflowIdComponentState,
  );

  const workflowWithCurrentVersion = useWorkflowWithCurrentVersion(
    workflowVisualizerWorkflowId,
  );
  assertWorkflowWithCurrentVersionIsDefined(workflowWithCurrentVersion);

  const { deleteStep } = useDeleteStep({
    workflow: workflowWithCurrentVersion,
  });

  return (
    <WorkflowDiagramStepNodeEditableContent
      data={data}
      variant="default"
      selected={selected ?? false}
      onDelete={() => {
        deleteStep(id);
      }}
    />
  );
};
