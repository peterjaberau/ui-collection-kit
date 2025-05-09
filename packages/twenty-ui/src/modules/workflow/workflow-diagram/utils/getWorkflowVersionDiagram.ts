import { WorkflowVersion } from '@twenty-modules/workflow/types/Workflow';
import { WorkflowDiagram } from '@twenty-modules/workflow/workflow-diagram/types/WorkflowDiagram';
import { generateWorkflowDiagram } from '@twenty-modules/workflow/workflow-diagram/utils/generateWorkflowDiagram';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

const EMPTY_DIAGRAM: WorkflowDiagram = {
  nodes: [],
  edges: [],
};

export const getWorkflowVersionDiagram = (
  workflowVersion: WorkflowVersion | undefined,
): WorkflowDiagram => {
  if (!isDefined(workflowVersion)) {
    return EMPTY_DIAGRAM;
  }

  return generateWorkflowDiagram({
    trigger: workflowVersion.trigger ?? undefined,
    steps: workflowVersion.steps ?? [],
  });
};
