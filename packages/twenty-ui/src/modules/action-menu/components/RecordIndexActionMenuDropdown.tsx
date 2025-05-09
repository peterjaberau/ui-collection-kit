import { ActionComponent } from '@twenty-modules/action-menu/actions/display/components/ActionComponent';
import { ActionScope } from '@twenty-modules/action-menu/actions/types/ActionScope';
import { ActionType } from '@twenty-modules/action-menu/actions/types/ActionType';
import { ActionMenuContext } from '@twenty-modules/action-menu/contexts/ActionMenuContext';
import { ActionMenuComponentInstanceContext } from '@twenty-modules/action-menu/states/contexts/ActionMenuComponentInstanceContext';
import { recordIndexActionMenuDropdownPositionComponentState } from '@twenty-modules/action-menu/states/recordIndexActionMenuDropdownPositionComponentState';
import { ActionMenuDropdownHotkeyScope } from '@twenty-modules/action-menu/types/ActionMenuDropdownHotKeyScope';
import { getActionMenuDropdownIdFromActionMenuId } from '@twenty-modules/action-menu/utils/getActionMenuDropdownIdFromActionMenuId';
import { useCommandMenu } from '@twenty-modules/command-menu/hooks/useCommandMenu';
import { Dropdown } from '@twenty-modules/ui/layout/dropdown/components/Dropdown';
import { DropdownMenuItemsContainer } from '@twenty-modules/ui/layout/dropdown/components/DropdownMenuItemsContainer';
import { useDropdownV2 } from '@twenty-modules/ui/layout/dropdown/hooks/useDropdownV2';
import { SelectableList } from '@twenty-modules/ui/layout/selectable-list/components/SelectableList';
import { SelectableListItem } from '@twenty-modules/ui/layout/selectable-list/components/SelectableListItem';
import { selectedItemIdComponentState } from '@twenty-modules/ui/layout/selectable-list/states/selectedItemIdComponentState';
import { useAvailableComponentInstanceIdOrThrow } from '@twenty-modules/ui/utilities/state/component-state/hooks/useAvailableComponentInstanceIdOrThrow';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';
import { extractComponentState } from '@twenty-modules/ui/utilities/state/component-state/utils/extractComponentState';
import styled from '@emotion/styled';
import { useContext } from 'react';
import { useRecoilValue } from 'recoil';
import { IconLayoutSidebarRightExpand } from '@twenty-ui/display';
import { MenuItem } from '@twenty-ui/navigation';

const StyledDropdownMenuContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const RecordIndexActionMenuDropdown = () => {
  const { actions } = useContext(ActionMenuContext);

  const recordIndexActions = actions.filter(
    (action) =>
      action.type === ActionType.Standard &&
      action.scope === ActionScope.RecordSelection,
  );

  const actionMenuId = useAvailableComponentInstanceIdOrThrow(
    ActionMenuComponentInstanceContext,
  );

  const dropdownId = getActionMenuDropdownIdFromActionMenuId(actionMenuId);
  const { closeDropdown } = useDropdownV2();

  const actionMenuDropdownPosition = useRecoilValue(
    extractComponentState(
      recordIndexActionMenuDropdownPositionComponentState,
      dropdownId,
    ),
  );

  const { openCommandMenu } = useCommandMenu();

  const selectedItemIdArray = [
    ...recordIndexActions.map((action) => action.key),
    'more-actions',
  ];

  const selectedItemId = useRecoilComponentValueV2(
    selectedItemIdComponentState,
    dropdownId,
  );

  return (
    <Dropdown
      dropdownId={dropdownId}
      dropdownHotkeyScope={{
        scope: ActionMenuDropdownHotkeyScope.ActionMenuDropdown,
      }}
      data-select-disable
      dropdownPlacement="bottom-start"
      dropdownStrategy="absolute"
      dropdownOffset={{
        x: actionMenuDropdownPosition.x ?? 0,
        y: actionMenuDropdownPosition.y ?? 0,
      }}
      dropdownComponents={
        <StyledDropdownMenuContainer className="action-menu-dropdown">
          <DropdownMenuItemsContainer>
            <SelectableList
              hotkeyScope={ActionMenuDropdownHotkeyScope.ActionMenuDropdown}
              selectableItemIdArray={selectedItemIdArray}
              selectableListInstanceId={dropdownId}
            >
              {recordIndexActions.map((action) => (
                <ActionComponent action={action} key={action.key} />
              ))}
              <SelectableListItem
                itemId="more-actions"
                key="more-actions"
                onEnter={() => {
                  closeDropdown(dropdownId);
                  openCommandMenu();
                }}
              >
                <MenuItem
                  LeftIcon={IconLayoutSidebarRightExpand}
                  onClick={() => {
                    closeDropdown(dropdownId);
                    openCommandMenu();
                  }}
                  focused={selectedItemId === 'more-actions'}
                  text="More actions"
                />
              </SelectableListItem>
            </SelectableList>
          </DropdownMenuItemsContainer>
        </StyledDropdownMenuContainer>
      }
    />
  );
};
