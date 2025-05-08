import { Meta, StoryObj } from '@storybook/react';

import { ComponentWithRouterDecorator } from '../../../../testing';
import { RoundedLink } from '../RoundedLink';

const meta: Meta<typeof RoundedLink> = {
  title: 'Refactor UI/Navigation/Link/RoundedLink',
  component: RoundedLink,
  decorators: [ComponentWithRouterDecorator],
  args: {
    href: '/test',
    label: 'Rounded chip',
  },
};

export default meta;
type Story = StoryObj<typeof RoundedLink>;

export const Default: Story = {
  args: {
  },
};
