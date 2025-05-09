import { WorkflowDiagramRunStatus } from '@twenty-modules/workflow/workflow-diagram/types/WorkflowDiagram';
import { TRIGGER_STEP_ID } from '@twenty-modules/workflow/workflow-trigger/constants/TriggerStepId';

export const getIsInputTabDisabled = ({
  stepExecutionStatus,
  workflowSelectedNode,
}: {
  workflowSelectedNode: string;
  stepExecutionStatus: WorkflowDiagramRunStatus;
}) => {
  return (
    workflowSelectedNode === TRIGGER_STEP_ID ||
    stepExecutionStatus === 'not-executed'
  );
};
