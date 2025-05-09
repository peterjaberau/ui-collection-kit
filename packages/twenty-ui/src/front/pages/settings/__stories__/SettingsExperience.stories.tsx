import { Meta, StoryObj } from '@storybook/react';

import {
  PageDecorator,
  PageDecoratorArgs,
} from '@twenty-ui/front/testing/decorators/PageDecorator';
import { graphqlMocks } from '@twenty-ui/front/testing/graphqlMocks';

import { SettingsExperience } from '../profile/appearance/components/SettingsExperience';

const meta: Meta<PageDecoratorArgs> = {
  title: 'Refactor Pages/Settings/SettingsExperience',
  component: SettingsExperience,
  decorators: [PageDecorator],
  args: { routePath: '/settings/experience' },
  parameters: {
    msw: graphqlMocks,
    date: new Date(2021, 1, 1),
  },
};

export default meta;

export type Story = StoryObj<typeof SettingsExperience>;

export const Default: Story = {
};

export const DateTimeSettingsTimeFormat: Story = {
};

export const DateTimeSettingsTimezone: Story = {
};

export const DateTimeSettingsDateFormat: Story = {
};
