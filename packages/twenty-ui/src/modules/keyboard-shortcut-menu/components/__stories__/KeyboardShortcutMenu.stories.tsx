import { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

import { SnackBarDecorator } from '@twenty-ui/front/testing/decorators/SnackBarDecorator';

import { useKeyboardShortcutMenu } from '@twenty-modules/keyboard-shortcut-menu/hooks/useKeyboardShortcutMenu';
import { useEffect } from 'react';
import { ComponentWithRouterDecorator } from '@twenty-ui/front/testing/decorators/ComponentWithRouterDecorator';
import { KeyboardShortcutMenu } from '../KeyboardShortcutMenu';

const meta: Meta<typeof KeyboardShortcutMenu> = {
  title: 'Modules/KeyboardShortcutMenu/KeyboardShortcutMenu',
  component: KeyboardShortcutMenu,
  decorators: [
    (Story) => {
      const { openKeyboardShortcutMenu } = useKeyboardShortcutMenu();
      useEffect(() => {
        openKeyboardShortcutMenu();
      }, [openKeyboardShortcutMenu]);
      return <Story />;
    },
    SnackBarDecorator,
    ComponentWithRouterDecorator,
  ],
};

export default meta;
type Story = StoryObj<typeof KeyboardShortcutMenu>;

export const Default: Story = {

};
