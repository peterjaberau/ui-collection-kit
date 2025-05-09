import { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, waitFor, within } from '@storybook/test';
import { I18nFrontDecorator } from '@twenty-ui/front/testing/decorators/I18nFrontDecorator';
import { WorkflowStepDecorator } from '@twenty-ui/front/testing/decorators/WorkflowStepDecorator';
import { MOCKED_STEP_ID } from '@twenty-ui/front/testing/mock-data/workflow';
import { FormEmailsFieldInput } from '../FormEmailsFieldInput';

const meta: Meta<typeof FormEmailsFieldInput> = {
  title: 'Refactor UI/Data/Field/Form/Input/FormEmailsFieldInput',
  component: FormEmailsFieldInput,
  args: {},
  argTypes: {},
  decorators: [WorkflowStepDecorator, I18nFrontDecorator],
};

export default meta;

type Story = StoryObj<typeof FormEmailsFieldInput>;

export const Default: Story = {
  args: {
    label: 'Emails',
    defaultValue: {
      primaryEmail: 'tim@twenty.com',
      additionalEmails: [],
    },
  },

};

export const WithVariable: Story = {
  args: {
    label: 'Emails',
    defaultValue: {
      primaryEmail: `{{${MOCKED_STEP_ID}.name}}`,
      additionalEmails: [],
    },
    VariablePicker: () => <div>VariablePicker</div>,
  },

};

export const Disabled: Story = {
  args: {
    label: 'Emails',
    defaultValue: {
      primaryEmail: 'tim@twenty.com',
      additionalEmails: [],
    },

    VariablePicker: () => <div>VariablePicker</div>,
    readonly: true,
  },
};
