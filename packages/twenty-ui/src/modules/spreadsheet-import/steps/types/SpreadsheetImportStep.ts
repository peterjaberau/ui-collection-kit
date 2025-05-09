import { SpreadsheetImportStepType } from '@twenty-modules/spreadsheet-import/steps/types/SpreadsheetImportStepType';
import { ImportedRow } from '@twenty-modules/spreadsheet-import/types';
import { SpreadsheetColumns } from '@twenty-modules/spreadsheet-import/types/SpreadsheetColumns';
import { WorkBook } from 'xlsx-ugnis';

export type SpreadsheetImportStep =
  | {
      type: SpreadsheetImportStepType.upload;
    }
  | {
      type: SpreadsheetImportStepType.selectSheet;
      workbook: WorkBook;
    }
  | {
      type: SpreadsheetImportStepType.selectHeader;
      data: ImportedRow[];
    }
  | {
      type: SpreadsheetImportStepType.matchColumns;
      data: ImportedRow[];
      headerValues: ImportedRow;
    }
  | {
      type: SpreadsheetImportStepType.validateData;
      data: any[];
      importedColumns: SpreadsheetColumns<string>;
    }
  | {
      type: SpreadsheetImportStepType.loading;
    };
