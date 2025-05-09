import { Meta } from '@storybook/react';

import { mockRsiValues } from '@twenty-modules/spreadsheet-import/__mocks__/mockRsiValues';
import { ModalWrapper } from '@twenty-modules/spreadsheet-import/components/ModalWrapper';
import { ReactSpreadsheetImportContextProvider } from '@twenty-modules/spreadsheet-import/components/ReactSpreadsheetImportContextProvider';
import { UploadStep } from '@twenty-modules/spreadsheet-import/steps/components/UploadStep/UploadStep';
import { SpreadsheetImportStepType } from '@twenty-modules/spreadsheet-import/steps/types/SpreadsheetImportStepType';
import { DialogManagerScope } from '@twenty-modules/ui/feedback/dialog-manager/scopes/DialogManagerScope';
import { I18nFrontDecorator } from '@twenty-ui/front/testing/decorators/I18nFrontDecorator';
import { SnackBarDecorator } from '@twenty-ui/front/testing/decorators/SnackBarDecorator';

const meta: Meta<typeof UploadStep> = {
  title: 'Modules/SpreadsheetImport/UploadStep',
  component: UploadStep,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [SnackBarDecorator, I18nFrontDecorator],
};

export default meta;

export const Default = () => (
  <DialogManagerScope dialogManagerScopeId="dialog-manager">
    <ReactSpreadsheetImportContextProvider values={mockRsiValues}>
      <ModalWrapper isOpen={true} onClose={() => null}>
        <UploadStep
          setUploadedFile={() => null}
          setCurrentStepState={() => null}
          onError={() => null}
          nextStep={() => null}
          setPreviousStepState={() => null}
          currentStepState={{ type: SpreadsheetImportStepType.upload }}
        />
      </ModalWrapper>
    </ReactSpreadsheetImportContextProvider>
  </DialogManagerScope>
);
