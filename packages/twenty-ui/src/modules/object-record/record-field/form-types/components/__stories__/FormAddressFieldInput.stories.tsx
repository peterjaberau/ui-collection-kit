import { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';
import { I18nFrontDecorator } from '@twenty-ui/front/testing/decorators/I18nFrontDecorator';
import { WorkflowStepDecorator } from '@twenty-ui/front/testing/decorators/WorkflowStepDecorator';
import { MOCKED_STEP_ID } from '@twenty-ui/front/testing/mock-data/workflow';
import { FormAddressFieldInput } from '../FormAddressFieldInput';

const meta: Meta<typeof FormAddressFieldInput> = {
  title: 'Refactor UI/Data/Field/Form/Input/FormAddressFieldInput',
  component: FormAddressFieldInput,
  args: {},
  argTypes: {},
  decorators: [WorkflowStepDecorator, I18nFrontDecorator],
};

export default meta;

type Story = StoryObj<typeof FormAddressFieldInput>;

export const Default: Story = {
  args: {
    label: 'Address',
    defaultValue: {
      addressStreet1: '123 Main St',
      addressStreet2: 'Apt 123',
      addressCity: 'Springfield',
      addressState: 'IL',
      addressCountry: 'United States',
      addressPostcode: '12345',
      addressLat: 39.781721,
      addressLng: -89.650148,
    },
  },

};

export const WithVariables: Story = {
  args: {
    label: 'Address',
    defaultValue: {
      addressStreet1: `{{${MOCKED_STEP_ID}.address.street1}}`,
      addressStreet2: `{{${MOCKED_STEP_ID}.address.street2}}`,
      addressCity: `{{${MOCKED_STEP_ID}.address.city}}`,
      addressState: `{{${MOCKED_STEP_ID}.address.state}}`,
      addressCountry: `{{${MOCKED_STEP_ID}.address.country}}`,
      addressPostcode: `{{${MOCKED_STEP_ID}.address.postcode}}`,
      addressLat: 39.781721,
      addressLng: -89.650148,
    },
    VariablePicker: () => <div>VariablePicker</div>,
  },

};

export const Disabled: Story = {
  args: {
    label: 'Address',
    readonly: true,
    defaultValue: {
      addressStreet1: '123 Main St',
      addressStreet2: 'Apt 123',
      addressCity: 'Springfield',
      addressState: 'IL',
      addressCountry: 'United States',
      addressPostcode: '12345',
      addressLat: 39.781721,
      addressLng: -89.650148,
    },

    VariablePicker: () => <div>VariablePicker</div>,
  },

};
