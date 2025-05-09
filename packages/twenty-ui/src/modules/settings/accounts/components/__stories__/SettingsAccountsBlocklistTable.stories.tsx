import { Decorator, Meta, StoryObj } from '@storybook/react';

import { mockedBlocklist } from '@twenty-modules/settings/accounts/components/__stories__/mockedBlocklist';
import { SettingsAccountsBlocklistTable } from '@twenty-modules/settings/accounts/components/SettingsAccountsBlocklistTable';
import { formatToHumanReadableDate } from '@twenty-ui/front/utils/date-utils';
import { ComponentDecorator } from '@twenty-ui/testing';


const ClearMocksDecorator: Decorator = (Story, context) => {
  if (context.parameters.clearMocks === true) {
  }
  return <Story />;
};

const meta: Meta<typeof SettingsAccountsBlocklistTable> = {
  title: 'Modules/Settings/Accounts/Blocklist/SettingsAccountsBlocklistTable',
  component: SettingsAccountsBlocklistTable,
  decorators: [ComponentDecorator, ClearMocksDecorator],
  args: {
    blocklist: mockedBlocklist,
  },
  argTypes: {
    blocklist: { control: false },
    handleBlockedEmailRemove: { control: false },
  },
  parameters: {
    clearMocks: true,
  },
};

export default meta;
type Story = StoryObj<typeof SettingsAccountsBlocklistTable>;

export const Default: Story = {
};

export const DeleteFirstElementFromBlocklist: Story = {
};
