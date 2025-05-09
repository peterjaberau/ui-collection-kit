import { Meta, StoryObj } from '@storybook/react';

import { SettingsAccountsCalendarChannelsGeneral } from '@twenty-modules/settings/accounts/components/SettingsAccountsCalendarChannelsGeneral';
import { ObjectMetadataItemsDecorator } from '@twenty-ui/front/testing/decorators/ObjectMetadataItemsDecorator';
import { SnackBarDecorator } from '@twenty-ui/front/testing/decorators/SnackBarDecorator';
import { ComponentDecorator } from '@twenty-ui/testing';

const meta: Meta<typeof SettingsAccountsCalendarChannelsGeneral> = {
  title:
    'Modules/Settings/Accounts/CalendarChannels/SettingsAccountsCalendarChannelsGeneral',
  component: SettingsAccountsCalendarChannelsGeneral,
  decorators: [
    ComponentDecorator,
    ObjectMetadataItemsDecorator,
    SnackBarDecorator,
  ],
};

export default meta;
type Story = StoryObj<typeof SettingsAccountsCalendarChannelsGeneral>;

export const Default: Story = {
};
