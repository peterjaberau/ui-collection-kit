import { ActionComponent } from '@twenty-modules/action-menu/actions/display/components/ActionComponent';
import { ActionScope } from '@twenty-modules/action-menu/actions/types/ActionScope';
import { ActionMenuContext } from '@twenty-modules/action-menu/contexts/ActionMenuContext';
import { ActionMenuComponentInstanceContext } from '@twenty-modules/action-menu/states/contexts/ActionMenuComponentInstanceContext';
import { CommandMenuActionMenuDropdownHotkeyScope } from '@twenty-modules/action-menu/types/CommandMenuActionMenuDropdownHotkeyScope';
import { getRightDrawerActionMenuDropdownIdFromActionMenuId } from '@twenty-modules/action-menu/utils/getRightDrawerActionMenuDropdownIdFromActionMenuId';
import { Dropdown } from '@twenty-modules/ui/layout/dropdown/components/Dropdown';
import { DropdownMenuItemsContainer } from '@twenty-modules/ui/layout/dropdown/components/DropdownMenuItemsContainer';
import { useDropdownV2 } from '@twenty-modules/ui/layout/dropdown/hooks/useDropdownV2';
import { SelectableList } from '@twenty-modules/ui/layout/selectable-list/components/SelectableList';
import { useSelectableList } from '@twenty-modules/ui/layout/selectable-list/hooks/useSelectableList';
import { useScopedHotkeys } from '@twenty-modules/ui/utilities/hotkey/hooks/useScopedHotkeys';
import { AppHotkeyScope } from '@twenty-modules/ui/utilities/hotkey/types/AppHotkeyScope';
import { useAvailableComponentInstanceIdOrThrow } from '@twenty-modules/ui/utilities/state/component-state/hooks/useAvailableComponentInstanceIdOrThrow';
import { useTheme } from '@emotion/react';
import { useContext } from 'react';
import { Button } from '@twenty-ui/input';
import { getOsControlSymbol } from '@twenty-ui/utilities';

export const CommandMenuActionMenuDropdown = () => {
  const { actions } = useContext(ActionMenuContext);

  const actionMenuId = useAvailableComponentInstanceIdOrThrow(
    ActionMenuComponentInstanceContext,
  );

  const { toggleDropdown } = useDropdownV2();

  const theme = useTheme();

  useScopedHotkeys(
    ['ctrl+o,meta+o'],
    () => {
      toggleDropdown(
        getRightDrawerActionMenuDropdownIdFromActionMenuId(actionMenuId),
        {
          scope:
            CommandMenuActionMenuDropdownHotkeyScope.CommandMenuActionMenuDropdown,
        },
      );
    },
    AppHotkeyScope.CommandMenuOpen,
    [toggleDropdown],
  );

  const recordSelectionActions = actions.filter(
    (action) => action.scope === ActionScope.RecordSelection,
  );

  const selectableItemIdArray = recordSelectionActions.map(
    (action) => action.key,
  );

  const { setSelectedItemId } = useSelectableList(actionMenuId);

  return (
    <Dropdown
      dropdownId={getRightDrawerActionMenuDropdownIdFromActionMenuId(
        actionMenuId,
      )}
      dropdownHotkeyScope={{
        scope:
          CommandMenuActionMenuDropdownHotkeyScope.CommandMenuActionMenuDropdown,
      }}
      data-select-disable
      clickableComponent={
        <Button title="Options" hotkeys={[getOsControlSymbol(), 'O']} />
      }
      dropdownPlacement="top-end"
      dropdownOffset={{ y: parseInt(theme.spacing(2), 10) }}
      onOpen={() => {
        setSelectedItemId(selectableItemIdArray[0]);
      }}
      dropdownComponents={
        <DropdownMenuItemsContainer>
          <SelectableList
            selectableListInstanceId={actionMenuId}
            hotkeyScope={
              CommandMenuActionMenuDropdownHotkeyScope.CommandMenuActionMenuDropdown
            }
            selectableItemIdArray={selectableItemIdArray}
          >
            {recordSelectionActions.map((action) => (
              <ActionComponent action={action} key={action.key} />
            ))}
          </SelectableList>
        </DropdownMenuItemsContainer>
      }
    />
  );
};
