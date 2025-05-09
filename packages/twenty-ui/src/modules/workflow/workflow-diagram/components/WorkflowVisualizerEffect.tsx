import { useSetRecoilComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useSetRecoilComponentStateV2';
import { workflowVisualizerWorkflowIdComponentState } from '@twenty-modules/workflow/states/workflowVisualizerWorkflowIdComponentState';
import { useEffect } from 'react';

export const WorkflowVisualizerEffect = ({
  workflowId,
}: {
  workflowId: string;
}) => {
  const setWorkflowVisualizerWorkflowId = useSetRecoilComponentStateV2(
    workflowVisualizerWorkflowIdComponentState,
  );

  useEffect(() => {
    setWorkflowVisualizerWorkflowId(workflowId);
  }, [setWorkflowVisualizerWorkflowId, workflowId]);

  return null;
};
