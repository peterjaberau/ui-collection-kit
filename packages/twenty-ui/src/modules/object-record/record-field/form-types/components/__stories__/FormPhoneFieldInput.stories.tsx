import { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, waitFor, within } from '@storybook/test';

import { FieldPhonesValue } from '@twenty-modules/object-record/record-field/types/FieldMetadata';
import { I18nFrontDecorator } from '@twenty-ui/front/testing/decorators/I18nFrontDecorator';
import { WorkflowStepDecorator } from '@twenty-ui/front/testing/decorators/WorkflowStepDecorator';
import { MOCKED_STEP_ID } from '@twenty-ui/front/testing/mock-data/workflow';
import { FormPhoneFieldInput } from '../FormPhoneFieldInput';

const meta: Meta<typeof FormPhoneFieldInput> = {
  title: 'UI/Data/Field/Form/Input/FormPhoneFieldInput',
  component: FormPhoneFieldInput,
  args: {},
  argTypes: {},
  decorators: [WorkflowStepDecorator, I18nFrontDecorator],
};

export default meta;

type Story = StoryObj<typeof FormPhoneFieldInput>;

const defaultPhoneValue: FieldPhonesValue = {
  primaryPhoneNumber: '0612345678',
  primaryPhoneCountryCode: 'FR',
  primaryPhoneCallingCode: '33',
};

export const Default: Story = {
  args: {
    label: 'Phone',
    defaultValue: defaultPhoneValue,
  },

};

export const WithVariablesAsDefaultValues: Story = {
  args: {
    label: 'Phone',
    defaultValue: {
      primaryPhoneCountryCode: `{{${MOCKED_STEP_ID}.name}}`,
      primaryPhoneNumber: `{{${MOCKED_STEP_ID}.amount.amountMicros}}`,
    },
    VariablePicker: () => <div>VariablePicker</div>,
  },

};

export const SelectingVariables: Story = {
  args: {
    label: 'Phone',
    VariablePicker: ({ onVariableSelect }) => {
      return (
        <button
          onClick={() => {
            onVariableSelect(`{{${MOCKED_STEP_ID}.phone.number}}`);
          }}
        >
          Add variable
        </button>
      );
    },

  },

};

export const Disabled: Story = {
  args: {
    label: 'Phone',
    readonly: true,
    VariablePicker: () => <div>VariablePicker</div>,
  },

};
