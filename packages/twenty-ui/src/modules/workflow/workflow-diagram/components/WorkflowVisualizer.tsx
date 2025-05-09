import { useWorkflowWithCurrentVersion } from '@twenty-modules/workflow/hooks/useWorkflowWithCurrentVersion';
import { WorkflowDiagramCanvasEditable } from '@twenty-modules/workflow/workflow-diagram/components/WorkflowDiagramCanvasEditable';
import { WorkflowDiagramEffect } from '@twenty-modules/workflow/workflow-diagram/components/WorkflowDiagramEffect';
import '@xyflow/react/dist/style.css';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const WorkflowVisualizer = ({ workflowId }: { workflowId: string }) => {
  const workflowWithCurrentVersion = useWorkflowWithCurrentVersion(workflowId);

  if (!isDefined(workflowWithCurrentVersion)) {
    return null;
  }

  return (
    <>
      <WorkflowDiagramEffect
        workflowWithCurrentVersion={workflowWithCurrentVersion}
      />
      <WorkflowDiagramCanvasEditable
        versionStatus={workflowWithCurrentVersion.currentVersion.status}
      />
    </>
  );
};
