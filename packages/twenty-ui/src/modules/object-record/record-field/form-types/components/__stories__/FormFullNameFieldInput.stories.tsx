import { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';
import { I18nFrontDecorator } from '@twenty-ui/front/testing/decorators/I18nFrontDecorator';
import { WorkflowStepDecorator } from '@twenty-ui/front/testing/decorators/WorkflowStepDecorator';
import { MOCKED_STEP_ID } from '@twenty-ui/front/testing/mock-data/workflow';
import { FormFullNameFieldInput } from '../FormFullNameFieldInput';

const meta: Meta<typeof FormFullNameFieldInput> = {
  title: 'UI/Data/Field/Form/Input/FormFullNameFieldInput',
  component: FormFullNameFieldInput,
  args: {},
  argTypes: {},
  decorators: [WorkflowStepDecorator, I18nFrontDecorator],
};

export default meta;

type Story = StoryObj<typeof FormFullNameFieldInput>;

export const Default: Story = {
  args: {
    label: 'Name',
    defaultValue: {
      firstName: 'John',
      lastName: 'Doe',
    },
  },

};

export const WithVariable: Story = {
  args: {
    label: 'Name',
    defaultValue: {
      firstName: `{{${MOCKED_STEP_ID}.fullName.firstName}}`,
      lastName: `{{${MOCKED_STEP_ID}.fullName.lastName}}`,
    },
    VariablePicker: () => <div>VariablePicker</div>,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Name',
    readonly: true,
    defaultValue: {
      firstName: 'John',
      lastName: 'Doe',
    },
    VariablePicker: () => <div>VariablePicker</div>,

  },
};
