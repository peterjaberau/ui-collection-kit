import { Meta, StoryObj } from '@storybook/react';

import { SettingsPath } from '@twenty-modules/types/SettingsPath';
import { SettingsIntegrations } from '@twenty-ui/front/pages/settings/integrations/SettingsIntegrations';
import {
  PageDecorator,
  PageDecoratorArgs,
} from '@twenty-ui/front/testing/decorators/PageDecorator';
import { graphqlMocks } from '@twenty-ui/front/testing/graphqlMocks';
import { getSettingsPath } from '@twenty-ui/front/utils/navigation/getSettingsPath';
import { sleep } from '@twenty-ui/front/utils/sleep';

const meta: Meta<PageDecoratorArgs> = {
  title: 'Refactor Pages/Settings/Integrations/SettingsIntegrations',
  component: SettingsIntegrations,
  decorators: [PageDecorator],
  args: { routePath: getSettingsPath(SettingsPath.Integrations) },
  parameters: {
    msw: graphqlMocks,
  },
};

export default meta;

export type Story = StoryObj<typeof SettingsIntegrations>;

export const Default: Story = {
};
