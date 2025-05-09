import { Meta, StoryObj } from '@storybook/react';
import { SettingsObjectNewFieldSelect } from '@twenty-ui/front/pages/settings/data-model/SettingsObjectNewField/SettingsObjectNewFieldSelect';

import {
  PageDecorator,
  PageDecoratorArgs,
} from '@twenty-ui/front/testing/decorators/PageDecorator';
import { graphqlMocks } from '@twenty-ui/front/testing/graphqlMocks';

const meta: Meta<PageDecoratorArgs> = {
  title:
    'Pages/Settings/DataModel/SettingsObjectNewField/SettingsObjectNewFieldSelect',
  component: SettingsObjectNewFieldSelect,
  decorators: [PageDecorator],
  args: {
    routePath: '/settings/objects/:objectNamePlural/new-field/select',
    routeParams: { ':objectNamePlural': 'companies' },
  },
  parameters: {
    msw: graphqlMocks,
  },
};

export default meta;

export type Story = StoryObj<typeof SettingsObjectNewFieldSelect>;

export const Default: Story = {
};
