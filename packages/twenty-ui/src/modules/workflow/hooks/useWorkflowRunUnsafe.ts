import { CoreObjectNameSingular } from '@twenty-modules/object-metadata/types/CoreObjectNameSingular';
import { useFindOneRecord } from '@twenty-modules/object-record/hooks/useFindOneRecord';
import { WorkflowRun } from '@twenty-modules/workflow/types/Workflow';

export const useWorkflowRunUnsafe = ({
  workflowRunId,
}: {
  workflowRunId: string;
}) => {
  const { record } = useFindOneRecord<WorkflowRun>({
    objectNameSingular: CoreObjectNameSingular.WorkflowRun,
    objectRecordId: workflowRunId,
  });

  return record;
};
