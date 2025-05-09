import { VariableChip } from '@twenty-modules/object-record/record-field/form-types/components/VariableChip';
import { Meta, StoryObj } from '@storybook/react';
import { I18nFrontDecorator } from '@twenty-ui/front/testing/decorators/I18nFrontDecorator';
import { WorkflowStepDecorator } from '@twenty-ui/front/testing/decorators/WorkflowStepDecorator';
import { MOCKED_STEP_ID } from '@twenty-ui/front/testing/mock-data/workflow';

const meta: Meta<typeof VariableChip> = {
  title: 'UI/Data/Field/Form/Input/VariableChip',
  component: VariableChip,
  decorators: [WorkflowStepDecorator, I18nFrontDecorator],
};

export default meta;

type Story = StoryObj<typeof VariableChip>;

export const Default: Story = {
  args: {
    rawVariableName: `{{${MOCKED_STEP_ID}.address.street1}}`,
  },
};

export const WithVariableNotFound: Story = {
  args: {
    rawVariableName: `{{${MOCKED_STEP_ID}.unknown.variable}}`,
  },
};
