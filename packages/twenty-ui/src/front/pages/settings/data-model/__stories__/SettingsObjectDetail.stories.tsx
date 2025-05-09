import { Meta, StoryObj } from '@storybook/react';

import {
  PageDecorator,
  PageDecoratorArgs,
} from '@twenty-ui/front/testing/decorators/PageDecorator';
import { graphqlMocks } from '@twenty-ui/front/testing/graphqlMocks';
import { sleep } from '@twenty-ui/front/utils/sleep';

import { SettingsObjectDetailPage } from '../SettingsObjectDetailPage';

const meta: Meta<PageDecoratorArgs> = {
  title: 'Refactor Pages/Settings/DataModel/SettingsObjectDetail',
  component: SettingsObjectDetailPage,
  decorators: [PageDecorator],
  args: {
    routePath: '/settings/objects/:objectNamePlural',
    routeParams: { ':objectNamePlural': 'companies' },
  },
  parameters: {
    msw: graphqlMocks,
  },
};

export default meta;

export type Story = StoryObj<typeof SettingsObjectDetailPage>;

export const StandardObject: Story = {

};

export const CustomObject: Story = {
  args: {
    routeParams: { ':objectNamePlural': 'myCustoms' },
  },
};

export const ObjectTabs: Story = {
};

export const FieldDropdownMenu: Story = {
};
