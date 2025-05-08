import { Meta, StoryObj } from '@storybook/react';

import { ComponentWithRouterDecorator } from '../../../../testing';
import { GithubVersionLink } from '../GithubVersionLink';

const meta: Meta<typeof GithubVersionLink> = {
  title: 'Refactor UI/Navigation/Link/GithubVersionLink',
  component: GithubVersionLink,
  decorators: [ComponentWithRouterDecorator],
};

export default meta;
type Story = StoryObj<typeof GithubVersionLink>;

export const Default: Story = {};
