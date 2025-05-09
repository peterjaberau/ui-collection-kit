import { commandMenuWorkflowVersionIdComponentState } from '@twenty-modules/command-menu/pages/workflow/states/commandMenuWorkflowVersionIdComponentState';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const useCommandMenuWorkflowVersionIdOrThrow = () => {
  const workflowVersionId = useRecoilComponentValueV2(
    commandMenuWorkflowVersionIdComponentState,
  );
  if (!isDefined(workflowVersionId)) {
    throw new Error(
      'Expected commandMenuWorkflowVersionIdComponentState to be defined',
    );
  }

  return workflowVersionId;
};
