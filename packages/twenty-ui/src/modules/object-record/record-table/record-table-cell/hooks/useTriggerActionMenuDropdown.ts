import { useRecoilCallback } from 'recoil';

import { ActionMenuComponentInstanceContext } from '@twenty-modules/action-menu/states/contexts/ActionMenuComponentInstanceContext';
import { recordIndexActionMenuDropdownPositionComponentState } from '@twenty-modules/action-menu/states/recordIndexActionMenuDropdownPositionComponentState';
import { ActionMenuDropdownHotkeyScope } from '@twenty-modules/action-menu/types/ActionMenuDropdownHotKeyScope';
import { getActionMenuDropdownIdFromActionMenuId } from '@twenty-modules/action-menu/utils/getActionMenuDropdownIdFromActionMenuId';
import { useCommandMenu } from '@twenty-modules/command-menu/hooks/useCommandMenu';
import { isRowSelectedComponentFamilyState } from '@twenty-modules/object-record/record-table/record-table-row/states/isRowSelectedComponentFamilyState';
import { useDropdown } from '@twenty-modules/ui/layout/dropdown/hooks/useDropdown';
import { getSnapshotValue } from '@twenty-modules/ui/utilities/recoil-scope/utils/getSnapshotValue';
import { useAvailableComponentInstanceIdOrThrow } from '@twenty-modules/ui/utilities/state/component-state/hooks/useAvailableComponentInstanceIdOrThrow';
import { useRecoilComponentCallbackStateV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentCallbackStateV2';
import { extractComponentState } from '@twenty-modules/ui/utilities/state/component-state/utils/extractComponentState';
export const useTriggerActionMenuDropdown = ({
  recordTableId,
}: {
  recordTableId: string;
}) => {
  const actionMenuInstanceId = useAvailableComponentInstanceIdOrThrow(
    ActionMenuComponentInstanceContext,
  );

  const isRowSelectedFamilyState = useRecoilComponentCallbackStateV2(
    isRowSelectedComponentFamilyState,
    recordTableId,
  );

  const actionMenuDropdownId =
    getActionMenuDropdownIdFromActionMenuId(actionMenuInstanceId);

  const recordIndexActionMenuDropdownPositionState = extractComponentState(
    recordIndexActionMenuDropdownPositionComponentState,
    actionMenuDropdownId,
  );

  const { openDropdown } = useDropdown(actionMenuDropdownId);

  const { closeCommandMenu } = useCommandMenu();

  const triggerActionMenuDropdown = useRecoilCallback(
    ({ set, snapshot }) =>
      (event: React.MouseEvent, recordId: string) => {
        event.preventDefault();

        set(recordIndexActionMenuDropdownPositionState, {
          x: event.pageX,
          y: event.pageY,
        });

        const isRowSelected = getSnapshotValue(
          snapshot,
          isRowSelectedFamilyState(recordId),
        );

        if (isRowSelected !== true) {
          set(isRowSelectedFamilyState(recordId), true);
        }

        closeCommandMenu();

        openDropdown({
          scope: ActionMenuDropdownHotkeyScope.ActionMenuDropdown,
        });
      },
    [
      recordIndexActionMenuDropdownPositionState,
      isRowSelectedFamilyState,
      closeCommandMenu,
      openDropdown,
    ],
  );

  return { triggerActionMenuDropdown };
};
