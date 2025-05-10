import { Meta, StoryObj } from '@storybook/react';
import { UndecoratedLink } from '../../../../navigation/link/components/UndecoratedLink';
import { ComponentWithRouterDecorator } from '../../../../testing';

const meta: Meta<typeof UndecoratedLink> = {
  title: 'Refactor UI/navigation/link/UndecoratedLink',
  component: UndecoratedLink,
  decorators: [ComponentWithRouterDecorator],
};

export default meta;
type Story = StoryObj<typeof UndecoratedLink>;

export const Default: Story = {
  args: {
    children: 'Go Home',
    to: '/home',
  },
};
