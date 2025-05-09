import { expect } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import { fn, userEvent, waitFor, within } from '@storybook/test';
import { I18nFrontDecorator } from '@twenty-ui/front/testing/decorators/I18nFrontDecorator';
import { WorkflowStepDecorator } from '@twenty-ui/front/testing/decorators/WorkflowStepDecorator';
import { MOCKED_STEP_ID } from '@twenty-ui/front/testing/mock-data/workflow';
import { FormRawJsonFieldInput } from '../FormRawJsonFieldInput';
import { getUserDevice } from '@twenty-ui/utilities';

const meta: Meta<typeof FormRawJsonFieldInput> = {
  title: 'UI/Data/Field/Form/Input/FormRawJsonFieldInput',
  component: FormRawJsonFieldInput,
  args: {},
  argTypes: {},
  decorators: [WorkflowStepDecorator, I18nFrontDecorator],
};

export default meta;

type Story = StoryObj<typeof FormRawJsonFieldInput>;

export const Default: Story = {
  args: {
    label: 'JSON field',
    placeholder: 'Enter valid json',
  },

};

export const Readonly: Story = {
  args: {
    label: 'JSON field',
    placeholder: 'Enter valid json',
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

export const SaveValidJson: Story = {
  args: {
    placeholder: 'Enter valid json',

  },

};

export const SaveValidMultilineJson: Story = {
  args: {
    placeholder: 'Enter valid json',

  },
};

export const MultilineWithDefaultValue: Story = {
  args: {
    placeholder: 'Enter valid json',
    defaultValue: '{\n  "a": {\n    "b" : "d"\n  }\n}',
  },

};

export const DoesNotIgnoreInvalidJson: Story = {
  args: {
    placeholder: 'Enter valid json',

  },

};

export const DisplayDefaultValueWithVariablesProperly: Story = {
  args: {
    placeholder: 'Enter valid json',
    defaultValue: `{ "a": { "b" :  {{${MOCKED_STEP_ID}.name}} } }`,

  },

};

export const InsertVariableInTheMiddleOnTextInput: Story = {
  args: {
    placeholder: 'Enter valid json',
    VariablePicker: ({ onVariableSelect }) => {
      return (
        <button
          onClick={() => {
            onVariableSelect('{{test}}');
          }}
        >
          Add variable
        </button>
      );
    },

  },
};

export const CanUseVariableAsObjectProperty: Story = {
  args: {
    placeholder: 'Enter valid json',
    VariablePicker: ({ onVariableSelect }) => {
      return (
        <button
          onClick={() => {
            onVariableSelect('{{test}}');
          }}
        >
          Add variable
        </button>
      );
    },

  },
};

export const ClearField: Story = {
  args: {
    placeholder: 'Enter valid json',
    defaultValue: '{ "a": 2 }',

  },
};

/**
 * Line breaks are not authorized in JSON strings. Users should instead put newlines characters themselves.
 * See https://stackoverflow.com/a/42073.
 */
export const DoesNotBreakWhenUserInsertsNewlineInJsonString: Story = {
  args: {
    placeholder: 'Enter valid json',

  },
};

export const AcceptsJsonEncodedNewline: Story = {
  args: {
    placeholder: 'Enter valid json',

  },
};

export const HasHistory: Story = {
  args: {
    placeholder: 'Enter valid json',
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
