import { Decorator, Meta, StoryObj } from '@storybook/react';

import { SettingsObjectInactiveMenuDropDown } from '../SettingsObjectInactiveMenuDropDown';
import { ComponentDecorator } from '@twenty-ui/testing';


const ClearMocksDecorator: Decorator = (Story, context) => {
  if (context.parameters.clearMocks === true) {
  }
  return <Story />;
};

const meta: Meta<typeof SettingsObjectInactiveMenuDropDown> = {
  title: 'Modules/Settings/DataModel/SettingsObjectInactiveMenuDropDown',
  component: SettingsObjectInactiveMenuDropDown,
  args: {
    scopeKey: 'settings-object-inactive-menu-dropdown',
  },
  decorators: [ComponentDecorator, ClearMocksDecorator],
  parameters: {
    clearMocks: true,
  },
};

export default meta;
type Story = StoryObj<typeof SettingsObjectInactiveMenuDropDown>;

export const Default: Story = {};

export const Open: Story = {
};

export const WithActivate: Story = {
};

export const WithDelete: Story = {
  args: { isCustomObject: true },
};
