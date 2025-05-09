import { ActionLink } from '@twenty-modules/action-menu/actions/components/ActionLink';
import { useSelectedRecordIdOrThrow } from '@twenty-modules/action-menu/actions/record-actions/single-record/hooks/useSelectedRecordIdOrThrow';
import { CoreObjectNamePlural } from '@twenty-modules/object-metadata/types/CoreObjectNamePlural';
import { AppPath } from '@twenty-modules/types/AppPath';
import { ViewFilterOperand } from '@twenty-modules/views/types/ViewFilterOperand';
import { useWorkflowWithCurrentVersion } from '@twenty-modules/workflow/hooks/useWorkflowWithCurrentVersion';

export const SeeRunsWorkflowSingleRecordAction = () => {
  const recordId = useSelectedRecordIdOrThrow();
  const workflowWithCurrentVersion = useWorkflowWithCurrentVersion(recordId);

  return (
    <ActionLink
      to={AppPath.RecordIndexPage}
      params={{ objectNamePlural: CoreObjectNamePlural.WorkflowRun }}
      queryParams={{
        filter: {
          workflow: {
            [ViewFilterOperand.Is]: {
              selectedRecordIds: [workflowWithCurrentVersion?.id],
            },
          },
        },
      }}
    />
  );
};
