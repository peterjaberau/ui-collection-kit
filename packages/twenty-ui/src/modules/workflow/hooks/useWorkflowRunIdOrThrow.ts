import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';
import { workflowVisualizerWorkflowRunIdComponentState } from '@twenty-modules/workflow/states/workflowVisualizerWorkflowRunIdComponentState';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const useWorkflowRunIdOrThrow = () => {
  const workflowRunId = useRecoilComponentValueV2(
    workflowVisualizerWorkflowRunIdComponentState,
  );

  if (!isDefined(workflowRunId)) {
    throw new Error('Expected the workflow run ID to be defined');
  }

  return workflowRunId;
};
