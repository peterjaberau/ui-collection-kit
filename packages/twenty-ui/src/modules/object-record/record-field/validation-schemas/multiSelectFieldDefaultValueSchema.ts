import { z } from 'zod';

import { FieldMetadataItemOption } from '@twenty-modules/object-metadata/types/FieldMetadataItem';
import { stripSimpleQuotesFromString } from '@twenty-ui/front/utils/string/stripSimpleQuotesFromString';
import { simpleQuotesStringSchema } from '@twenty-ui/front/utils/validation-schemas/simpleQuotesStringSchema';

export const multiSelectFieldDefaultValueSchema = (
  options?: FieldMetadataItemOption[],
) => {
  if (!options?.length) return z.array(simpleQuotesStringSchema).nullable();

  const optionValues = options.map(({ value }) => value);

  return z
    .array(
      simpleQuotesStringSchema.refine(
        (value) => optionValues.includes(stripSimpleQuotesFromString(value)),
        {
          message: `String is not a valid multi-select option, available options are: ${options.join(
            ', ',
          )}`,
        },
      ),
    )
    .nullable();
};
