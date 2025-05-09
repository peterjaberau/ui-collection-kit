import { COMMAND_MENU_COMPONENT_INSTANCE_ID } from '@twenty-modules/command-menu/constants/CommandMenuComponentInstanceId';
import { useCommandMenu } from '@twenty-modules/command-menu/hooks/useCommandMenu';
import { useCommandMenuHistory } from '@twenty-modules/command-menu/hooks/useCommandMenuHistory';
import { useOpenRecordsSearchPageInCommandMenu } from '@twenty-modules/command-menu/hooks/useOpenRecordsSearchPageInCommandMenu';
import { useSetGlobalCommandMenuContext } from '@twenty-modules/command-menu/hooks/useSetGlobalCommandMenuContext';
import { commandMenuPageState } from '@twenty-modules/command-menu/states/commandMenuPageState';
import { commandMenuSearchState } from '@twenty-modules/command-menu/states/commandMenuSearchState';
import { CommandMenuHotkeyScope } from '@twenty-modules/command-menu/types/CommandMenuHotkeyScope';
import { CommandMenuPages } from '@twenty-modules/command-menu/types/CommandMenuPages';
import { contextStoreTargetedRecordsRuleComponentState } from '@twenty-modules/context-store/states/contextStoreTargetedRecordsRuleComponentState';
import { useKeyboardShortcutMenu } from '@twenty-modules/keyboard-shortcut-menu/hooks/useKeyboardShortcutMenu';
import { useScopedHotkeys } from '@twenty-modules/ui/utilities/hotkey/hooks/useScopedHotkeys';
import { AppHotkeyScope } from '@twenty-modules/ui/utilities/hotkey/types/AppHotkeyScope';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';
import { isNonEmptyString } from '@sniptt/guards';
import { useRecoilValue } from 'recoil';
import { Key } from 'ts-key-enum';

export const useCommandMenuHotKeys = () => {
  const { toggleCommandMenu } = useCommandMenu();

  const { openRecordsSearchPage } = useOpenRecordsSearchPageInCommandMenu();

  const { goBackFromCommandMenu } = useCommandMenuHistory();

  const { setGlobalCommandMenuContext } = useSetGlobalCommandMenuContext();

  const commandMenuSearch = useRecoilValue(commandMenuSearchState);

  const { closeKeyboardShortcutMenu } = useKeyboardShortcutMenu();

  const commandMenuPage = useRecoilValue(commandMenuPageState);

  const contextStoreTargetedRecordsRuleComponent = useRecoilComponentValueV2(
    contextStoreTargetedRecordsRuleComponentState,
    COMMAND_MENU_COMPONENT_INSTANCE_ID,
  );

  useScopedHotkeys(
    'ctrl+k,meta+k',
    () => {
      closeKeyboardShortcutMenu();
      toggleCommandMenu();
    },
    AppHotkeyScope.CommandMenu,
    [closeKeyboardShortcutMenu, toggleCommandMenu],
  );

  useScopedHotkeys(
    ['/'],
    () => {
      openRecordsSearchPage();
    },
    AppHotkeyScope.KeyboardShortcutMenu,
    [openRecordsSearchPage],
    {
      ignoreModifiers: true,
    },
  );

  useScopedHotkeys(
    [Key.Escape],
    () => {
      goBackFromCommandMenu();
    },
    CommandMenuHotkeyScope.CommandMenuFocused,
    [goBackFromCommandMenu],
  );

  useScopedHotkeys(
    [Key.Backspace, Key.Delete],
    () => {
      if (isNonEmptyString(commandMenuSearch)) {
        return;
      }

      if (
        commandMenuPage === CommandMenuPages.Root &&
        !(
          contextStoreTargetedRecordsRuleComponent.mode === 'selection' &&
          contextStoreTargetedRecordsRuleComponent.selectedRecordIds.length ===
            0
        )
      ) {
        setGlobalCommandMenuContext();
      }
      if (commandMenuPage !== CommandMenuPages.Root) {
        goBackFromCommandMenu();
      }
    },
    CommandMenuHotkeyScope.CommandMenuFocused,
    [
      commandMenuPage,
      commandMenuSearch,
      contextStoreTargetedRecordsRuleComponent,
      goBackFromCommandMenu,
      setGlobalCommandMenuContext,
    ],
    {
      preventDefault: false,
    },
  );
};
