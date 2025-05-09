import { useWorkflowVersion } from '@twenty-modules/workflow/hooks/useWorkflowVersion';
import { WorkflowDiagramCanvasReadonly } from '@twenty-modules/workflow/workflow-diagram/components/WorkflowDiagramCanvasReadonly';
import '@xyflow/react/dist/style.css';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const WorkflowVersionVisualizer = ({
  workflowVersionId,
}: {
  workflowVersionId: string;
}) => {
  const workflowVersion = useWorkflowVersion(workflowVersionId);

  if (!isDefined(workflowVersion)) {
    return null;
  }

  return (
    <WorkflowDiagramCanvasReadonly versionStatus={workflowVersion.status} />
  );
};
