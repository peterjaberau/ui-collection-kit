import { Meta, StoryObj } from '@storybook/react';
import {
  expect,
  fn,
  userEvent,
  waitFor,
  waitForElementToBeRemoved,
  within,
} from '@storybook/test';
import { I18nFrontDecorator } from '@twenty-ui/front/testing/decorators/I18nFrontDecorator';
import { WorkflowStepDecorator } from '@twenty-ui/front/testing/decorators/WorkflowStepDecorator';
import { MOCKED_STEP_ID } from '@twenty-ui/front/testing/mock-data/workflow';
import { FormTextFieldInput } from '../FormTextFieldInput';
import { getUserDevice } from '@twenty-ui/utilities';

const meta: Meta<typeof FormTextFieldInput> = {
  title: 'Refactor UI/Data/Field/Form/Input/FormTextFieldInput',
  component: FormTextFieldInput,
  args: {},
  argTypes: {},
  decorators: [WorkflowStepDecorator, I18nFrontDecorator],
};

export default meta;

type Story = StoryObj<typeof FormTextFieldInput>;

export const Default: Story = {
  args: {
    placeholder: 'Text field...',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Text',
    placeholder: 'Text field...',
  },

};

export const Multiline: Story = {
  args: {
    label: 'Text',
    placeholder: 'Text field...',
    multiline: true,
  },

};

export const MultilineWithDefaultValue: Story = {
  args: {
    label: 'Text',
    defaultValue: 'Line 1\nLine 2\n\nLine 4',
    placeholder: 'Text field...',
    multiline: true,
  },

};

export const WithVariable: Story = {
  args: {
    label: 'Text',
    placeholder: 'Text field...',
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

export const WithDeletableVariable: Story = {
  args: {
    label: 'Text',
    placeholder: 'Text field...',
    defaultValue: `test {{${MOCKED_STEP_ID}.name}} test`,
  },

};

export const Disabled: Story = {
  args: {
    label: 'Text',
    placeholder: 'Text field...',
    defaultValue: 'Text field',
    readonly: true,
    VariablePicker: () => <div>VariablePicker</div>,
  },

};

export const DisabledWithVariable: Story = {
  args: {
    label: 'Text',
    defaultValue: `test {{${MOCKED_STEP_ID}.name}} test`,
    readonly: true,
  },

};

export const HasHistory: Story = {
  args: {
    label: 'Text',
    placeholder: 'Text field...',
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
