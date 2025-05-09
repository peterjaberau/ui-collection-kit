import {
  BaseOutputSchema,
  OutputSchema,
} from '@twenty-modules/workflow/workflow-variables/types/StepOutputSchema';

export const isBaseOutputSchema = (
  outputSchema: OutputSchema,
): outputSchema is BaseOutputSchema => {
  return !outputSchema._outputSchemaType;
};
