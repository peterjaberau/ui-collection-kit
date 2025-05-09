import { expect } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/test';
import { FormNumberFieldInput } from '../FormNumberFieldInput';

const meta: Meta<typeof FormNumberFieldInput> = {
  title: 'Refactor UI/Data/Field/Form/Input/FormNumberFieldInput',
  component: FormNumberFieldInput,
  args: {},
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof FormNumberFieldInput>;

export const Default: Story = {
  args: {
    placeholder: 'Number field...',
  },

};

export const WithLabel: Story = {
  args: {
    label: 'Number',
    placeholder: 'Number field...',
  },

};

export const WithVariablePicker: Story = {
  args: {
    placeholder: 'Number field...',
    VariablePicker: () => <div>VariablePicker</div>,
  },

};

export const Disabled: Story = {
  args: {
    placeholder: 'Number field...',
    readonly: true,
    VariablePicker: () => <div>VariablePicker</div>,
    defaultValue: 123,
  },

};

export const WithError: Story = {
  args: {
    error: 'Invalid number',
  },

};
