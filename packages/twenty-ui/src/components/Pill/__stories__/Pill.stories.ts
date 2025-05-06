import { Meta, StoryObj } from '@storybook/react';

import { Pill } from '../Pill';
import { ComponentDecorator } from '../../../testing/decorators/ComponentDecorator';

const meta: Meta<typeof Pill> = {
  title: 'Twenty UI/Display/Pill',
  component: Pill,
  decorators: [ComponentDecorator],
  args: {
    label: 'Soon',
  },
};

export default meta;
type Story = StoryObj<typeof Pill>;

export const Default: Story = {};
