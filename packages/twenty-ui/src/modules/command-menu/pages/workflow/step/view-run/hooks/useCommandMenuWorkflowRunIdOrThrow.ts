import { commandMenuWorkflowRunIdComponentState } from '@twenty-modules/command-menu/pages/workflow/states/commandMenuWorkflowRunIdComponentState';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const useCommandMenuWorkflowRunIdOrThrow = () => {
  const workflowRunId = useRecoilComponentValueV2(
    commandMenuWorkflowRunIdComponentState,
  );
  if (!isDefined(workflowRunId)) {
    throw new Error(
      'Expected the commandMenuWorkflowRunIdComponentState to be defined.',
    );
  }

  return workflowRunId;
};
