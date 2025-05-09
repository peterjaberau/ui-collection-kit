import { Meta, StoryObj } from '@storybook/react';

import {
  PageDecorator,
  PageDecoratorArgs,
} from '@twenty-ui/front/testing/decorators/PageDecorator';
import { graphqlMocks } from '@twenty-ui/front/testing/graphqlMocks';
import { sleep } from '@twenty-ui/front/utils/sleep';

import { SettingsWorkspaceMembers } from '../SettingsWorkspaceMembers';

const meta: Meta<PageDecoratorArgs> = {
  title: 'Refactor Pages/Settings/SettingsWorkspaceMembers',
  component: SettingsWorkspaceMembers,
  decorators: [PageDecorator],
  args: { routePath: '/settings/workspace-members' },
  parameters: {
    msw: graphqlMocks,
  },
};

export default meta;

export type Story = StoryObj<typeof SettingsWorkspaceMembers>;

export const Default: Story = {
};
