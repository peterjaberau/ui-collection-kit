import { ActionMenuContext } from '@twenty-modules/action-menu/contexts/ActionMenuContext';
import { ActionMenuComponentInstanceContext } from '@twenty-modules/action-menu/states/contexts/ActionMenuComponentInstanceContext';
import { getActionMenuDropdownIdFromActionMenuId } from '@twenty-modules/action-menu/utils/getActionMenuDropdownIdFromActionMenuId';
import { getRightDrawerActionMenuDropdownIdFromActionMenuId } from '@twenty-modules/action-menu/utils/getRightDrawerActionMenuDropdownIdFromActionMenuId';
import { useCommandMenu } from '@twenty-modules/command-menu/hooks/useCommandMenu';
import { useDropdownV2 } from '@twenty-modules/ui/layout/dropdown/hooks/useDropdownV2';
import { useAvailableComponentInstanceIdOrThrow } from '@twenty-modules/ui/utilities/state/component-state/hooks/useAvailableComponentInstanceIdOrThrow';
import { useContext } from 'react';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const useCloseActionMenu = (preventCommandMenuClosing?: boolean) => {
  const { actionMenuType, isInRightDrawer } = useContext(ActionMenuContext);

  const { closeCommandMenu } = useCommandMenu();

  const { closeDropdown } = useDropdownV2();

  const actionMenuId = useAvailableComponentInstanceIdOrThrow(
    ActionMenuComponentInstanceContext,
  );

  const dropdownId = isInRightDrawer
    ? getRightDrawerActionMenuDropdownIdFromActionMenuId(actionMenuId)
    : getActionMenuDropdownIdFromActionMenuId(actionMenuId);

  const closeActionMenu = () => {
    if (actionMenuType === 'command-menu') {
      if (isDefined(preventCommandMenuClosing) && preventCommandMenuClosing) {
        return;
      }
      closeCommandMenu();
    }

    if (
      actionMenuType === 'index-page-action-menu-dropdown' ||
      actionMenuType === 'command-menu-show-page-action-menu-dropdown'
    ) {
      closeDropdown(dropdownId);
    }
  };

  return { closeActionMenu };
};
