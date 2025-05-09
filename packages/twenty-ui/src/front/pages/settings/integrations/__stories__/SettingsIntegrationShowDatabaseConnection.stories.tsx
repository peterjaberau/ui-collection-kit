import { Meta, StoryObj } from '@storybook/react';

import { SettingsPath } from '@twenty-modules/types/SettingsPath';
import { SettingsIntegrationShowDatabaseConnection } from '@twenty-ui/front/pages/settings/integrations/SettingsIntegrationShowDatabaseConnection';
import {
  PageDecorator,
  PageDecoratorArgs,
} from '@twenty-ui/front/testing/decorators/PageDecorator';
import { graphqlMocks } from '@twenty-ui/front/testing/graphqlMocks';
import { getSettingsPath } from '@twenty-ui/front/utils/navigation/getSettingsPath';
import { sleep } from '@twenty-ui/front/utils/sleep';

const meta: Meta<PageDecoratorArgs> = {
  title:
    'Pages/Settings/Integrations/SettingsIntegrationShowDatabaseConnection',
  component: SettingsIntegrationShowDatabaseConnection,
  decorators: [PageDecorator],
  args: {
    routePath: getSettingsPath(SettingsPath.IntegrationDatabaseConnection),
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

export type Story = StoryObj<typeof SettingsIntegrationShowDatabaseConnection>;

export const Default: Story = {
};
