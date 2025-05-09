import { RecordGroupContext } from '@twenty-modules/object-record/record-group/states/context/RecordGroupContext';
import { visibleRecordGroupIdsComponentFamilySelector } from '@twenty-modules/object-record/record-group/states/selectors/visibleRecordGroupIdsComponentFamilySelector';
import { recordIndexAllRecordIdsComponentSelector } from '@twenty-modules/object-record/record-index/states/selectors/recordIndexAllRecordIdsComponentSelector';
import { RecordTableRecordGroupBodyContextProvider } from '@twenty-modules/object-record/record-table/components/RecordTableRecordGroupBodyContextProvider';
import { RecordTableRecordGroupRows } from '@twenty-modules/object-record/record-table/components/RecordTableRecordGroupRows';
import { RecordTableBodyDroppable } from '@twenty-modules/object-record/record-table/record-table-body/components/RecordTableBodyDroppable';
import { RecordTableBodyLoading } from '@twenty-modules/object-record/record-table/record-table-body/components/RecordTableBodyLoading';
import { RecordTableBodyRecordGroupDragDropContextProvider } from '@twenty-modules/object-record/record-table/record-table-body/components/RecordTableBodyRecordGroupDragDropContextProvider';
import { RecordTableCellPortals } from '@twenty-modules/object-record/record-table/record-table-cell/components/RecordTableCellPortals';
import { RecordTableRecordGroupSection } from '@twenty-modules/object-record/record-table/record-table-section/components/RecordTableRecordGroupSection';
import { isRecordTableInitialLoadingComponentState } from '@twenty-modules/object-record/record-table/states/isRecordTableInitialLoadingComponentState';
import { useRecoilComponentFamilyValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentFamilyValueV2';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';
import { ViewType } from '@twenty-modules/views/types/ViewType';

export const RecordTableRecordGroupsBody = () => {
  const allRecordIds = useRecoilComponentValueV2(
    recordIndexAllRecordIdsComponentSelector,
  );

  const isRecordTableInitialLoading = useRecoilComponentValueV2(
    isRecordTableInitialLoadingComponentState,
  );

  const visibleRecordGroupIds = useRecoilComponentFamilyValueV2(
    visibleRecordGroupIdsComponentFamilySelector,
    ViewType.Table,
  );

  if (isRecordTableInitialLoading && allRecordIds.length === 0) {
    return <RecordTableBodyLoading />;
  }

  return (
    <>
      <RecordTableBodyRecordGroupDragDropContextProvider>
        {visibleRecordGroupIds.map((recordGroupId) => (
          <RecordTableRecordGroupBodyContextProvider
            key={recordGroupId}
            recordGroupId={recordGroupId}
          >
            <RecordGroupContext.Provider value={{ recordGroupId }}>
              <RecordTableBodyDroppable recordGroupId={recordGroupId}>
                <RecordTableRecordGroupSection />
                <RecordTableRecordGroupRows />
                <RecordTableCellPortals />
              </RecordTableBodyDroppable>
            </RecordGroupContext.Provider>
          </RecordTableRecordGroupBodyContextProvider>
        ))}
      </RecordTableBodyRecordGroupDragDropContextProvider>
    </>
  );
};
