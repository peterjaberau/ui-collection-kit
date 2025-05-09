import uniqBy from 'lodash.uniqby';

import { MatchColumnsStepProps } from '@twenty-modules/spreadsheet-import/steps/components/MatchColumnsStep/MatchColumnsStep';
import { SpreadsheetMatchedOptions } from '@twenty-modules/spreadsheet-import/types/SpreadsheetMatchedOptions';

export const uniqueEntries = <T extends string>(
  data: MatchColumnsStepProps['data'],
  index: number,
): Partial<SpreadsheetMatchedOptions<T>>[] =>
  uniqBy(
    data.map((row) => ({ entry: row[index] })),
    'entry',
  ).filter(({ entry }) => !!entry);
