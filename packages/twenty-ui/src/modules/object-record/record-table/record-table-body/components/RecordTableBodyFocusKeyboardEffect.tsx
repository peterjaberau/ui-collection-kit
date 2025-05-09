import { useRecordTableContextOrThrow } from '@twenty-modules/object-record/record-table/contexts/RecordTableContext';
import { useRecordTable } from '@twenty-modules/object-record/record-table/hooks/useRecordTable';

export const RecordTableBodyFocusKeyboardEffect = () => {
  const { recordTableId } = useRecordTableContextOrThrow();

  const { useMapKeyboardToFocus } = useRecordTable({
    recordTableId,
  });

  useMapKeyboardToFocus();

  return <></>;
};
