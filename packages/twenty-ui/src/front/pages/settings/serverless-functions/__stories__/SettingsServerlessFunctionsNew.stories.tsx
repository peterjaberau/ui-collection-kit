import { SettingsServerlessFunctionsNew } from '@twenty-ui/front/pages/settings/serverless-functions/SettingsServerlessFunctionsNew';
import { graphqlMocks } from '@twenty-ui/front/testing/graphqlMocks';
import { Meta, StoryObj } from '@storybook/react';
import {
  PageDecorator,
  PageDecoratorArgs,
} from '@twenty-ui/front/testing/decorators/PageDecorator';
import { sleep } from '@twenty-ui/front/utils/sleep';

const meta: Meta<PageDecoratorArgs> = {
  title: 'Refactor Pages/Settings/ServerlessFunctions/SettingsServerlessFunctionsNew',
  component: SettingsServerlessFunctionsNew,
  decorators: [PageDecorator],
  args: { routePath: '/settings/functions/new' },
  parameters: {
    msw: graphqlMocks,
  },
};
export default meta;

export type Story = StoryObj<typeof SettingsServerlessFunctionsNew>;

export const Default: Story = {
};
