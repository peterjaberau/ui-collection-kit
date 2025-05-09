import { ActionLink } from '@twenty-modules/action-menu/actions/components/ActionLink';
import { useSelectedRecordIdOrThrow } from '@twenty-modules/action-menu/actions/record-actions/single-record/hooks/useSelectedRecordIdOrThrow';
import { CoreObjectNamePlural } from '@twenty-modules/object-metadata/types/CoreObjectNamePlural';
import { recordStoreFamilyState } from '@twenty-modules/object-record/record-store/states/recordStoreFamilyState';
import { AppPath } from '@twenty-modules/types/AppPath';
import { ViewFilterOperand } from '@twenty-modules/views/types/ViewFilterOperand';
import { useWorkflowWithCurrentVersion } from '@twenty-modules/workflow/hooks/useWorkflowWithCurrentVersion';
import { useRecoilValue } from 'recoil';

export const SeeRunsWorkflowVersionSingleRecordAction = () => {
  const recordId = useSelectedRecordIdOrThrow();
  const workflowVersion = useRecoilValue(recordStoreFamilyState(recordId));
  const workflowWithCurrentVersion = useWorkflowWithCurrentVersion(
    workflowVersion?.workflow.id,
  );

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
          workflowVersion: {
            [ViewFilterOperand.Is]: {
              selectedRecordIds: [recordId],
            },
          },
        },
      }}
    />
  );
};
