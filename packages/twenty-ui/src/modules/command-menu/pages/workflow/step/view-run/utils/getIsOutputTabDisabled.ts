import { WorkflowDiagramRunStatus } from '@twenty-modules/workflow/workflow-diagram/types/WorkflowDiagram';

export const getIsOutputTabDisabled = ({
  stepExecutionStatus,
}: {
  stepExecutionStatus: WorkflowDiagramRunStatus;
}) => {
  return (
    stepExecutionStatus === 'running' || stepExecutionStatus === 'not-executed'
  );
};
