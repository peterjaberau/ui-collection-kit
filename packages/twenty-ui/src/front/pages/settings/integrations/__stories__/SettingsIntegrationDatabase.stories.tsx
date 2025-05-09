import { Meta, StoryObj } from '@storybook/react';

import { SettingsPath } from '@twenty-modules/types/SettingsPath';
import { SettingsIntegrationDatabase } from '@twenty-ui/front/pages/settings/integrations/SettingsIntegrationDatabase';
import {
  PageDecorator,
  PageDecoratorArgs,
} from '@twenty-ui/front/testing/decorators/PageDecorator';
import { graphqlMocks } from '@twenty-ui/front/testing/graphqlMocks';
import { getSettingsPath } from '@twenty-ui/front/utils/navigation/getSettingsPath';
import { sleep } from '@twenty-ui/front/utils/sleep';

const meta: Meta<PageDecoratorArgs> = {
  title: 'Pages/Settings/Integrations/SettingsIntegrationDatabase',
  component: SettingsIntegrationDatabase,
  decorators: [PageDecorator],
  args: {
    routePath: getSettingsPath(SettingsPath.IntegrationDatabase),
    routeParams: { ':databaseKey': 'postgresql' },
  },
  parameters: {
    msw: graphqlMocks,
  },
};

export default meta;

export type Story = StoryObj<typeof SettingsIntegrationDatabase>;

export const Default: Story = {
};
