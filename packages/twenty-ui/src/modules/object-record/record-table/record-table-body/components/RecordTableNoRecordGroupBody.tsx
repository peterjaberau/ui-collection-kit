import { recordIndexAllRecordIdsComponentSelector } from '@twenty-modules/object-record/record-index/states/selectors/recordIndexAllRecordIdsComponentSelector';
import { RecordTableNoRecordGroupBodyContextProvider } from '@twenty-modules/object-record/record-table/components/RecordTableNoRecordGroupBodyContextProvider';
import { RecordTableNoRecordGroupRows } from '@twenty-modules/object-record/record-table/components/RecordTableNoRecordGroupRows';
import { RecordTableBodyDragDropContextProvider } from '@twenty-modules/object-record/record-table/record-table-body/components/RecordTableBodyDragDropContextProvider';
import { RecordTableBodyDroppable } from '@twenty-modules/object-record/record-table/record-table-body/components/RecordTableBodyDroppable';
import { RecordTableBodyLoading } from '@twenty-modules/object-record/record-table/record-table-body/components/RecordTableBodyLoading';
import { RecordTableCellPortals } from '@twenty-modules/object-record/record-table/record-table-cell/components/RecordTableCellPortals';
import { isRecordTableInitialLoadingComponentState } from '@twenty-modules/object-record/record-table/states/isRecordTableInitialLoadingComponentState';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';

export const RecordTableNoRecordGroupBody = () => {
  const allRecordIds = useRecoilComponentValueV2(
    recordIndexAllRecordIdsComponentSelector,
  );

  const isRecordTableInitialLoading = useRecoilComponentValueV2(
    isRecordTableInitialLoadingComponentState,
  );

  if (isRecordTableInitialLoading && allRecordIds.length === 0) {
    return <RecordTableBodyLoading />;
  }

  return (
    <RecordTableNoRecordGroupBodyContextProvider>
      <RecordTableBodyDragDropContextProvider>
        <RecordTableBodyDroppable>
          <RecordTableNoRecordGroupRows />
          <RecordTableCellPortals />
        </RecordTableBodyDroppable>
      </RecordTableBodyDragDropContextProvider>
    </RecordTableNoRecordGroupBodyContextProvider>
  );
};
