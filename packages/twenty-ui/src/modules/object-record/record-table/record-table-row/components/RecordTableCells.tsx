import { useRecordTableRowContextOrThrow } from '@twenty-modules/object-record/record-table/contexts/RecordTableRowContext';
import { useRecordTableRowDraggableContextOrThrow } from '@twenty-modules/object-record/record-table/contexts/RecordTableRowDraggableContext';
import { RecordTableCellsEmpty } from '@twenty-modules/object-record/record-table/record-table-row/components/RecordTableCellsEmpty';
import { RecordTableCellsVisible } from '@twenty-modules/object-record/record-table/record-table-row/components/RecordTableCellsVisible';

export const RecordTableCells = () => {
  const { inView } = useRecordTableRowContextOrThrow();

  const { isDragging } = useRecordTableRowDraggableContextOrThrow();

  const areCellsVisible = inView || isDragging;

  return areCellsVisible ? (
    <RecordTableCellsVisible />
  ) : (
    <RecordTableCellsEmpty />
  );
};
