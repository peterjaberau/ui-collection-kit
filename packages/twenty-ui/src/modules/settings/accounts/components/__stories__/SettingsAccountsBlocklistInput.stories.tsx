import { Decorator, Meta, StoryObj } from '@storybook/react';

import { SettingsAccountsBlocklistInput } from '@twenty-modules/settings/accounts/components/SettingsAccountsBlocklistInput';
import { I18nFrontDecorator } from '@twenty-ui/front/testing/decorators/I18nFrontDecorator';
import { ComponentDecorator } from '@twenty-ui/testing';


const ClearMocksDecorator: Decorator = (Story, context) => {
  if (context.parameters.clearMocks === true) {
  }
  return <Story />;
};

const meta: Meta<typeof SettingsAccountsBlocklistInput> = {
  title: 'Modules/Settings/Accounts/Blocklist/SettingsAccountsBlocklistInput',
  component: SettingsAccountsBlocklistInput,
  decorators: [ComponentDecorator, ClearMocksDecorator, I18nFrontDecorator],
  args: {
    blockedEmailOrDomainList: [],
  },
  argTypes: {
    updateBlockedEmailList: { control: false },
  },
  parameters: {
    clearMocks: true,
  },
};

export default meta;
type Story = StoryObj<typeof SettingsAccountsBlocklistInput>;

export const Default: Story = {};

export const AddToBlocklist: Story = {
};
