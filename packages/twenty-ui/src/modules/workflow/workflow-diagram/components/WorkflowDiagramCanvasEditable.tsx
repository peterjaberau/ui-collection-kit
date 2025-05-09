import { WorkflowVersionStatus } from '@twenty-modules/workflow/types/Workflow';
import { WorkflowDiagramCanvasBase } from '@twenty-modules/workflow/workflow-diagram/components/WorkflowDiagramCanvasBase';
import { WorkflowDiagramCanvasEditableEffect } from '@twenty-modules/workflow/workflow-diagram/components/WorkflowDiagramCanvasEditableEffect';
import { WorkflowDiagramCreateStepNode } from '@twenty-modules/workflow/workflow-diagram/components/WorkflowDiagramCreateStepNode';
import { WorkflowDiagramDefaultEdge } from '@twenty-modules/workflow/workflow-diagram/components/WorkflowDiagramDefaultEdge';
import { WorkflowDiagramEmptyTrigger } from '@twenty-modules/workflow/workflow-diagram/components/WorkflowDiagramEmptyTrigger';
import { WorkflowDiagramStepNodeEditable } from '@twenty-modules/workflow/workflow-diagram/components/WorkflowDiagramStepNodeEditable';
import { getWorkflowVersionStatusTagProps } from '@twenty-modules/workflow/workflow-diagram/utils/getWorkflowVersionStatusTagProps';
import { ReactFlowProvider } from '@xyflow/react';

export const WorkflowDiagramCanvasEditable = ({
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
          default: WorkflowDiagramStepNodeEditable,
          'create-step': WorkflowDiagramCreateStepNode,
          'empty-trigger': WorkflowDiagramEmptyTrigger,
        }}
        edgeTypes={{
          default: WorkflowDiagramDefaultEdge,
        }}
        tagContainerTestId="workflow-visualizer-status"
        tagColor={tagProps.color}
        tagText={tagProps.text}
      />

      <WorkflowDiagramCanvasEditableEffect />
    </ReactFlowProvider>
  );
};
