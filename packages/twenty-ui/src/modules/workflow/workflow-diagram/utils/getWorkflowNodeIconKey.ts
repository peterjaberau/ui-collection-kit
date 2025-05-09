import { WorkflowDiagramStepNodeData } from '@twenty-modules/workflow/workflow-diagram/types/WorkflowDiagram';
import { getActionIcon } from '@twenty-modules/workflow/workflow-steps/workflow-actions/utils/getActionIcon';

export const getWorkflowNodeIconKey = (data: WorkflowDiagramStepNodeData) => {
  switch (data.nodeType) {
    case 'trigger': {
      return data.icon;
    }
    case 'action': {
      return getActionIcon(data.actionType);
    }
  }
};
