import { commandMenuWorkflowIdComponentState } from '@twenty-modules/command-menu/pages/workflow/states/commandMenuWorkflowIdComponentState';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const useCommandMenuWorkflowIdOrThrow = () => {
  const workflowId = useRecoilComponentValueV2(
    commandMenuWorkflowIdComponentState,
  );
  if (!isDefined(workflowId)) {
    throw new Error(
      'Expected commandMenuWorkflowIdComponentState to be defined',
    );
  }

  return workflowId;
};
