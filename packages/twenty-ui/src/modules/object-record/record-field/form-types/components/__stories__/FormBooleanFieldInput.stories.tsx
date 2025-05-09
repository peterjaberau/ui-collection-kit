import { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';
import { FormBooleanFieldInput } from '../FormBooleanFieldInput';

const meta: Meta<typeof FormBooleanFieldInput> = {
  title: 'UI/Data/Field/Form/Input/FormBooleanFieldInput',
  component: FormBooleanFieldInput,
  args: {},
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof FormBooleanFieldInput>;

export const Default: Story = {
  args: {},

};

export const WithLabel: Story = {
  args: {
    label: 'Boolean',
  },

};

export const TrueByDefault: Story = {
  args: {
    defaultValue: true,
  },

};

export const FalseByDefault: Story = {
  args: {
    defaultValue: false,
  },

};

export const WithVariablePicker: Story = {
  args: {
    VariablePicker: () => <div>VariablePicker</div>,
  },

};

export const Disabled: Story = {
  args: {
    readonly: true,
    defaultValue: false,
    VariablePicker: () => <div>VariablePicker</div>,
  },

};
