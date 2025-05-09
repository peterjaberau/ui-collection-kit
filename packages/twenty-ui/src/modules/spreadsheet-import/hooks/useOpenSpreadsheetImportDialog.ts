import { useSetRecoilState } from 'recoil';

import { spreadsheetImportDialogState } from '@twenty-modules/spreadsheet-import/states/spreadsheetImportDialogState';
import { SpreadsheetImportDialogOptions } from '@twenty-modules/spreadsheet-import/types';

export const useOpenSpreadsheetImportDialog = <T extends string>() => {
  const setSpreadSheetImport = useSetRecoilState(spreadsheetImportDialogState);

  const openSpreadsheetImportDialog = (
    options: Omit<SpreadsheetImportDialogOptions<T>, 'isOpen' | 'onClose'>,
  ) => {
    setSpreadSheetImport({
      isOpen: true,
      options,
    });
  };

  return { openSpreadsheetImportDialog };
};
