import { useRecoilValue } from 'recoil';

import { useCommandMenu } from '@twenty-modules/command-menu/hooks/useCommandMenu';
import { useScopedHotkeys } from '@twenty-modules/ui/utilities/hotkey/hooks/useScopedHotkeys';
import { AppHotkeyScope } from '@twenty-modules/ui/utilities/hotkey/types/AppHotkeyScope';

import { useKeyboardShortcutMenu } from '../hooks/useKeyboardShortcutMenu';
import { isKeyboardShortcutMenuOpenedState } from '../states/isKeyboardShortcutMenuOpenedState';

import { KeyboardShortcutMenuOpenContent } from '@twenty-modules/keyboard-shortcut-menu/components/KeyboardShortcutMenuOpenContent';

export const KeyboardShortcutMenu = () => {
  const { toggleKeyboardShortcutMenu } = useKeyboardShortcutMenu();
  const isKeyboardShortcutMenuOpened = useRecoilValue(
    isKeyboardShortcutMenuOpenedState,
  );
  const { closeCommandMenu } = useCommandMenu();

  useScopedHotkeys(
    'shift+?,meta+?',
    () => {
      closeCommandMenu();
      toggleKeyboardShortcutMenu();
    },
    AppHotkeyScope.KeyboardShortcutMenu,
    [toggleKeyboardShortcutMenu],
  );

  return (
    <>{isKeyboardShortcutMenuOpened && <KeyboardShortcutMenuOpenContent />}</>
  );
};
