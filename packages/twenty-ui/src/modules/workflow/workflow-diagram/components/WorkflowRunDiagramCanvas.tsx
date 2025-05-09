import { WorkflowRunStatus } from '@twenty-modules/workflow/types/Workflow';
import { WorkflowDiagramCanvasBase } from '@twenty-modules/workflow/workflow-diagram/components/WorkflowDiagramCanvasBase';
import { WorkflowDiagramDefaultEdge } from '@twenty-modules/workflow/workflow-diagram/components/WorkflowDiagramDefaultEdge';
import { WorkflowDiagramStepNodeReadonly } from '@twenty-modules/workflow/workflow-diagram/components/WorkflowDiagramStepNodeReadonly';
import { WorkflowDiagramSuccessEdge } from '@twenty-modules/workflow/workflow-diagram/components/WorkflowDiagramSuccessEdge';
import { WorkflowRunDiagramCanvasEffect } from '@twenty-modules/workflow/workflow-diagram/components/WorkflowRunDiagramCanvasEffect';
import { useHandleWorkflowRunDiagramCanvasInit } from '@twenty-modules/workflow/workflow-diagram/hooks/useHandleWorkflowRunDiagramCanvasInit';
import { getWorkflowRunStatusTagProps } from '@twenty-modules/workflow/workflow-diagram/utils/getWorkflowRunStatusTagProps';
import { ReactFlowProvider } from '@xyflow/react';

export const WorkflowRunDiagramCanvas = ({
  workflowRunStatus,
}: {
  workflowRunStatus: WorkflowRunStatus;
}) => {
  const tagProps = getWorkflowRunStatusTagProps({
    workflowRunStatus,
  });

  const { handleWorkflowRunDiagramCanvasInit } =
    useHandleWorkflowRunDiagramCanvasInit();

  return (
    <ReactFlowProvider>
      <WorkflowDiagramCanvasBase
        nodeTypes={{
          default: WorkflowDiagramStepNodeReadonly,
        }}
        edgeTypes={{
          default: WorkflowDiagramDefaultEdge,
          success: WorkflowDiagramSuccessEdge,
        }}
        tagContainerTestId="workflow-run-status"
        tagColor={tagProps.color}
        tagText={tagProps.text}
        onInit={handleWorkflowRunDiagramCanvasInit}
      />

      <WorkflowRunDiagramCanvasEffect />
    </ReactFlowProvider>
  );
};
