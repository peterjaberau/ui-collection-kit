import { Meta } from '@storybook/react';

import {
  editableTableInitialData,
  importedColums,
  mockRsiValues,
} from '@twenty-modules/spreadsheet-import/__mocks__/mockRsiValues';
import { ModalWrapper } from '@twenty-modules/spreadsheet-import/components/ModalWrapper';
import { ReactSpreadsheetImportContextProvider } from '@twenty-modules/spreadsheet-import/components/ReactSpreadsheetImportContextProvider';
import { ValidationStep } from '@twenty-modules/spreadsheet-import/steps/components/ValidationStep/ValidationStep';
import { DialogManagerScope } from '@twenty-modules/ui/feedback/dialog-manager/scopes/DialogManagerScope';
import { I18nFrontDecorator } from '@twenty-ui/front/testing/decorators/I18nFrontDecorator';
const meta: Meta<typeof ValidationStep> = {
  title: 'Refactor Modules/SpreadsheetImport/ValidationStep',
  component: ValidationStep,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [I18nFrontDecorator],
};

export default meta;

const file = new File([''], 'file.csv');

export const Default = () => (
  <DialogManagerScope dialogManagerScopeId="dialog-manager">
    <ReactSpreadsheetImportContextProvider values={mockRsiValues}>
      <ModalWrapper isOpen={true} onClose={() => null}>
        <ValidationStep
          initialData={editableTableInitialData}
          file={file}
          importedColumns={importedColums}
          onBack={() => Promise.resolve()}
          setCurrentStepState={() => null}
        />
      </ModalWrapper>
    </ReactSpreadsheetImportContextProvider>
  </DialogManagerScope>
);
