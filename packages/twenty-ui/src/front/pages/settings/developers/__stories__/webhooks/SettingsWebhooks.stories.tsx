import { Meta, StoryObj } from '@storybook/react';
import { SettingsWebhooks } from '@twenty-ui/front/pages/settings/developers/webhooks/components/SettingsWebhooks';

import {
  PageDecorator,
  PageDecoratorArgs,
} from '@twenty-ui/front/testing/decorators/PageDecorator';
import { graphqlMocks } from '@twenty-ui/front/testing/graphqlMocks';

const meta: Meta<PageDecoratorArgs> = {
  title: 'Pages/Settings/Webhooks',
  component: SettingsWebhooks,
  decorators: [PageDecorator],
  args: { routePath: '/settings/webhooks' },
  parameters: {
    msw: graphqlMocks,
  },
};

export default meta;

export type Story = StoryObj<typeof SettingsWebhooks>;

export const Default: Story = {
};
