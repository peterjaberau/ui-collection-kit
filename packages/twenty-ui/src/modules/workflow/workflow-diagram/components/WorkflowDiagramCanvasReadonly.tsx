import { WorkflowVersionStatus } from '@twenty-modules/workflow/types/Workflow';
import { WorkflowDiagramCanvasBase } from '@twenty-modules/workflow/workflow-diagram/components/WorkflowDiagramCanvasBase';
import { WorkflowDiagramCanvasReadonlyEffect } from '@twenty-modules/workflow/workflow-diagram/components/WorkflowDiagramCanvasReadonlyEffect';
import { WorkflowDiagramDefaultEdge } from '@twenty-modules/workflow/workflow-diagram/components/WorkflowDiagramDefaultEdge';
import { WorkflowDiagramEmptyTrigger } from '@twenty-modules/workflow/workflow-diagram/components/WorkflowDiagramEmptyTrigger';
import { WorkflowDiagramStepNodeReadonly } from '@twenty-modules/workflow/workflow-diagram/components/WorkflowDiagramStepNodeReadonly';
import { WorkflowDiagramSuccessEdge } from '@twenty-modules/workflow/workflow-diagram/components/WorkflowDiagramSuccessEdge';
import { getWorkflowVersionStatusTagProps } from '@twenty-modules/workflow/workflow-diagram/utils/getWorkflowVersionStatusTagProps';
import { ReactFlowProvider } from '@xyflow/react';

export const WorkflowDiagramCanvasReadonly = ({
  versionStatus,
}: {
  versionStatus: WorkflowVersionStatus;
}) => {
  const tagProps = getWorkflowVersionStatusTagProps({
    workflowVersionStatus: versionStatus,
  });

  return (
    <ReactFlowProvider>
      <WorkflowDiagramCanvasBase
        nodeTypes={{
          default: WorkflowDiagramStepNodeReadonly,
          'empty-trigger': WorkflowDiagramEmptyTrigger,
        }}
        edgeTypes={{
          default: WorkflowDiagramDefaultEdge,
          success: WorkflowDiagramSuccessEdge,
        }}
        tagContainerTestId="workflow-visualizer-status"
        tagColor={tagProps.color}
        tagText={tagProps.text}
      />

      <WorkflowDiagramCanvasReadonlyEffect />
    </ReactFlowProvider>
  );
};
