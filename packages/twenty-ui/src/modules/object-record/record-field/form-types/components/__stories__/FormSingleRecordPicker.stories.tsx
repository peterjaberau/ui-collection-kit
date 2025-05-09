import { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';
import { ComponentDecorator, RouterDecorator } from '@twenty-ui/testing';
import { I18nFrontDecorator } from '@twenty-ui/front/testing/decorators/I18nFrontDecorator';
import { ObjectMetadataItemsDecorator } from '@twenty-ui/front/testing/decorators/ObjectMetadataItemsDecorator';
import { SnackBarDecorator } from '@twenty-ui/front/testing/decorators/SnackBarDecorator';
import { WorkflowStepDecorator } from '@twenty-ui/front/testing/decorators/WorkflowStepDecorator';
import { WorkspaceDecorator } from '@twenty-ui/front/testing/decorators/WorkspaceDecorator';
import { graphqlMocks } from '@twenty-ui/front/testing/graphqlMocks';
import { MOCKED_STEP_ID } from '@twenty-ui/front/testing/mock-data/workflow';
import { FormSingleRecordPicker } from '../FormSingleRecordPicker';

const meta: Meta<typeof FormSingleRecordPicker> = {
  title: 'Refactor UI/Data/Field/Form/Input/FormSingleRecordPicker',
  component: FormSingleRecordPicker,
  parameters: {
    msw: graphqlMocks,
  },
  args: {},
  argTypes: {},
  decorators: [
    I18nFrontDecorator,
    ObjectMetadataItemsDecorator,
    ComponentDecorator,
    WorkspaceDecorator,
    SnackBarDecorator,
  ],
};

export default meta;

type Story = StoryObj<typeof FormSingleRecordPicker>;

export const Default: Story = {
  args: {
    label: 'Company',
    defaultValue: '123e4567-e89b-12d3-a456-426614174000',
    objectNameSingular: 'company',

  },

};

export const WithVariables: Story = {
  args: {
    label: 'Company',
    defaultValue: `{{${MOCKED_STEP_ID}.company.id}}`,
    objectNameSingular: 'company',

    VariablePicker: () => <div>VariablePicker</div>,
  },
  decorators: [
    WorkflowStepDecorator,
    ComponentDecorator,
    ObjectMetadataItemsDecorator,
    SnackBarDecorator,
    RouterDecorator,
  ],

};

export const Disabled: Story = {
  args: {
    label: 'Company',
    defaultValue: '123e4567-e89b-12d3-a456-426614174000',
    objectNameSingular: 'company',

    disabled: true,
    VariablePicker: () => <div>VariablePicker</div>,
  },

};
