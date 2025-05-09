import { COMMAND_MENU_COMPONENT_INSTANCE_ID } from '@twenty-modules/command-menu/constants/CommandMenuComponentInstanceId';
import { COMMAND_MENU_CONTEXT_CHIP_GROUPS_DROPDOWN_ID } from '@twenty-modules/command-menu/constants/CommandMenuContextChipGroupsDropdownId';
import { COMMAND_MENU_PREVIOUS_COMPONENT_INSTANCE_ID } from '@twenty-modules/command-menu/constants/CommandMenuPreviousComponentInstanceId';
import { useResetContextStoreStates } from '@twenty-modules/command-menu/hooks/useResetContextStoreStates';
import { commandMenuNavigationMorphItemByPageState } from '@twenty-modules/command-menu/states/commandMenuNavigationMorphItemsState';
import { commandMenuNavigationRecordsState } from '@twenty-modules/command-menu/states/commandMenuNavigationRecordsState';
import { commandMenuNavigationStackState } from '@twenty-modules/command-menu/states/commandMenuNavigationStackState';
import { commandMenuPageInfoState } from '@twenty-modules/command-menu/states/commandMenuPageInfoState';
import { commandMenuPageState } from '@twenty-modules/command-menu/states/commandMenuPageState';
import { commandMenuSearchState } from '@twenty-modules/command-menu/states/commandMenuSearchState';
import { hasUserSelectedCommandState } from '@twenty-modules/command-menu/states/hasUserSelectedCommandState';
import { isCommandMenuClosingState } from '@twenty-modules/command-menu/states/isCommandMenuClosingState';
import { isCommandMenuOpenedState } from '@twenty-modules/command-menu/states/isCommandMenuOpenedState';
import { CommandMenuPages } from '@twenty-modules/command-menu/types/CommandMenuPages';
import { viewableRecordIdState } from '@twenty-modules/object-record/record-right-drawer/states/viewableRecordIdState';
import { useDropdownV2 } from '@twenty-modules/ui/layout/dropdown/hooks/useDropdownV2';
import { emitRightDrawerCloseEvent } from '@twenty-modules/ui/layout/right-drawer/utils/emitRightDrawerCloseEvent';
import { useSelectableList } from '@twenty-modules/ui/layout/selectable-list/hooks/useSelectableList';
import { getShowPageTabListComponentId } from '@twenty-modules/ui/layout/show-page/utils/getShowPageTabListComponentId';
import { activeTabIdComponentState } from '@twenty-modules/ui/layout/tab/states/activeTabIdComponentState';
import { WORKFLOW_SERVERLESS_FUNCTION_TAB_LIST_COMPONENT_ID } from '@twenty-modules/workflow/workflow-steps/workflow-actions/code-action/constants/WorkflowServerlessFunctionTabListComponentId';
import { WorkflowServerlessFunctionTabId } from '@twenty-modules/workflow/workflow-steps/workflow-actions/code-action/types/WorkflowServerlessFunctionTabId';
import { useRecoilCallback } from 'recoil';

export const useCommandMenuCloseAnimationCompleteCleanup = () => {
  const { resetSelectedItem } = useSelectableList('command-menu-list');

  const { resetContextStoreStates } = useResetContextStoreStates();

  const { closeDropdown } = useDropdownV2();

  const commandMenuCloseAnimationCompleteCleanup = useRecoilCallback(
    ({ snapshot, set }) =>
      () => {
        closeDropdown(COMMAND_MENU_CONTEXT_CHIP_GROUPS_DROPDOWN_ID);

        resetContextStoreStates(COMMAND_MENU_COMPONENT_INSTANCE_ID);
        resetContextStoreStates(COMMAND_MENU_PREVIOUS_COMPONENT_INSTANCE_ID);

        set(viewableRecordIdState, null);
        set(commandMenuPageState, CommandMenuPages.Root);
        set(commandMenuPageInfoState, {
          title: undefined,
          Icon: undefined,
          instanceId: '',
        });
        set(isCommandMenuOpenedState, false);
        set(commandMenuSearchState, '');
        set(commandMenuNavigationMorphItemByPageState, new Map());
        set(commandMenuNavigationRecordsState, []);
        set(commandMenuNavigationStackState, []);
        resetSelectedItem();
        set(hasUserSelectedCommandState, false);

        emitRightDrawerCloseEvent();
        set(isCommandMenuClosingState, false);
        set(
          activeTabIdComponentState.atomFamily({
            instanceId: WORKFLOW_SERVERLESS_FUNCTION_TAB_LIST_COMPONENT_ID,
          }),
          WorkflowServerlessFunctionTabId.CODE,
        );

        for (const [pageId, morphItem] of snapshot
          .getLoadable(commandMenuNavigationMorphItemByPageState)
          .getValue()) {
          set(
            activeTabIdComponentState.atomFamily({
              instanceId: getShowPageTabListComponentId({
                pageId,
                targetObjectId: morphItem.recordId,
              }),
            }),
            null,
          );
        }
      },
    [closeDropdown, resetContextStoreStates, resetSelectedItem],
  );

  return {
    commandMenuCloseAnimationCompleteCleanup,
  };
};
