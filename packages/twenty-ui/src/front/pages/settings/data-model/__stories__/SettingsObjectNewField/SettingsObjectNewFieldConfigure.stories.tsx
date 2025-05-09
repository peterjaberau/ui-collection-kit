import { Meta, StoryObj } from '@storybook/react';
import { SettingsObjectNewFieldConfigure } from '@twenty-ui/front/pages/settings/data-model/SettingsObjectNewField/SettingsObjectNewFieldConfigure';

import {
  PageDecorator,
  PageDecoratorArgs,
} from '@twenty-ui/front/testing/decorators/PageDecorator';
import { graphqlMocks } from '@twenty-ui/front/testing/graphqlMocks';

const meta: Meta<PageDecoratorArgs> = {
  title:
    'Pages/Settings/DataModel/SettingsObjectNewField/SettingsObjectNewFieldConfigure',
  component: SettingsObjectNewFieldConfigure,
  decorators: [PageDecorator],
  args: {
    routePath: '/settings/objects/:objectNamePlural/new-field/configure',
    routeParams: { ':objectNamePlural': 'companies' },
  },
  parameters: {
    msw: graphqlMocks,
  },
};

export default meta;

export type Story = StoryObj<typeof SettingsObjectNewFieldConfigure>;

export const Default: Story = {
};
