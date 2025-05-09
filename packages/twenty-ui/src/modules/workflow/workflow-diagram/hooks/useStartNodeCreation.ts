import { useCallback } from 'react';

import { useWorkflowCommandMenu } from '@twenty-modules/command-menu/hooks/useWorkflowCommandMenu';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';
import { useSetRecoilComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useSetRecoilComponentStateV2';
import { workflowVisualizerWorkflowIdComponentState } from '@twenty-modules/workflow/states/workflowVisualizerWorkflowIdComponentState';
import { workflowCreateStepFromParentStepIdComponentState } from '@twenty-modules/workflow/workflow-steps/states/workflowCreateStepFromParentStepIdComponentState';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const useStartNodeCreation = () => {
  const setWorkflowCreateStepFromParentStepId = useSetRecoilComponentStateV2(
    workflowCreateStepFromParentStepIdComponentState,
  );
  const { openStepSelectInCommandMenu } = useWorkflowCommandMenu();

  const workflowVisualizerWorkflowId = useRecoilComponentValueV2(
    workflowVisualizerWorkflowIdComponentState,
  );

  /**
   * This function is used in a context where dependencies shouldn't change much.
   * That's why its wrapped in a `useCallback` hook. Removing memoization might break the app unexpectedly.
   */
  const startNodeCreation = useCallback(
    (parentNodeId: string) => {
      setWorkflowCreateStepFromParentStepId(parentNodeId);

      if (isDefined(workflowVisualizerWorkflowId)) {
        openStepSelectInCommandMenu(workflowVisualizerWorkflowId);
        return;
      }
    },
    [
      setWorkflowCreateStepFromParentStepId,
      workflowVisualizerWorkflowId,
      openStepSelectInCommandMenu,
    ],
  );

  return {
    startNodeCreation,
  };
};
