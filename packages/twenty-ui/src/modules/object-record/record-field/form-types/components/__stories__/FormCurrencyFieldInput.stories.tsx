import { CurrencyCode } from '@twenty-modules/object-record/record-field/types/CurrencyCode';
import { FieldCurrencyValue } from '@twenty-modules/object-record/record-field/types/FieldMetadata';
import { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import { I18nFrontDecorator } from '@twenty-ui/front/testing/decorators/I18nFrontDecorator';
import { WorkflowStepDecorator } from '@twenty-ui/front/testing/decorators/WorkflowStepDecorator';
import { MOCKED_STEP_ID } from '@twenty-ui/front/testing/mock-data/workflow';
import { FormCurrencyFieldInput } from '../FormCurrencyFieldInput';

const meta: Meta<typeof FormCurrencyFieldInput> = {
  title: 'Refactor UI/Data/Field/Form/Input/FormCurrencyFieldInput',
  component: FormCurrencyFieldInput,
  args: {},
  argTypes: {},
  decorators: [WorkflowStepDecorator, I18nFrontDecorator],
};

export default meta;

type Story = StoryObj<typeof FormCurrencyFieldInput>;

const defaultSalaryValue: FieldCurrencyValue = {
  currencyCode: CurrencyCode.USD,
  amountMicros: 44000000,
};

export const Default: Story = {
  args: {
    label: 'Salary',
    defaultValue: defaultSalaryValue,
  },

};

export const WithVariable: Story = {
  args: {
    label: 'Salary',
    defaultValue: {
      currencyCode: `{{${MOCKED_STEP_ID}.amount.currencyCode}}` as CurrencyCode,
      amountMicros: `{{${MOCKED_STEP_ID}.amount.amountMicros}}`,
    },
  },

};

export const WithVariablePicker: Story = {
  args: {
    VariablePicker: () => <div>VariablePicker</div>,
  },

};

export const Disabled: Story = {
  args: {
    label: 'Salary',
    defaultValue: defaultSalaryValue,
    VariablePicker: () => <div>VariablePicker</div>,
    readonly: true,
  },

};
