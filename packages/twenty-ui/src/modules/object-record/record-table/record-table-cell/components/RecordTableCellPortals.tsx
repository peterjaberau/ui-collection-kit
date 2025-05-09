import { useRecordTableContextOrThrow } from '@twenty-modules/object-record/record-table/contexts/RecordTableContext';
import { RecordTableCellEditModePortal } from '@twenty-modules/object-record/record-table/record-table-cell/components/RecordTableCellEditModePortal';
import { RecordTableCellHoveredPortal } from '@twenty-modules/object-record/record-table/record-table-cell/components/RecordTableCellHoveredPortal';
import { isRecordTableFocusActiveComponentState } from '@twenty-modules/object-record/record-table/states/isRecordTableFocusActiveComponentState';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';

export const RecordTableCellPortals = () => {
  const { recordTableId } = useRecordTableContextOrThrow();

  const isRecordTableFocusActive = useRecoilComponentValueV2(
    isRecordTableFocusActiveComponentState,
    recordTableId,
  );

  return (
    <>
      <RecordTableCellHoveredPortal />

      {isRecordTableFocusActive && <RecordTableCellEditModePortal />}
    </>
  );
};
