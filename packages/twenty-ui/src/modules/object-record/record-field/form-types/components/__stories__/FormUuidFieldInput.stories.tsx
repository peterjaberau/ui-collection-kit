import { expect } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import { fn, userEvent, waitFor, within } from '@storybook/test';
import { I18nFrontDecorator } from '@twenty-ui/front/testing/decorators/I18nFrontDecorator';
import { WorkflowStepDecorator } from '@twenty-ui/front/testing/decorators/WorkflowStepDecorator';
import { MOCKED_STEP_ID } from '@twenty-ui/front/testing/mock-data/workflow';
import { FormUuidFieldInput } from '../FormUuidFieldInput';

const meta: Meta<typeof FormUuidFieldInput> = {
  title: 'Refactor UI/Data/Field/Form/Input/FormUuidFieldInput',
  component: FormUuidFieldInput,
  args: {},
  argTypes: {},
  decorators: [WorkflowStepDecorator, I18nFrontDecorator],
};
export default meta;

type Story = StoryObj<typeof FormUuidFieldInput>;

export const Default: Story = {
  args: {
    label: 'UUID field',
    placeholder: 'Enter UUID',
  },

};

export const SetUuidWithDashes: Story = {
  args: {
    label: 'UUID field',
    placeholder: 'Enter UUID',

  },

};

export const SetUuidWithoutDashes: Story = {
  args: {
    label: 'UUID field',
    placeholder: 'Enter UUID',

  },

};

export const SetInvalidUuidWithNoValidation: Story = {
  args: {
    label: 'UUID field',
    placeholder: 'Enter UUID',

  },

};

export const TrimInputBeforePersisting: Story = {
  args: {
    label: 'UUID field',
    placeholder: 'Enter UUID',

  },

};

export const ClearField: Story = {
  args: {
    label: 'UUID field',
    placeholder: 'Enter UUID',

  },

};

export const Disabled: Story = {
  args: {
    label: 'UUID field',
    placeholder: 'Enter UUID',
    readonly: true,
    VariablePicker: ({ onVariableSelect }) => {
      return (
        <button
          onClick={() => {
            onVariableSelect(`{{${MOCKED_STEP_ID}.name}}`);
          }}
        >
          Add variable
        </button>
      );
    },
  },

};
