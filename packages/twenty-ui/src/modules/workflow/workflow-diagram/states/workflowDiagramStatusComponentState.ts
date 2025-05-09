import { createComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/utils/createComponentStateV2';
import { WorkflowRunVisualizerComponentInstanceContext } from '@twenty-modules/workflow/workflow-diagram/states/contexts/WorkflowRunVisualizerComponentInstanceContext';
import { WorkflowDiagramStatus } from '@twenty-modules/workflow/workflow-diagram/types/WorkflowDiagramStatus';

// This state must be fresh every time the Reactflow component is mounted.
// We use another instance context whose instanceId is an id unique to the component hierarchy.
export const workflowDiagramStatusComponentState =
  createComponentStateV2<WorkflowDiagramStatus>({
    key: 'workflowDiagramStatusComponentState',
    defaultValue: 'computing-diagram',
    componentInstanceContext: WorkflowRunVisualizerComponentInstanceContext,
  });
