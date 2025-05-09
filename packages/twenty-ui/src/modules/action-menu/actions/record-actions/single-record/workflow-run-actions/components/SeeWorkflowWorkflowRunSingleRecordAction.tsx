import { ActionLink } from '@twenty-modules/action-menu/actions/components/ActionLink';
import { useSelectedRecordIdOrThrow } from '@twenty-modules/action-menu/actions/record-actions/single-record/hooks/useSelectedRecordIdOrThrow';
import { CoreObjectNameSingular } from '@twenty-modules/object-metadata/types/CoreObjectNameSingular';
import { recordStoreFamilyState } from '@twenty-modules/object-record/record-store/states/recordStoreFamilyState';
import { AppPath } from '@twenty-modules/types/AppPath';
import { useRecoilValue } from 'recoil';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const SeeWorkflowWorkflowRunSingleRecordAction = () => {
  const recordId = useSelectedRecordIdOrThrow();
  const workflowRun = useRecoilValue(recordStoreFamilyState(recordId));

  if (!isDefined(workflowRun) || !isDefined(workflowRun?.workflow?.id)) {
    return null;
  }

  return (
    <ActionLink
      to={AppPath.RecordShowPage}
      params={{
        objectNameSingular: CoreObjectNameSingular.Workflow,
        objectRecordId: workflowRun.workflow.id,
      }}
    />
  );
};
