import { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/test';
import { FormCountrySelectInput } from '../FormCountrySelectInput';

const meta: Meta<typeof FormCountrySelectInput> = {
  title: 'Refactor UI/Data/Field/Form/Input/FormCountrySelectInput',
  component: FormCountrySelectInput,
  args: {},
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof FormCountrySelectInput>;

export const Default: Story = {
  args: {
    selectedCountryName: 'Canada',
  },

};
