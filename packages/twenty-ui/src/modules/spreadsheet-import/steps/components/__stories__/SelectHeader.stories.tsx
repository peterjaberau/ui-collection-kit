import { Meta } from '@storybook/react';

import {
  headerSelectionTableFields,
  mockRsiValues,
} from '@twenty-modules/spreadsheet-import/__mocks__/mockRsiValues';
import { ModalWrapper } from '@twenty-modules/spreadsheet-import/components/ModalWrapper';
import { ReactSpreadsheetImportContextProvider } from '@twenty-modules/spreadsheet-import/components/ReactSpreadsheetImportContextProvider';
import { SelectHeaderStep } from '@twenty-modules/spreadsheet-import/steps/components/SelectHeaderStep/SelectHeaderStep';
import { SpreadsheetImportStepType } from '@twenty-modules/spreadsheet-import/steps/types/SpreadsheetImportStepType';
import { DialogManagerScope } from '@twenty-modules/ui/feedback/dialog-manager/scopes/DialogManagerScope';
import { I18nFrontDecorator } from '@twenty-ui/front/testing/decorators/I18nFrontDecorator';

const meta: Meta<typeof SelectHeaderStep> = {
  title: 'Modules/SpreadsheetImport/SelectHeaderStep',
  component: SelectHeaderStep,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [I18nFrontDecorator],
};

export default meta;

export const Default = () => (
  <DialogManagerScope dialogManagerScopeId="dialog-manager">
    <ReactSpreadsheetImportContextProvider values={mockRsiValues}>
      <ModalWrapper isOpen={true} onClose={() => null}>
        <SelectHeaderStep
          importedRows={headerSelectionTableFields}
          setCurrentStepState={() => null}
          nextStep={() => Promise.resolve()}
          setPreviousStepState={() => null}
          onError={() => null}
          onBack={() => Promise.resolve()}
          currentStepState={{
            type: SpreadsheetImportStepType.selectHeader,
            data: headerSelectionTableFields,
          }}
        />
      </ModalWrapper>
    </ReactSpreadsheetImportContextProvider>
  </DialogManagerScope>
);
