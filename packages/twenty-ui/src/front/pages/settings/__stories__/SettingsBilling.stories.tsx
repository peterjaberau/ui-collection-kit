import { Meta, StoryObj } from '@storybook/react';

import { SettingsPath } from '@twenty-modules/types/SettingsPath';
import {
  PageDecorator,
  PageDecoratorArgs,
} from '@twenty-ui/front/testing/decorators/PageDecorator';
import { graphqlMocks } from '@twenty-ui/front/testing/graphqlMocks';
import { sleep } from '@twenty-ui/front/utils/sleep';

import { getSettingsPath } from '@twenty-ui/front/utils/navigation/getSettingsPath';
import { SettingsBilling } from '../SettingsBilling';

const meta: Meta<PageDecoratorArgs> = {
  title: 'Refactor Pages/Settings/SettingsBilling',
  component: SettingsBilling,
  decorators: [PageDecorator],
  args: { routePath: getSettingsPath(SettingsPath.Billing) },
  parameters: {
    msw: graphqlMocks,
  },
};

export default meta;

export type Story = StoryObj<typeof SettingsBilling>;

export const Default: Story = {
};
