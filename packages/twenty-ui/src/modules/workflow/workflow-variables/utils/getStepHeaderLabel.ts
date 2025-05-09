import { StepOutputSchema } from '@twenty-modules/workflow/workflow-variables/types/StepOutputSchema';
import { getCurrentSubStepFromPath } from '@twenty-modules/workflow/workflow-variables/utils/getCurrentSubStepFromPath';
import { isBaseOutputSchema } from '@twenty-modules/workflow/workflow-variables/utils/isBaseOutputSchema';
import { isRecordOutputSchema } from '@twenty-modules/workflow/workflow-variables/utils/isRecordOutputSchema';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const getStepHeaderLabel = (
  step: StepOutputSchema,
  currentPath: string[],
) => {
  if (currentPath.length === 0) {
    return step.name;
  }

  const subStepName = currentPath.at(-1);
  const previousSubStep = getCurrentSubStepFromPath(
    step,
    currentPath.slice(0, -1),
  );

  if (!subStepName) {
    return step.name;
  }

  if (
    isRecordOutputSchema(previousSubStep) &&
    isDefined(previousSubStep.fields[subStepName]?.label)
  ) {
    return previousSubStep.fields[subStepName].label;
  }

  if (
    isBaseOutputSchema(previousSubStep) &&
    isDefined(previousSubStep[subStepName]?.label)
  ) {
    return previousSubStep[subStepName].label;
  }

  return subStepName;
};
