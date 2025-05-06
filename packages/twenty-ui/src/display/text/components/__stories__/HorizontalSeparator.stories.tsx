import { Meta, StoryObj } from '@storybook/react';
import { ComponentDecorator } from '../../../../testing';

import { HorizontalSeparator } from '../HorizontalSeparator';

const meta: Meta<typeof HorizontalSeparator> = {
  title: 'Twenty UI/Display/Text/HorizontalSeparator',
  component: HorizontalSeparator,
  decorators: [ComponentDecorator],
};

export default meta;
type Story = StoryObj<typeof HorizontalSeparator>;

export const Default: Story = {};
