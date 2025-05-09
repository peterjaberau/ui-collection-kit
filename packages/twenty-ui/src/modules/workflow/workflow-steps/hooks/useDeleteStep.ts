import { useCommandMenu } from '@twenty-modules/command-menu/hooks/useCommandMenu';
import { CoreObjectNameSingular } from '@twenty-modules/object-metadata/types/CoreObjectNameSingular';
import { useUpdateOneRecord } from '@twenty-modules/object-record/hooks/useUpdateOneRecord';
import { useDeleteWorkflowVersionStep } from '@twenty-modules/workflow/hooks/useDeleteWorkflowVersionStep';
import { useGetUpdatableWorkflowVersion } from '@twenty-modules/workflow/hooks/useGetUpdatableWorkflowVersion';
import { useStepsOutputSchema } from '@twenty-modules/workflow/hooks/useStepsOutputSchema';
import {
  WorkflowVersion,
  WorkflowWithCurrentVersion,
} from '@twenty-modules/workflow/types/Workflow';
import { TRIGGER_STEP_ID } from '@twenty-modules/workflow/workflow-trigger/constants/TriggerStepId';

export const useDeleteStep = ({
  workflow,
}: {
  workflow: WorkflowWithCurrentVersion;
}) => {
  const { deleteWorkflowVersionStep } = useDeleteWorkflowVersionStep();
  const { updateOneRecord: updateOneWorkflowVersion } =
    useUpdateOneRecord<WorkflowVersion>({
      objectNameSingular: CoreObjectNameSingular.WorkflowVersion,
    });
  const { deleteStepOutputSchema } = useStepsOutputSchema();

  const { getUpdatableWorkflowVersion } = useGetUpdatableWorkflowVersion();
  const { closeCommandMenu } = useCommandMenu();

  const deleteStep = async (stepId: string) => {
    closeCommandMenu();
    const workflowVersionId = await getUpdatableWorkflowVersion(workflow);
    if (stepId === TRIGGER_STEP_ID) {
      await updateOneWorkflowVersion({
        idToUpdate: workflowVersionId,
        updateOneRecordInput: {
          trigger: null,
        },
      });
    } else {
      await deleteWorkflowVersionStep({
        workflowVersionId,
        stepId,
      });
    }
    deleteStepOutputSchema({
      stepId,
      workflowVersionId,
    });
  };

  return {
    deleteStep,
  };
};
