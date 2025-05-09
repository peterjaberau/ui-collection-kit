import { Key } from 'ts-key-enum';

import { useRecordTableContextOrThrow } from '@twenty-modules/object-record/record-table/contexts/RecordTableContext';
import { useRecordTable } from '@twenty-modules/object-record/record-table/hooks/useRecordTable';
import { TableHotkeyScope } from '@twenty-modules/object-record/record-table/types/TableHotkeyScope';
import { useScopedHotkeys } from '@twenty-modules/ui/utilities/hotkey/hooks/useScopedHotkeys';

export const RecordTableBodyEscapeHotkeyEffect = () => {
  const { recordTableId } = useRecordTableContextOrThrow();

  const { resetTableRowSelection } = useRecordTable({
    recordTableId,
  });

  useScopedHotkeys(
    [Key.Escape],
    () => {
      resetTableRowSelection();
    },
    TableHotkeyScope.Table,
  );

  return <></>;
};
