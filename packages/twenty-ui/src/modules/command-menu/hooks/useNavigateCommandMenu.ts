import { COMMAND_MENU_COMPONENT_INSTANCE_ID } from '@twenty-modules/command-menu/constants/CommandMenuComponentInstanceId';
import { useCommandMenuCloseAnimationCompleteCleanup } from '@twenty-modules/command-menu/hooks/useCommandMenuCloseAnimationCompleteCleanup';
import { useCopyContextStoreStates } from '@twenty-modules/command-menu/hooks/useCopyContextStoreAndActionMenuStates';
import { commandMenuNavigationMorphItemByPageState } from '@twenty-modules/command-menu/states/commandMenuNavigationMorphItemsState';
import { commandMenuNavigationRecordsState } from '@twenty-modules/command-menu/states/commandMenuNavigationRecordsState';
import { commandMenuNavigationStackState } from '@twenty-modules/command-menu/states/commandMenuNavigationStackState';
import { commandMenuPageInfoState } from '@twenty-modules/command-menu/states/commandMenuPageInfoState';
import { commandMenuPageState } from '@twenty-modules/command-menu/states/commandMenuPageState';
import { hasUserSelectedCommandState } from '@twenty-modules/command-menu/states/hasUserSelectedCommandState';
import { isCommandMenuClosingState } from '@twenty-modules/command-menu/states/isCommandMenuClosingState';
import { isCommandMenuOpenedState } from '@twenty-modules/command-menu/states/isCommandMenuOpenedState';
import { CommandMenuHotkeyScope } from '@twenty-modules/command-menu/types/CommandMenuHotkeyScope';
import { CommandMenuPages } from '@twenty-modules/command-menu/types/CommandMenuPages';
import { MAIN_CONTEXT_STORE_INSTANCE_ID } from '@twenty-modules/context-store/constants/MainContextStoreInstanceId';
import { isDragSelectionStartEnabledState } from '@twenty-modules/ui/utilities/drag-select/states/internal/isDragSelectionStartEnabledState';
import { usePreviousHotkeyScope } from '@twenty-modules/ui/utilities/hotkey/hooks/usePreviousHotkeyScope';
import { useRecoilCallback } from 'recoil';
import { IconComponent } from '@twenty-ui/display';
import { v4 } from 'uuid';

export type CommandMenuNavigationStackItem = {
  page: CommandMenuPages;
  pageTitle: string;
  pageIcon: IconComponent;
  pageIconColor?: string;
  pageId?: string;
};

export const useNavigateCommandMenu = () => {
  const { setHotkeyScopeAndMemorizePreviousScope } = usePreviousHotkeyScope(
    COMMAND_MENU_COMPONENT_INSTANCE_ID,
  );

  const { copyContextStoreStates } = useCopyContextStoreStates();

  const { commandMenuCloseAnimationCompleteCleanup } =
    useCommandMenuCloseAnimationCompleteCleanup();

  const openCommandMenu = useRecoilCallback(
    ({ snapshot, set }) =>
      () => {
        const isCommandMenuOpened = snapshot
          .getLoadable(isCommandMenuOpenedState)
          .getValue();

        const isCommandMenuClosing = snapshot
          .getLoadable(isCommandMenuClosingState)
          .getValue();

        if (isCommandMenuClosing) {
          commandMenuCloseAnimationCompleteCleanup();
        }

        setHotkeyScopeAndMemorizePreviousScope(
          CommandMenuHotkeyScope.CommandMenuFocused,
          {
            commandMenuOpen: true,
          },
        );

        if (isCommandMenuOpened) {
          return;
        }

        copyContextStoreStates({
          instanceIdToCopyFrom: MAIN_CONTEXT_STORE_INSTANCE_ID,
          instanceIdToCopyTo: COMMAND_MENU_COMPONENT_INSTANCE_ID,
        });

        set(isCommandMenuOpenedState, true);
        set(hasUserSelectedCommandState, false);
        set(isDragSelectionStartEnabledState, false);
      },
    [
      copyContextStoreStates,
      commandMenuCloseAnimationCompleteCleanup,
      setHotkeyScopeAndMemorizePreviousScope,
    ],
  );

  const navigateCommandMenu = useRecoilCallback(
    ({ snapshot, set }) => {
      return ({
        page,
        pageTitle,
        pageIcon,
        pageIconColor,
        pageId,
        resetNavigationStack = false,
      }: CommandMenuNavigationStackItem & {
        resetNavigationStack?: boolean;
      }) => {
        const computedPageId = pageId || v4();

        openCommandMenu();
        set(commandMenuPageState, page);
        set(commandMenuPageInfoState, {
          title: pageTitle,
          Icon: pageIcon,
          instanceId: computedPageId,
        });

        const isCommandMenuClosing = snapshot
          .getLoadable(isCommandMenuClosingState)
          .getValue();

        const currentNavigationStack = isCommandMenuClosing
          ? []
          : snapshot.getLoadable(commandMenuNavigationStackState).getValue();

        if (resetNavigationStack) {
          set(commandMenuNavigationStackState, [
            {
              page,
              pageTitle,
              pageIcon,
              pageIconColor,
              pageId: computedPageId,
            },
          ]);

          set(commandMenuNavigationRecordsState, []);
          set(commandMenuNavigationMorphItemByPageState, new Map());
        } else {
          set(commandMenuNavigationStackState, [
            ...currentNavigationStack,
            {
              page,
              pageTitle,
              pageIcon,
              pageIconColor,
              pageId: computedPageId,
            },
          ]);
        }
      };
    },
    [openCommandMenu],
  );

  return {
    navigateCommandMenu,
  };
};
