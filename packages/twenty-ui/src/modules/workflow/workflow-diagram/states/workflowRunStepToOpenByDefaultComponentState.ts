import { createComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/utils/createComponentStateV2';
import { WorkflowVisualizerComponentInstanceContext } from '@twenty-modules/workflow/workflow-diagram/states/contexts/WorkflowVisualizerComponentInstanceContext';
import { WorkflowRunDiagramStepNodeData } from '@twenty-modules/workflow/workflow-diagram/types/WorkflowDiagram';

export const workflowRunStepToOpenByDefaultComponentState =
  createComponentStateV2<
    | {
        id: string;
        data: WorkflowRunDiagramStepNodeData;
      }
    | undefined
  >({
    key: 'workflowRunStepToOpenByDefaultComponentState',
    defaultValue: undefined,
    componentInstanceContext: WorkflowVisualizerComponentInstanceContext,
  });
