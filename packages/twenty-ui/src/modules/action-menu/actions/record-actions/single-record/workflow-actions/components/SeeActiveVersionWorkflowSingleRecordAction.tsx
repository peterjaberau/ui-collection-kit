import { ActionLink } from '@twenty-modules/action-menu/actions/components/ActionLink';
import { ActionDisplay } from '@twenty-modules/action-menu/actions/display/components/ActionDisplay';
import { useSelectedRecordIdOrThrow } from '@twenty-modules/action-menu/actions/record-actions/single-record/hooks/useSelectedRecordIdOrThrow';
import { CoreObjectNameSingular } from '@twenty-modules/object-metadata/types/CoreObjectNameSingular';
import { AppPath } from '@twenty-modules/types/AppPath';
import { useActiveWorkflowVersion } from '@twenty-modules/workflow/hooks/useActiveWorkflowVersion';

export const SeeActiveVersionWorkflowSingleRecordAction = () => {
  const recordId = useSelectedRecordIdOrThrow();

  const { workflowVersion, loading } = useActiveWorkflowVersion(recordId);

  if (loading) {
    return <ActionDisplay />;
  }

  return (
    <ActionLink
      to={AppPath.RecordShowPage}
      params={{
        objectNameSingular: CoreObjectNameSingular.WorkflowVersion,
        objectRecordId: workflowVersion.id,
      }}
    />
  );
};
