import { createComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/utils/createComponentStateV2';
import { WorkflowVisualizerComponentInstanceContext } from '@twenty-modules/workflow/workflow-diagram/states/contexts/WorkflowVisualizerComponentInstanceContext';
import { WorkflowDiagram } from '@twenty-modules/workflow/workflow-diagram/types/WorkflowDiagram';

export const workflowDiagramComponentState = createComponentStateV2<
  WorkflowDiagram | undefined
>({
  key: 'workflowDiagramComponentState',
  defaultValue: undefined,
  componentInstanceContext: WorkflowVisualizerComponentInstanceContext,
});
