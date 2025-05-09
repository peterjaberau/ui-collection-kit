import { useContext } from 'react';
import { SetRequired } from 'type-fest';

import { RsiContext } from '@twenty-modules/spreadsheet-import/components/ReactSpreadsheetImportContextProvider';
import { defaultSpreadsheetImportProps } from '@twenty-modules/spreadsheet-import/provider/components/SpreadsheetImport';
import { SpreadsheetImportDialogOptions } from '@twenty-modules/spreadsheet-import/types';

export const useSpreadsheetImportInternal = <T extends string>() =>
  useContext<
    SetRequired<
      SpreadsheetImportDialogOptions<T>,
      keyof typeof defaultSpreadsheetImportProps
    >
  >(RsiContext);
