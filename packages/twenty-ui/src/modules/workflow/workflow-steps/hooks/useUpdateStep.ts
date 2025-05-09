import { useGetUpdatableWorkflowVersion } from '@twenty-modules/workflow/hooks/useGetUpdatableWorkflowVersion';
import {
  WorkflowStep,
  WorkflowWithCurrentVersion,
} from '@twenty-modules/workflow/types/Workflow';
import { useUpdateWorkflowVersionStep } from '@twenty-modules/workflow/workflow-steps/hooks/useUpdateWorkflowVersionStep';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const useUpdateStep = ({
  workflow,
}: {
  workflow: WorkflowWithCurrentVersion;
}) => {
  const { getUpdatableWorkflowVersion } = useGetUpdatableWorkflowVersion();
  const { updateWorkflowVersionStep } = useUpdateWorkflowVersionStep();

  const updateStep = async <T extends WorkflowStep>(updatedStep: T) => {
    if (!isDefined(workflow.currentVersion)) {
      throw new Error('Can not update an undefined workflow version.');
    }

    const workflowVersionId = await getUpdatableWorkflowVersion(workflow);

    await updateWorkflowVersionStep({
      workflowVersionId,
      step: updatedStep,
    });
  };

  return {
    updateStep,
  };
};
