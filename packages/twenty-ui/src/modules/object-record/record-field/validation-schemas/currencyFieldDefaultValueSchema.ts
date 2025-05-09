import { z } from 'zod';

import { CurrencyCode } from '@twenty-modules/object-record/record-field/types/CurrencyCode';
import { currencyCodeSchema } from '@twenty-modules/object-record/record-field/validation-schemas/currencyCodeSchema';
import { stripSimpleQuotesFromString } from '@twenty-ui/front/utils/string/stripSimpleQuotesFromString';
import { simpleQuotesStringSchema } from '@twenty-ui/front/utils/validation-schemas/simpleQuotesStringSchema';

export const currencyFieldDefaultValueSchema = z.object({
  amountMicros: z.number().nullable(),
  currencyCode: simpleQuotesStringSchema.refine(
    (value): value is `'${CurrencyCode}'` =>
      currencyCodeSchema.safeParse(stripSimpleQuotesFromString(value)).success,
    { message: 'String is not a valid currencyCode' },
  ),
});
