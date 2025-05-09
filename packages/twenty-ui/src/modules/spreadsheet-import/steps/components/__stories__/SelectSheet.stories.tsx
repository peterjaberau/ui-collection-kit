import { Meta } from '@storybook/react';

import { mockRsiValues } from '@twenty-modules/spreadsheet-import/__mocks__/mockRsiValues';
import { ModalWrapper } from '@twenty-modules/spreadsheet-import/components/ModalWrapper';
import { ReactSpreadsheetImportContextProvider } from '@twenty-modules/spreadsheet-import/components/ReactSpreadsheetImportContextProvider';
import { SelectSheetStep } from '@twenty-modules/spreadsheet-import/steps/components/SelectSheetStep/SelectSheetStep';
import { SpreadsheetImportStepType } from '@twenty-modules/spreadsheet-import/steps/types/SpreadsheetImportStepType';
import { DialogManagerScope } from '@twenty-modules/ui/feedback/dialog-manager/scopes/DialogManagerScope';
import { I18nFrontDecorator } from '@twenty-ui/front/testing/decorators/I18nFrontDecorator';

const meta: Meta<typeof SelectSheetStep> = {
  title: 'Refactor Modules/SpreadsheetImport/SelectSheetStep',
  component: SelectSheetStep,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [I18nFrontDecorator],
};

export default meta;

const sheetNames = ['Sheet1', 'Sheet2', 'Sheet3'];

export const Default = () => (
  <DialogManagerScope dialogManagerScopeId="dialog-manager">
    <ReactSpreadsheetImportContextProvider values={mockRsiValues}>
      <ModalWrapper isOpen={true} onClose={() => null}>
        <SelectSheetStep
          sheetNames={sheetNames}
          setCurrentStepState={() => {}}
          setPreviousStepState={() => {}}
          currentStepState={{
            type: SpreadsheetImportStepType.selectSheet,
            workbook: {
              SheetNames: sheetNames,
              Sheets: {
                Sheet1: {
                  A1: 1,
                  A2: 2,
                  A3: 3,
                },
                Sheet2: {
                  A1: 1,
                  A2: 2,
                  A3: 3,
                },
                Sheet3: {
                  A1: 1,
                  A2: 2,
                  A3: 3,
                },
              },
            },
          }}
          onError={() => null}
          onBack={() => Promise.resolve()}
        />
      </ModalWrapper>
    </ReactSpreadsheetImportContextProvider>
  </DialogManagerScope>
);
