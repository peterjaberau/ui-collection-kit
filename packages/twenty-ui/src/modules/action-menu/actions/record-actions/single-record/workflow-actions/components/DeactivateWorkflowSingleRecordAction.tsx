import { Action } from '@twenty-modules/action-menu/actions/components/Action';
import { useSelectedRecordIdOrThrow } from '@twenty-modules/action-menu/actions/record-actions/single-record/hooks/useSelectedRecordIdOrThrow';
import { useDeactivateWorkflowVersion } from '@twenty-modules/workflow/hooks/useDeactivateWorkflowVersion';
import { useWorkflowWithCurrentVersion } from '@twenty-modules/workflow/hooks/useWorkflowWithCurrentVersion';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const DeactivateWorkflowSingleRecordAction = () => {
  const recordId = useSelectedRecordIdOrThrow();
  const { deactivateWorkflowVersion } = useDeactivateWorkflowVersion();
  const workflowWithCurrentVersion = useWorkflowWithCurrentVersion(recordId);

  const onClick = () => {
    if (!isDefined(workflowWithCurrentVersion)) {
      return;
    }

    deactivateWorkflowVersion({
      workflowVersionId: workflowWithCurrentVersion.currentVersion.id,
    });
  };

  return <Action onClick={onClick} />;
};
