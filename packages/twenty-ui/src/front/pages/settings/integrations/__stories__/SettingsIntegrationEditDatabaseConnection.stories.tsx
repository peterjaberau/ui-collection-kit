import { Meta, StoryObj } from '@storybook/react';

import { SettingsIntegrationEditDatabaseConnection } from '@twenty-ui/front/pages/settings/integrations/SettingsIntegrationEditDatabaseConnection';
import {
  PageDecorator,
  PageDecoratorArgs,
} from '@twenty-ui/front/testing/decorators/PageDecorator';
import { graphqlMocks } from '@twenty-ui/front/testing/graphqlMocks';
import { sleep } from '@twenty-ui/front/utils/sleep';

const meta: Meta<PageDecoratorArgs> = {
  title:
    'Pages/Settings/Integrations/SettingsIntegrationEditDatabaseConnection',
  component: SettingsIntegrationEditDatabaseConnection,
  decorators: [PageDecorator],
  args: {
    routePath: '/settings/integrations/:databaseKey/edit',
    routeParams: {
      ':databaseKey': 'postgresql',
      ':connectionId': '67cbfd35-8dd4-4591-b9d4-c1906281a5da',
    },
  },
  parameters: {
    msw: graphqlMocks,
  },
};

export default meta;

export type Story = StoryObj<typeof SettingsIntegrationEditDatabaseConnection>;

export const Default: Story = {
};
