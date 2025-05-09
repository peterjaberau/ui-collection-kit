import { useRecordIndexContextOrThrow } from '@twenty-modules/object-record/record-index/contexts/RecordIndexContext';
import { RecordValueSetterEffect } from '@twenty-modules/object-record/record-store/components/RecordValueSetterEffect';
import { RecordTableCellCheckbox } from '@twenty-modules/object-record/record-table/record-table-cell/components/RecordTableCellCheckbox';
import { RecordTableCellGrip } from '@twenty-modules/object-record/record-table/record-table-cell/components/RecordTableCellGrip';
import { RecordTableLastEmptyCell } from '@twenty-modules/object-record/record-table/record-table-cell/components/RecordTableLastEmptyCell';
import { RecordTableCells } from '@twenty-modules/object-record/record-table/record-table-row/components/RecordTableCells';
import { RecordTableDraggableTr } from '@twenty-modules/object-record/record-table/record-table-row/components/RecordTableDraggableTr';
import { ListenRecordUpdatesEffect } from '@twenty-modules/subscription/components/ListenUpdatesEffect';
import { getDefaultRecordFieldsToListen } from '@twenty-modules/subscription/utils/getDefaultRecordFieldsToListen.util';

type RecordTableRowProps = {
  recordId: string;
  rowIndexForFocus: number;
  rowIndexForDrag: number;
};

export const RecordTableRow = ({
  recordId,
  rowIndexForFocus,
  rowIndexForDrag,
}: RecordTableRowProps) => {
  const { objectNameSingular } = useRecordIndexContextOrThrow();
  const listenedFields = getDefaultRecordFieldsToListen({
    objectNameSingular,
  });

  return (
    <RecordTableDraggableTr
      recordId={recordId}
      draggableIndex={rowIndexForDrag}
      focusIndex={rowIndexForFocus}
    >
      <RecordTableCellGrip />
      <RecordTableCellCheckbox />
      <RecordTableCells />
      <RecordTableLastEmptyCell />
      <RecordValueSetterEffect recordId={recordId} />
      <ListenRecordUpdatesEffect
        objectNameSingular={objectNameSingular}
        recordId={recordId}
        listenedFields={listenedFields}
      />
    </RecordTableDraggableTr>
  );
};
