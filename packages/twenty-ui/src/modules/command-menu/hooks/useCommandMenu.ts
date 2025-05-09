import { useRecoilCallback } from 'recoil';

import { commandMenuSearchState } from '@twenty-modules/command-menu/states/commandMenuSearchState';

import { COMMAND_MENU_COMPONENT_INSTANCE_ID } from '@twenty-modules/command-menu/constants/CommandMenuComponentInstanceId';
import { useNavigateCommandMenu } from '@twenty-modules/command-menu/hooks/useNavigateCommandMenu';
import { isCommandMenuClosingState } from '@twenty-modules/command-menu/states/isCommandMenuClosingState';
import { CommandMenuPages } from '@twenty-modules/command-menu/types/CommandMenuPages';
import { useCloseAnyOpenDropdown } from '@twenty-modules/ui/layout/dropdown/hooks/useCloseAnyOpenDropdown';
import { isDragSelectionStartEnabledState } from '@twenty-modules/ui/utilities/drag-select/states/internal/isDragSelectionStartEnabledState';
import { usePreviousHotkeyScope } from '@twenty-modules/ui/utilities/hotkey/hooks/usePreviousHotkeyScope';
import { useCallback } from 'react';
import { IconDotsVertical } from '@twenty-ui/display';
import { isCommandMenuOpenedState } from '../states/isCommandMenuOpenedState';

export const useCommandMenu = () => {
  const { navigateCommandMenu } = useNavigateCommandMenu();
  const { closeAnyOpenDropdown } = useCloseAnyOpenDropdown();
  const { goBackToPreviousHotkeyScope } = usePreviousHotkeyScope(
    COMMAND_MENU_COMPONENT_INSTANCE_ID,
  );

  const closeCommandMenu = useRecoilCallback(
    ({ set, snapshot }) =>
      () => {
        const isCommandMenuOpened = snapshot
          .getLoadable(isCommandMenuOpenedState)
          .getValue();

        if (isCommandMenuOpened) {
          set(isCommandMenuOpenedState, false);
          set(isCommandMenuClosingState, true);
          set(isDragSelectionStartEnabledState, true);
          closeAnyOpenDropdown();
          goBackToPreviousHotkeyScope();
        }
      },
    [closeAnyOpenDropdown, goBackToPreviousHotkeyScope],
  );

  const openCommandMenu = useCallback(() => {
    navigateCommandMenu({
      page: CommandMenuPages.Root,
      pageTitle: 'Command Menu',
      pageIcon: IconDotsVertical,
      resetNavigationStack: true,
    });
  }, [navigateCommandMenu]);

  const toggleCommandMenu = useRecoilCallback(
    ({ snapshot, set }) =>
      async () => {
        const isCommandMenuOpened = snapshot
          .getLoadable(isCommandMenuOpenedState)
          .getValue();

        set(commandMenuSearchState, '');

        if (isCommandMenuOpened) {
          closeCommandMenu();
        } else {
          openCommandMenu();
        }
      },
    [closeCommandMenu, openCommandMenu],
  );

  return {
    openCommandMenu,
    closeCommandMenu,
    navigateCommandMenu,
    toggleCommandMenu,
  };
};
