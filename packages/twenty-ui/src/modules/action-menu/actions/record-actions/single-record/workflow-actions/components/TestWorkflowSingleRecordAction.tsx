import { Action } from '@twenty-modules/action-menu/actions/components/Action';
import { useSelectedRecordIdOrThrow } from '@twenty-modules/action-menu/actions/record-actions/single-record/hooks/useSelectedRecordIdOrThrow';
import { useRunWorkflowVersion } from '@twenty-modules/workflow/hooks/useRunWorkflowVersion';
import { useWorkflowWithCurrentVersion } from '@twenty-modules/workflow/hooks/useWorkflowWithCurrentVersion';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const TestWorkflowSingleRecordAction = () => {
  const recordId = useSelectedRecordIdOrThrow();
  const { runWorkflowVersion } = useRunWorkflowVersion();
  const workflowWithCurrentVersion = useWorkflowWithCurrentVersion(recordId);

  const onClick = () => {
    if (!isDefined(workflowWithCurrentVersion)) {
      return;
    }

    runWorkflowVersion({
      workflowVersionId: workflowWithCurrentVersion.currentVersion.id,
    });
  };

  return <Action onClick={onClick} />;
};
