import { SpreadsheetColumn } from '@twenty-modules/spreadsheet-import/types/SpreadsheetColumn';
import { SpreadsheetColumnType } from '@twenty-modules/spreadsheet-import/types/SpreadsheetColumnType';

export const setIgnoreColumn = <T extends string>({
  header,
  index,
}: SpreadsheetColumn<T>): SpreadsheetColumn<T> => ({
  header,
  index,
  type: SpreadsheetColumnType.ignored,
});
