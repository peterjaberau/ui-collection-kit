import { ActionModal } from '@twenty-modules/action-menu/actions/components/ActionModal';
import { useContextStoreObjectMetadataItemOrThrow } from '@twenty-modules/context-store/hooks/useContextStoreObjectMetadataItemOrThrow';
import { contextStoreCurrentViewIdComponentState } from '@twenty-modules/context-store/states/contextStoreCurrentViewIdComponentState';
import { contextStoreFiltersComponentState } from '@twenty-modules/context-store/states/contextStoreFiltersComponentState';
import { contextStoreTargetedRecordsRuleComponentState } from '@twenty-modules/context-store/states/contextStoreTargetedRecordsRuleComponentState';
import { computeContextStoreFilters } from '@twenty-modules/context-store/utils/computeContextStoreFilters';
import { DEFAULT_QUERY_PAGE_SIZE } from '@twenty-modules/object-record/constants/DefaultQueryPageSize';
import { useDeleteManyRecords } from '@twenty-modules/object-record/hooks/useDeleteManyRecords';
import { useLazyFetchAllRecords } from '@twenty-modules/object-record/hooks/useLazyFetchAllRecords';
import { useFilterValueDependencies } from '@twenty-modules/object-record/record-filter/hooks/useFilterValueDependencies';
import { useRecordTable } from '@twenty-modules/object-record/record-table/hooks/useRecordTable';
import { getRecordIndexIdFromObjectNamePluralAndViewId } from '@twenty-modules/object-record/utils/getRecordIndexIdFromObjectNamePluralAndViewId';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';
import { t } from '@lingui/core/macro';

export const DeleteMultipleRecordsAction = () => {
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

  const { deleteManyRecords } = useDeleteManyRecords({
    objectNameSingular: objectMetadataItem.nameSingular,
  });

  const contextStoreTargetedRecordsRule = useRecoilComponentValueV2(
    contextStoreTargetedRecordsRuleComponentState,
  );

  const contextStoreFilters = useRecoilComponentValueV2(
    contextStoreFiltersComponentState,
  );

  const { filterValueDependencies } = useFilterValueDependencies();

  const graphqlFilter = computeContextStoreFilters(
    contextStoreTargetedRecordsRule,
    contextStoreFilters,
    objectMetadataItem,
    filterValueDependencies,
  );

  const { fetchAllRecords: fetchAllRecordIds } = useLazyFetchAllRecords({
    objectNameSingular: objectMetadataItem.nameSingular,
    filter: graphqlFilter,
    limit: DEFAULT_QUERY_PAGE_SIZE,
    recordGqlFields: { id: true },
  });

  const handleDeleteClick = async () => {
    const recordsToDelete = await fetchAllRecordIds();
    const recordIdsToDelete = recordsToDelete.map((record) => record.id);

    resetTableRowSelection();

    await deleteManyRecords({
      recordIdsToDelete,
    });
  };

  return (
    <ActionModal
      title="Delete Records"
      subtitle={t`Are you sure you want to delete these records? They can be recovered from the Command menu.`}
      onConfirmClick={handleDeleteClick}
      confirmButtonText="Delete Records"
    />
  );
};
