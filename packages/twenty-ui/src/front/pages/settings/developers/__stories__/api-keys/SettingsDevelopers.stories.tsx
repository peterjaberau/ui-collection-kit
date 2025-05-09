import { Meta, StoryObj } from '@storybook/react';

import { SettingsApiKeys } from '@twenty-ui/front/pages/settings/developers/api-keys/SettingsApiKeys';
import {
  PageDecorator,
  PageDecoratorArgs,
} from '@twenty-ui/front/testing/decorators/PageDecorator';
import { graphqlMocks } from '@twenty-ui/front/testing/graphqlMocks';

const meta: Meta<PageDecoratorArgs> = {
  title: 'Refactor Pages/Settings/ApiKeys',
  component: SettingsApiKeys,
  decorators: [PageDecorator],
  args: { routePath: '/settings/apis' },
  parameters: {
    msw: graphqlMocks,
  },
};

export default meta;

export type Story = StoryObj<typeof SettingsApiKeys>;

export const Default: Story = {
};
