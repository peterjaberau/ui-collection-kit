import { createComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/utils/createComponentStateV2';
import { WorkflowAction, WorkflowTrigger } from '@twenty-modules/workflow/types/Workflow';
import { WorkflowVisualizerComponentInstanceContext } from '@twenty-modules/workflow/workflow-diagram/states/contexts/WorkflowVisualizerComponentInstanceContext';

export const flowComponentState = createComponentStateV2<
  | {
      workflowVersionId: string;
      trigger: WorkflowTrigger | null;
      steps: WorkflowAction[] | null;
    }
  | undefined
>({
  key: 'flowComponentState',
  defaultValue: undefined,
  componentInstanceContext: WorkflowVisualizerComponentInstanceContext,
});
