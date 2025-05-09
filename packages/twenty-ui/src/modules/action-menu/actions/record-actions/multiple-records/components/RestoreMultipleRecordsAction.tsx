import { ActionModal } from '@twenty-modules/action-menu/actions/components/ActionModal';
import { useContextStoreObjectMetadataItemOrThrow } from '@twenty-modules/context-store/hooks/useContextStoreObjectMetadataItemOrThrow';
import { contextStoreCurrentViewIdComponentState } from '@twenty-modules/context-store/states/contextStoreCurrentViewIdComponentState';
import { contextStoreFiltersComponentState } from '@twenty-modules/context-store/states/contextStoreFiltersComponentState';
import { contextStoreTargetedRecordsRuleComponentState } from '@twenty-modules/context-store/states/contextStoreTargetedRecordsRuleComponentState';
import { computeContextStoreFilters } from '@twenty-modules/context-store/utils/computeContextStoreFilters';
import { DEFAULT_QUERY_PAGE_SIZE } from '@twenty-modules/object-record/constants/DefaultQueryPageSize';
import { RecordGqlOperationFilter } from '@twenty-modules/object-record/graphql/types/RecordGqlOperationFilter';
import { useLazyFetchAllRecords } from '@twenty-modules/object-record/hooks/useLazyFetchAllRecords';
import { useRestoreManyRecords } from '@twenty-modules/object-record/hooks/useRestoreManyRecords';
import { useFilterValueDependencies } from '@twenty-modules/object-record/record-filter/hooks/useFilterValueDependencies';
import { useRecordTable } from '@twenty-modules/object-record/record-table/hooks/useRecordTable';
import { getRecordIndexIdFromObjectNamePluralAndViewId } from '@twenty-modules/object-record/utils/getRecordIndexIdFromObjectNamePluralAndViewId';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';

export const RestoreMultipleRecordsAction = () => {
  const { objectMetadataItem } = useContextStoreObjectMetadataItemOrThrow();

  const contextStoreCurrentViewId = useRecoilComponentValueV2(
    contextStoreCurrentViewIdComponentState,
  );

  if (!contextStoreCurrentViewId) {
    throw new Error('Current view ID is not defined');
  }

  const { resetTableRowSelection } = useRecordTable({
    recordTableId: getRecordIndexIdFromObjectNamePluralAndViewId(
      objectMetadataItem.namePlural,
      contextStoreCurrentViewId,
    ),
  });

  const { restoreManyRecords } = useRestoreManyRecords({
    objectNameSingular: objectMetadataItem.nameSingular,
  });

  const contextStoreTargetedRecordsRule = useRecoilComponentValueV2(
    contextStoreTargetedRecordsRuleComponentState,
  );

  const contextStoreFilters = useRecoilComponentValueV2(
    contextStoreFiltersComponentState,
  );

  const { filterValueDependencies } = useFilterValueDependencies();

  const deletedAtFilter: RecordGqlOperationFilter = {
    deletedAt: { is: 'NOT_NULL' },
  };

  const graphqlFilter = {
    ...computeContextStoreFilters(
      contextStoreTargetedRecordsRule,
      contextStoreFilters,
      objectMetadataItem,
      filterValueDependencies,
    ),
    ...deletedAtFilter,
  };

  const { fetchAllRecords: fetchAllRecordIds } = useLazyFetchAllRecords({
    objectNameSingular: objectMetadataItem.nameSingular,
    filter: graphqlFilter,
    limit: DEFAULT_QUERY_PAGE_SIZE,
    recordGqlFields: { id: true },
  });

  const handleRestoreClick = async () => {
    const recordsToRestore = await fetchAllRecordIds();
    const recordIdsToRestore = recordsToRestore.map((record) => record.id);

    resetTableRowSelection();

    await restoreManyRecords({
      idsToRestore: recordIdsToRestore,
    });
  };

  return (
    <ActionModal
      title="Restore Records"
      subtitle="Are you sure you want to restore these records?"
      onConfirmClick={handleRestoreClick}
      confirmButtonText="Restore Records"
      confirmButtonAccent="default"
    />
  );
};
