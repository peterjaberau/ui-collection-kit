import { recordIndexAllRecordIdsComponentSelector } from '@twenty-modules/object-record/record-index/states/selectors/recordIndexAllRecordIdsComponentSelector';
import { RecordTableEmptyState } from '@twenty-modules/object-record/record-table/empty-state/components/RecordTableEmptyState';
import { isRecordTableInitialLoadingComponentState } from '@twenty-modules/object-record/record-table/states/isRecordTableInitialLoadingComponentState';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';

type RecordTableEmptyHandlerProps = {
  recordTableId: string;
  children: React.ReactNode;
};

export const RecordTableEmptyHandler = ({
  recordTableId,
  children,
}: RecordTableEmptyHandlerProps) => {
  const isRecordTableInitialLoading = useRecoilComponentValueV2(
    isRecordTableInitialLoadingComponentState,
    recordTableId,
  );

  const allRecordIds = useRecoilComponentValueV2(
    recordIndexAllRecordIdsComponentSelector,
    recordTableId,
  );

  const recordTableIsEmpty =
    !isRecordTableInitialLoading && allRecordIds.length === 0;

  if (recordTableIsEmpty) {
    return <RecordTableEmptyState />;
  }

  return children;
};
