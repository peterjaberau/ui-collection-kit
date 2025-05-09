import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';
import { useSetRecoilComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useSetRecoilComponentStateV2';
import { useGetUpdatableWorkflowVersion } from '@twenty-modules/workflow/hooks/useGetUpdatableWorkflowVersion';
import { workflowLastCreatedStepIdComponentState } from '@twenty-modules/workflow/states/workflowLastCreatedStepIdComponentState';
import {
  WorkflowStepType,
  WorkflowWithCurrentVersion,
} from '@twenty-modules/workflow/types/Workflow';
import { workflowSelectedNodeComponentState } from '@twenty-modules/workflow/workflow-diagram/states/workflowSelectedNodeComponentState';
import { useCreateWorkflowVersionStep } from '@twenty-modules/workflow/workflow-steps/hooks/useCreateWorkflowVersionStep';
import { workflowCreateStepFromParentStepIdComponentState } from '@twenty-modules/workflow/workflow-steps/states/workflowCreateStepFromParentStepIdComponentState';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const useCreateStep = ({
  workflow,
}: {
  workflow: WorkflowWithCurrentVersion;
}) => {
  const { createWorkflowVersionStep } = useCreateWorkflowVersionStep();
  const setWorkflowSelectedNode = useSetRecoilComponentStateV2(
    workflowSelectedNodeComponentState,
  );
  const setWorkflowLastCreatedStepId = useSetRecoilComponentStateV2(
    workflowLastCreatedStepIdComponentState,
  );

  const workflowCreateStepFromParentStepId = useRecoilComponentValueV2(
    workflowCreateStepFromParentStepIdComponentState,
  );

  const { getUpdatableWorkflowVersion } = useGetUpdatableWorkflowVersion();

  const createStep = async (newStepType: WorkflowStepType) => {
    if (!isDefined(workflowCreateStepFromParentStepId)) {
      throw new Error('Select a step to create a new step from first.');
    }

    const workflowVersionId = await getUpdatableWorkflowVersion(workflow);

    const createdStep = (
      await createWorkflowVersionStep({
        workflowVersionId,
        stepType: newStepType,
        parentStepId: workflowCreateStepFromParentStepId,
        nextStepId: undefined,
      })
    )?.data?.createWorkflowVersionStep;

    if (!createdStep) {
      return;
    }

    setWorkflowSelectedNode(createdStep.id);
    setWorkflowLastCreatedStepId(createdStep.id);
  };

  return {
    createStep,
  };
};
