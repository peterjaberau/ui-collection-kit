import { Meta, StoryObj } from '@storybook/react';

import { SettingsIntegrationNewDatabaseConnection } from '@twenty-ui/front/pages/settings/integrations/SettingsIntegrationNewDatabaseConnection';
import {
  PageDecorator,
  PageDecoratorArgs,
} from '@twenty-ui/front/testing/decorators/PageDecorator';
import { graphqlMocks } from '@twenty-ui/front/testing/graphqlMocks';

const meta: Meta<PageDecoratorArgs> = {
  title: 'Pages/Settings/Integrations/SettingsIntegrationNewDatabaseConnection',
  component: SettingsIntegrationNewDatabaseConnection,
  decorators: [PageDecorator],
  args: {
    routePath: '/settings/integrations/:databaseKey/new',
    routeParams: { ':databaseKey': 'postgresql' },
  },
  parameters: {
    msw: graphqlMocks,
  },
};

export default meta;

export type Story = StoryObj<typeof SettingsIntegrationNewDatabaseConnection>;

export const Default: Story = {
};
