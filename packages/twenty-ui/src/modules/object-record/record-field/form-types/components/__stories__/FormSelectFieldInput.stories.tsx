import { expect } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import { fn, userEvent, within } from '@storybook/test';
import { I18nFrontDecorator } from '@twenty-ui/front/testing/decorators/I18nFrontDecorator';
import { WorkflowStepDecorator } from '@twenty-ui/front/testing/decorators/WorkflowStepDecorator';
import { MOCKED_STEP_ID } from '@twenty-ui/front/testing/mock-data/workflow';
import { FormSelectFieldInput } from '../FormSelectFieldInput';

const meta: Meta<typeof FormSelectFieldInput> = {
  title: 'Refactor UI/Data/Field/Form/Input/FormSelectFieldInput',
  component: FormSelectFieldInput,
  args: {},
  argTypes: {},
  decorators: [WorkflowStepDecorator, I18nFrontDecorator],
};

export default meta;

type Story = StoryObj<typeof FormSelectFieldInput>;

export const Default: Story = {
  args: {
    label: 'Work Policy',
    defaultValue: 'WORK_POLICY_1',
    options: [
      {
        label: 'Work Policy 1',
        value: 'WORK_POLICY_1',
        color: 'blue',
      },
      {
        label: 'Work Policy 2',
        value: 'WORK_POLICY_2',
        color: 'green',
      },
      {
        label: 'Work Policy 3',
        value: 'WORK_POLICY_3',
        color: 'red',
      },
      {
        label: 'Work Policy 4',
        value: 'WORK_POLICY_4',
        color: 'yellow',
      },
    ],
  },
};

export const WithVariablePicker: Story = {
  args: {
    label: 'Work Policy',
    defaultValue: 'WORK_POLICY_1',
    options: [
      {
        label: 'Work Policy 1',
        value: 'WORK_POLICY_1',
        color: 'blue',
      },
    ],

    VariablePicker: () => <div>VariablePicker</div>,
  },

};

export const Disabled: Story = {
  args: {
    label: 'Work Policy',
    defaultValue: 'WORK_POLICY_1',
    options: [
      {
        label: 'Work Policy 1',
        value: 'WORK_POLICY_1',
        color: 'blue',
      },
      {
        label: 'Work Policy 2',
        value: 'WORK_POLICY_2',
        color: 'green',
      },
      {
        label: 'Work Policy 3',
        value: 'WORK_POLICY_3',
        color: 'red',
      },
      {
        label: 'Work Policy 4',
        value: 'WORK_POLICY_4',
        color: 'yellow',
      },
    ],

    readonly: true,
  },
};

export const DisabledWithVariable: Story = {
  args: {
    label: 'Created At',
    defaultValue: `{{${MOCKED_STEP_ID}.createdAt}}`,
    options: [
      {
        label: 'Work Policy 1',
        value: 'WORK_POLICY_1',
        color: 'blue',
      },
      {
        label: 'Work Policy 2',
        value: 'WORK_POLICY_2',
        color: 'green',
      },
      {
        label: 'Work Policy 3',
        value: 'WORK_POLICY_3',
        color: 'red',
      },
      {
        label: 'Work Policy 4',
        value: 'WORK_POLICY_4',
        color: 'yellow',
      },
    ],

    readonly: true,
  },
};
