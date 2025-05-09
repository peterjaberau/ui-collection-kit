import { SettingsPath } from '@twenty-modules/types/SettingsPath';
import { Meta, StoryObj } from '@storybook/react';

import { SettingsDevelopersApiKeysNew } from '@twenty-ui/front/pages/settings/developers/api-keys/SettingsDevelopersApiKeysNew';
import {
  PageDecorator,
  PageDecoratorArgs,
} from '@twenty-ui/front/testing/decorators/PageDecorator';
import { graphqlMocks } from '@twenty-ui/front/testing/graphqlMocks';
import { getSettingsPath } from '@twenty-ui/front/utils/navigation/getSettingsPath';

const meta: Meta<PageDecoratorArgs> = {
  title: 'Refactor Pages/Settings/ApiKeys/SettingsDevelopersApiKeysNew',
  component: SettingsDevelopersApiKeysNew,
  decorators: [PageDecorator],
  args: { routePath: getSettingsPath(SettingsPath.DevelopersNewApiKey) },
  parameters: {
    msw: graphqlMocks,
  },
};

export default meta;

export type Story = StoryObj<typeof SettingsDevelopersApiKeysNew>;

export const Default: Story = {
};
