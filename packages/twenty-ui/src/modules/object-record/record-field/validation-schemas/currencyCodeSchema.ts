import { z } from 'zod';

import { CurrencyCode } from '@twenty-modules/object-record/record-field/types/CurrencyCode';

export const currencyCodeSchema = z.nativeEnum(CurrencyCode);
