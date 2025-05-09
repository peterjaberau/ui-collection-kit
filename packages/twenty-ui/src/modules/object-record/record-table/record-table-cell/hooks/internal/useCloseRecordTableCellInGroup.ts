import { useRecoilCallback } from 'recoil';

import { FOCUS_CLICK_OUTSIDE_LISTENER_ID } from '@twenty-modules/object-record/record-table/constants/FocusClickOutsideListenerId';
import { useDragSelect } from '@twenty-modules/ui/utilities/drag-select/hooks/useDragSelect';
import { useSetHotkeyScope } from '@twenty-modules/ui/utilities/hotkey/hooks/useSetHotkeyScope';
import { useClickOutsideListener } from '@twenty-modules/ui/utilities/pointer-event/hooks/useClickOutsideListener';

import { useRecordTableContextOrThrow } from '@twenty-modules/object-record/record-table/contexts/RecordTableContext';
import { useCloseCurrentTableCellInEditMode } from '@twenty-modules/object-record/record-table/hooks/internal/useCloseCurrentTableCellInEditMode';
import { TableHotkeyScope } from '@twenty-modules/object-record/record-table/types/TableHotkeyScope';

export const useCloseRecordTableCellInGroup = () => {
  const { recordTableId } = useRecordTableContextOrThrow();

  const setHotkeyScope = useSetHotkeyScope();
  const { setDragSelectionStartEnabled } = useDragSelect();

  const { toggleClickOutside } = useClickOutsideListener(
    FOCUS_CLICK_OUTSIDE_LISTENER_ID,
  );

  const closeCurrentTableCellInEditMode =
    useCloseCurrentTableCellInEditMode(recordTableId);

  const closeTableCellInGroup = useRecoilCallback(
    () => () => {
      toggleClickOutside(true);
      setDragSelectionStartEnabled(true);
      closeCurrentTableCellInEditMode();
      setHotkeyScope(TableHotkeyScope.TableFocus);
    },
    [
      closeCurrentTableCellInEditMode,
      setDragSelectionStartEnabled,
      setHotkeyScope,
      toggleClickOutside,
    ],
  );

  return {
    closeTableCellInGroup,
  };
};
