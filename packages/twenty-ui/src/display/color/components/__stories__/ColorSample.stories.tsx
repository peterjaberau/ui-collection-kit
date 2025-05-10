import { Meta, StoryObj } from '@storybook/react';

import { ColorSample } from '../ColorSample';

const meta: Meta<typeof ColorSample> = {
  title: 'Refactor UI/Display/Color/ColorSample',
  component: ColorSample,
  args: { colorName: 'green' },
  argTypes: {
    as: { control: false },
    theme: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof ColorSample>;

export const Default: Story = {};

export const Pipeline: Story = {
  args: { variant: 'pipeline' },
};
