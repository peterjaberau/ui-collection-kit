import { createRequiredContext } from '@twenty-ui/front/utils/createRequiredContext';

type WorkflowStepContextType = {
  workflowVersionId: string;
  workflowRunId?: string;
};

export const [WorkflowStepContextProvider, useWorkflowStepContextOrThrow] =
  createRequiredContext<WorkflowStepContextType>('WorkflowStepContext');
