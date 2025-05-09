import { Action } from '@twenty-modules/action-menu/actions/components/Action';
import { useSelectedRecordIdOrThrow } from '@twenty-modules/action-menu/actions/record-actions/single-record/hooks/useSelectedRecordIdOrThrow';
import { useActivateWorkflowVersion } from '@twenty-modules/workflow/hooks/useActivateWorkflowVersion';
import { useWorkflowWithCurrentVersion } from '@twenty-modules/workflow/hooks/useWorkflowWithCurrentVersion';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const ActivateWorkflowSingleRecordAction = () => {
  const recordId = useSelectedRecordIdOrThrow();
  const { activateWorkflowVersion } = useActivateWorkflowVersion();
  const workflowWithCurrentVersion = useWorkflowWithCurrentVersion(recordId);

  const onClick = () => {
    if (!isDefined(workflowWithCurrentVersion)) {
      return;
    }

    activateWorkflowVersion({
      workflowVersionId: workflowWithCurrentVersion.currentVersion.id,
      workflowId: workflowWithCurrentVersion.id,
    });
  };

  return <Action onClick={onClick} />;
};
