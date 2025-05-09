import { createFamilyState } from '@twenty-modules/ui/utilities/state/utils/createFamilyState';
import { StepOutputSchema } from '@twenty-modules/workflow/workflow-variables/types/StepOutputSchema';

export const stepsOutputSchemaFamilyState = createFamilyState<
  StepOutputSchema | null,
  string | undefined
>({
  key: 'stepsOutputSchemaFamilyState',
  defaultValue: null,
});
