import { useFlowOrThrow } from '@twenty-modules/workflow/hooks/useFlowOrThrow';
import { stepsOutputSchemaFamilySelector } from '@twenty-modules/workflow/states/selectors/stepsOutputSchemaFamilySelector';
import { useWorkflowSelectedNodeOrThrow } from '@twenty-modules/workflow/workflow-diagram/hooks/useWorkflowSelectedNodeOrThrow';
import { getPreviousSteps } from '@twenty-modules/workflow/workflow-steps/utils/getWorkflowPreviousSteps';
import { TRIGGER_STEP_ID } from '@twenty-modules/workflow/workflow-trigger/constants/TriggerStepId';
import {
  OutputSchema,
  StepOutputSchema,
} from '@twenty-modules/workflow/workflow-variables/types/StepOutputSchema';
import { filterOutputSchema } from '@twenty-modules/workflow/workflow-variables/utils/filterOutputSchema';
import { isEmptyObject } from '@tiptap/core';
import { useRecoilValue } from 'recoil';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const useAvailableVariablesInWorkflowStep = ({
  objectNameSingularToSelect,
}: {
  objectNameSingularToSelect?: string;
}): StepOutputSchema[] => {
  const workflowSelectedNode = useWorkflowSelectedNodeOrThrow();
  const flow = useFlowOrThrow();
  const steps = flow.steps ?? [];

  const previousStepIds: string[] = getPreviousSteps(
    steps,
    workflowSelectedNode,
  ).map((step) => step.id);

  const availableStepsOutputSchema: StepOutputSchema[] = useRecoilValue(
    stepsOutputSchemaFamilySelector({
      workflowVersionId: flow.workflowVersionId,
      stepIds: [TRIGGER_STEP_ID, ...previousStepIds],
    }),
  );

  const availableVariablesInWorkflowStep = availableStepsOutputSchema
    .map((stepOutputSchema) => {
      const outputSchema = filterOutputSchema(
        stepOutputSchema.outputSchema,
        objectNameSingularToSelect,
      ) as OutputSchema;

      if (!isDefined(outputSchema) || isEmptyObject(outputSchema)) {
        return undefined;
      }

      return {
        id: stepOutputSchema.id,
        name: stepOutputSchema.name,
        icon: stepOutputSchema.icon,
        outputSchema,
      };
    })
    .filter(isDefined);

  return availableVariablesInWorkflowStep;
};
