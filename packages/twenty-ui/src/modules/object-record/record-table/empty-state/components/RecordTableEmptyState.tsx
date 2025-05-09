import { useFindManyRecords } from '@twenty-modules/object-record/hooks/useFindManyRecords';
import { useRecordTableContextOrThrow } from '@twenty-modules/object-record/record-table/contexts/RecordTableContext';
import { RecordTableEmptyStateNoGroupNoRecordAtAll } from '@twenty-modules/object-record/record-table/empty-state/components/RecordTableEmptyStateNoGroupNoRecordAtAll';
import { RecordTableEmptyStateNoRecordFoundForFilter } from '@twenty-modules/object-record/record-table/empty-state/components/RecordTableEmptyStateNoRecordFoundForFilter';
import { RecordTableEmptyStateReadOnly } from '@twenty-modules/object-record/record-table/empty-state/components/RecordTableEmptyStateReadOnly';
import { RecordTableEmptyStateRemote } from '@twenty-modules/object-record/record-table/empty-state/components/RecordTableEmptyStateRemote';
import { RecordTableEmptyStateSoftDelete } from '@twenty-modules/object-record/record-table/empty-state/components/RecordTableEmptyStateSoftDelete';
import { isSoftDeleteFilterActiveComponentState } from '@twenty-modules/object-record/record-table/states/isSoftDeleteFilterActiveComponentState';
import { useHasObjectReadOnlyPermission } from '@twenty-modules/settings/roles/hooks/useHasObjectReadOnlyPermission';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';

export const RecordTableEmptyState = () => {
  const { recordTableId, objectNameSingular, objectMetadataItem } =
    useRecordTableContextOrThrow();

  const hasObjectReadOnlyPermission = useHasObjectReadOnlyPermission();

  const { totalCount } = useFindManyRecords({ objectNameSingular, limit: 1 });
  const noRecordAtAll = totalCount === 0;

  const isRemote = objectMetadataItem.isRemote;

  const isSoftDeleteActive = useRecoilComponentValueV2(
    isSoftDeleteFilterActiveComponentState,
    recordTableId,
  );

  if (hasObjectReadOnlyPermission) {
    return <RecordTableEmptyStateReadOnly />;
  }

  if (isRemote) {
    return <RecordTableEmptyStateRemote />;
  } else if (isSoftDeleteActive === true) {
    return <RecordTableEmptyStateSoftDelete />;
  } else if (noRecordAtAll) {
    return <RecordTableEmptyStateNoGroupNoRecordAtAll />;
  } else {
    return <RecordTableEmptyStateNoRecordFoundForFilter />;
  }
};
