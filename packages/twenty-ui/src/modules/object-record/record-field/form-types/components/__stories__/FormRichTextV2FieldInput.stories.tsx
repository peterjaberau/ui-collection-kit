import { Meta, StoryObj } from '@storybook/react';
import {
  expect,
  fn,
  userEvent,
  waitFor,
  waitForElementToBeRemoved,
  within,
} from '@storybook/test';
import { getUserDevice } from '@twenty-ui/utilities';
import { I18nFrontDecorator } from '@twenty-ui/front/testing/decorators/I18nFrontDecorator';
import { WorkflowStepDecorator } from '@twenty-ui/front/testing/decorators/WorkflowStepDecorator';
import { MOCKED_STEP_ID } from '@twenty-ui/front/testing/mock-data/workflow';
import { FormRichTextV2FieldInput } from '../FormRichTextV2FieldInput';

const meta: Meta<typeof FormRichTextV2FieldInput> = {
  title: 'Refactor UI/Data/Field/Form/Input/FormRichTextV2FieldInput',
  component: FormRichTextV2FieldInput,
  args: {},
  argTypes: {},
  decorators: [WorkflowStepDecorator, I18nFrontDecorator],
};

export default meta;

type Story = StoryObj<typeof FormRichTextV2FieldInput>;

export const Default: Story = {
  args: {
    placeholder: 'Rich Text field...',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Rich Text',
    placeholder: 'Rich Text field...',
  },

};

export const WithVariable: Story = {
  args: {
    label: 'Rich Text',
    placeholder: 'Rich Text field...',
    defaultValue: { blocknote: null, markdown: '## Title\nVariable: ' },
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
    defaultValue: {
      blocknote: null,
      markdown: `test {{${MOCKED_STEP_ID}.name}} test`,
    },

  },
};

export const Disabled: Story = {
  args: {
    label: 'Text',
    placeholder: 'Text field...',
    defaultValue: {
      blocknote: null,
      markdown: 'Rich Text',
    },
    readonly: true,
    VariablePicker: () => <div>VariablePicker</div>,
  },
};

export const DisabledWithVariable: Story = {
  args: {
    label: 'Text',
    defaultValue: {
      blocknote: null,
      markdown: `test {{${MOCKED_STEP_ID}.name}} test`,
    },
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
