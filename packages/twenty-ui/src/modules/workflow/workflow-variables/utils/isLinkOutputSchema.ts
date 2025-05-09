import {
  LinkOutputSchema,
  OutputSchema,
} from '@twenty-modules/workflow/workflow-variables/types/StepOutputSchema';

export const isLinkOutputSchema = (
  outputSchema: OutputSchema,
): outputSchema is LinkOutputSchema => {
  return outputSchema._outputSchemaType === 'LINK';
};
