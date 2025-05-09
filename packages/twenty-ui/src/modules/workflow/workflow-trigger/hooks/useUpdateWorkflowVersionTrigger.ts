import { CoreObjectNameSingular } from '@twenty-modules/object-metadata/types/CoreObjectNameSingular';
import { useUpdateOneRecord } from '@twenty-modules/object-record/hooks/useUpdateOneRecord';
import { useComputeStepOutputSchema } from '@twenty-modules/workflow/hooks/useComputeStepOutputSchema';
import { useGetUpdatableWorkflowVersion } from '@twenty-modules/workflow/hooks/useGetUpdatableWorkflowVersion';
import {
  WorkflowTrigger,
  WorkflowVersion,
  WorkflowWithCurrentVersion,
} from '@twenty-modules/workflow/types/Workflow';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const useUpdateWorkflowVersionTrigger = ({
  workflow,
}: {
  workflow: WorkflowWithCurrentVersion;
}) => {
  const { updateOneRecord: updateOneWorkflowVersion } =
    useUpdateOneRecord<WorkflowVersion>({
      objectNameSingular: CoreObjectNameSingular.WorkflowVersion,
    });

  const { getUpdatableWorkflowVersion } = useGetUpdatableWorkflowVersion();

  const { computeStepOutputSchema } = useComputeStepOutputSchema();

  const updateTrigger = async (
    updatedTrigger: WorkflowTrigger,
    options: { computeOutputSchema: boolean } = { computeOutputSchema: true },
  ) => {
    if (!isDefined(workflow.currentVersion)) {
      throw new Error('Can not update an undefined workflow version.');
    }

    const workflowVersionId = await getUpdatableWorkflowVersion(workflow);

    if (options.computeOutputSchema) {
      const outputSchema = (
        await computeStepOutputSchema({
          step: updatedTrigger,
        })
      )?.data?.computeStepOutputSchema;

      updatedTrigger.settings = {
        ...updatedTrigger.settings,
        outputSchema: outputSchema || {},
      };
    }

    await updateOneWorkflowVersion({
      idToUpdate: workflowVersionId,
      updateOneRecordInput: {
        trigger: updatedTrigger,
      },
    });
  };

  return {
    updateTrigger,
  };
};
