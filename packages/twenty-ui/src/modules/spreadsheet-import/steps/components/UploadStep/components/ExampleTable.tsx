import { useMemo } from 'react';

import { SpreadsheetImportTable } from '@twenty-modules/spreadsheet-import/components/SpreadsheetImportTable';
import { SpreadsheetImportFields } from '@twenty-modules/spreadsheet-import/types';
import { generateExampleRow } from '@twenty-modules/spreadsheet-import/utils/generateExampleRow';

import { generateColumns } from './columns';

interface ExampleTableProps<T extends string> {
  fields: SpreadsheetImportFields<T>;
}

export const ExampleTable = <T extends string>({
  fields,
}: ExampleTableProps<T>) => {
  const data = useMemo(() => generateExampleRow(fields), [fields]);
  const columns = useMemo(() => generateColumns(fields), [fields]);

  return (
    <SpreadsheetImportTable
      rows={data}
      columns={columns}
      className={'rdg-example'}
    />
  );
};
