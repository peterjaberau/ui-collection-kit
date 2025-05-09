import { Meta, StoryObj } from '@storybook/react';

import { SettingsAccountsBlocklistInput } from '@twenty-modules/settings/accounts/components/SettingsAccountsBlocklistInput';
import { SettingsAccountsBlocklistSection } from '@twenty-modules/settings/accounts/components/SettingsAccountsBlocklistSection';
import { I18nFrontDecorator } from '@twenty-ui/front/testing/decorators/I18nFrontDecorator';
import { ComponentDecorator } from '@twenty-ui/testing';

const meta: Meta<typeof SettingsAccountsBlocklistSection> = {
  title: 'Modules/Settings/Accounts/Blocklist/SettingsAccountsBlocklistSection',
  component: SettingsAccountsBlocklistInput,
  decorators: [ComponentDecorator, I18nFrontDecorator],
};

export default meta;
type Story = StoryObj<typeof SettingsAccountsBlocklistSection>;

export const Default: Story = {};
