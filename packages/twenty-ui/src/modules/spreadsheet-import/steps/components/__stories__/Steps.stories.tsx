import { expect } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/test';

import { ComponentWithRecoilScopeDecorator } from '@twenty-ui/front/testing/decorators/ComponentWithRecoilScopeDecorator';
import { SnackBarDecorator } from '@twenty-ui/front/testing/decorators/SnackBarDecorator';

import { stepBarInternalState } from '@twenty-modules/ui/navigation/step-bar/states/stepBarInternalState';
import { I18nFrontDecorator } from '@twenty-ui/front/testing/decorators/I18nFrontDecorator';
import { SpreadsheetImportStepperContainer } from '../SpreadsheetImportStepperContainer';

const meta: Meta<typeof SpreadsheetImportStepperContainer> = {
  title: 'Modules/SpreadsheetImport/Steps',
  component: SpreadsheetImportStepperContainer,
  decorators: [
    ComponentWithRecoilScopeDecorator,
    SnackBarDecorator,
    I18nFrontDecorator,
  ],
  parameters: {
    initialRecoilState: {
      [stepBarInternalState.key]: { activeStep: 0 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof SpreadsheetImportStepperContainer>;

export const Default: Story = {

};
