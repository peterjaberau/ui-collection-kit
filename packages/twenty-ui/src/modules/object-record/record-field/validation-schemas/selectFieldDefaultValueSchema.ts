import { FieldMetadataItemOption } from '@twenty-modules/object-metadata/types/FieldMetadataItem';
import { stripSimpleQuotesFromString } from '@twenty-ui/front/utils/string/stripSimpleQuotesFromString';
import { simpleQuotesStringSchema } from '@twenty-ui/front/utils/validation-schemas/simpleQuotesStringSchema';

export const selectFieldDefaultValueSchema = (
  options?: FieldMetadataItemOption[],
) => {
  if (!options?.length) return simpleQuotesStringSchema.nullable();

  const optionValues = options.map(({ value }) => value);

  return simpleQuotesStringSchema
    .refine(
      (value) => optionValues.includes(stripSimpleQuotesFromString(value)),
      {
        message: `String is not a valid select option, available options are: ${options.join(
          ', ',
        )}`,
      },
    )
    .nullable();
};
