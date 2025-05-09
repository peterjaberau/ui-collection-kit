import { CoreObjectNameSingular } from '@twenty-modules/object-metadata/types/CoreObjectNameSingular';
import { useFindOneRecord } from '@twenty-modules/object-record/hooks/useFindOneRecord';
import { WorkflowRun } from '@twenty-modules/workflow/types/Workflow';
import { workflowRunSchema } from '@twenty-modules/workflow/validation-schemas/workflowSchema';
import { useMemo } from 'react';

export const useWorkflowRun = ({
  workflowRunId,
}: {
  workflowRunId: string;
}): WorkflowRun | undefined => {
  const { record: rawRecord } = useFindOneRecord({
    objectNameSingular: CoreObjectNameSingular.WorkflowRun,
    objectRecordId: workflowRunId,
  });

  const { success, data: record } = useMemo(
    () => workflowRunSchema.safeParse(rawRecord),
    [rawRecord],
  );

  if (!success) {
    return undefined;
  }

  return record;
};
