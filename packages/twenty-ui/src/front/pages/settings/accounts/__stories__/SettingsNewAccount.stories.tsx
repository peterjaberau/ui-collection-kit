import { Meta, StoryObj } from '@storybook/react';

import { SettingsNewAccount } from '@twenty-ui/front/pages/settings/accounts/SettingsNewAccount';
import {
  PageDecorator,
  PageDecoratorArgs,
} from '@twenty-ui/front/testing/decorators/PageDecorator';
import { graphqlMocks } from '@twenty-ui/front/testing/graphqlMocks';

const meta: Meta<PageDecoratorArgs> = {
  title: 'Pages/Settings/Accounts/SettingsNewAccount',
  component: SettingsNewAccount,
  decorators: [PageDecorator],
  args: {
    routePath: '/settings/accounts/new',
  },
  parameters: {
    layout: 'fullscreen',
    msw: graphqlMocks,
  },
};

export default meta;

export type Story = StoryObj<typeof SettingsNewAccount>;

export const Default: Story = {};
