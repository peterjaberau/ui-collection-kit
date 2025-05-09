import { Action } from '@twenty-modules/action-menu/actions/components/Action';
import { useSelectedRecordIdOrThrow } from '@twenty-modules/action-menu/actions/record-actions/single-record/hooks/useSelectedRecordIdOrThrow';
import { useDeleteOneWorkflowVersion } from '@twenty-modules/workflow/hooks/useDeleteOneWorkflowVersion';
import { useWorkflowWithCurrentVersion } from '@twenty-modules/workflow/hooks/useWorkflowWithCurrentVersion';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const DiscardDraftWorkflowSingleRecordAction = () => {
  const recordId = useSelectedRecordIdOrThrow();
  const { deleteOneWorkflowVersion } = useDeleteOneWorkflowVersion();
  const workflowWithCurrentVersion = useWorkflowWithCurrentVersion(recordId);

  const onClick = () => {
    if (!isDefined(workflowWithCurrentVersion)) {
      return;
    }

    deleteOneWorkflowVersion({
      workflowVersionId: workflowWithCurrentVersion.currentVersion.id,
    });
  };

  return <Action onClick={onClick} />;
};
