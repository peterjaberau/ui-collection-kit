import { Meta, StoryObj } from '@storybook/react';
import { SettingsServerlessFunctions } from '@twenty-ui/front/pages/settings/serverless-functions/SettingsServerlessFunctions';
import {
  PageDecorator,
  PageDecoratorArgs,
} from '@twenty-ui/front/testing/decorators/PageDecorator';
import { graphqlMocks } from '@twenty-ui/front/testing/graphqlMocks';
import { sleep } from '@twenty-ui/front/utils/sleep';

const meta: Meta<PageDecoratorArgs> = {
  title: 'Refactor Pages/Settings/ServerlessFunctions/SettingsServerlessFunctions',
  component: SettingsServerlessFunctions,
  decorators: [PageDecorator],
  args: { routePath: '/settings/functions' },
  parameters: {
    msw: graphqlMocks,
  },
};
export default meta;

export type Story = StoryObj<typeof SettingsServerlessFunctions>;

export const Default: Story = {
};
