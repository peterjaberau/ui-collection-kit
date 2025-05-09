import { Meta, StoryObj } from '@storybook/react';

import {
  PageDecorator,
  PageDecoratorArgs,
} from '@twenty-ui/front/testing/decorators/PageDecorator';
import { graphqlMocks } from '@twenty-ui/front/testing/graphqlMocks';

import { SettingsRoleEdit } from '../SettingsRoleEdit';

const meta: Meta<PageDecoratorArgs> = {
  title: 'Refactor Pages/Settings/Roles/SettingsRoleEdit',
  component: SettingsRoleEdit,
  decorators: [PageDecorator],
  args: {
    routePath: '/settings/roles/:roleId',
    routeParams: {
      ':roleId': '1',
    },
  },
  parameters: {
    msw: graphqlMocks,
  },
};

export default meta;

export type Story = StoryObj<typeof SettingsRoleEdit>;

export const Default: Story = {};
