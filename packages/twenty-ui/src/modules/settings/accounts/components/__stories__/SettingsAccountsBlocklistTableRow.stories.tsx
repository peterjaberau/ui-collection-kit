import { Decorator, Meta, StoryObj } from '@storybook/react';

import { SettingsAccountsBlocklistTableRow } from '@twenty-modules/settings/accounts/components/SettingsAccountsBlocklistTableRow';
import { mockedBlocklist } from '@twenty-modules/settings/accounts/components/__stories__/mockedBlocklist';
import { ComponentDecorator } from '@twenty-ui/testing';
import { formatToHumanReadableDate } from '@twenty-ui/front/utils/date-utils';


const ClearMocksDecorator: Decorator = (Story, context) => {
  if (context.parameters.clearMocks === true) {
  }
  return <Story />;
};

const meta: Meta<typeof SettingsAccountsBlocklistTableRow> = {
  title:
    'Modules/Settings/Accounts/Blocklist/SettingsAccountsBlocklistTableRow',
  component: SettingsAccountsBlocklistTableRow,
  decorators: [ComponentDecorator, ClearMocksDecorator],
  args: {
    blocklistItem: mockedBlocklist[0],
  },
  argTypes: {
    blocklistItem: { control: false },
    onRemove: { control: false },
  },
  parameters: {
    clearMocks: true,
  },
};

export default meta;
type Story = StoryObj<typeof SettingsAccountsBlocklistTableRow>;

export const Default: Story = {
};

export const DeleteFirstElementFromBlocklist: Story = {
};
