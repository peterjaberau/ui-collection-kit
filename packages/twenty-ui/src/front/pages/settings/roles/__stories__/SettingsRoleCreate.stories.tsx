import { Meta, StoryObj } from '@storybook/react';

import {
  PageDecorator,
  PageDecoratorArgs,
} from '@twenty-ui/front/testing/decorators/PageDecorator';
import { graphqlMocks } from '@twenty-ui/front/testing/graphqlMocks';

import { SettingsRoleCreate } from '../SettingsRoleCreate';

const meta: Meta<PageDecoratorArgs> = {
  title: 'Refactor Pages/Settings/Roles/SettingsRoleCreate',
  component: SettingsRoleCreate,
  decorators: [PageDecorator],
  args: {
    routePath: '/settings/roles/create',
  },
  parameters: {
    msw: graphqlMocks,
  },
};

export default meta;

export type Story = StoryObj<typeof SettingsRoleCreate>;

export const Default: Story = {};
