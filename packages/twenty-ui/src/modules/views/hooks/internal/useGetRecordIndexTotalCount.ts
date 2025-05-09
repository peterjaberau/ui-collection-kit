import { useContextStoreObjectMetadataItemOrThrow } from '@twenty-modules/context-store/hooks/useContextStoreObjectMetadataItemOrThrow';
import { useAggregateRecords } from '@twenty-modules/object-record/hooks/useAggregateRecords';
import { currentRecordFilterGroupsComponentState } from '@twenty-modules/object-record/record-filter-group/states/currentRecordFilterGroupsComponentState';
import { useFilterValueDependencies } from '@twenty-modules/object-record/record-filter/hooks/useFilterValueDependencies';
import { currentRecordFiltersComponentState } from '@twenty-modules/object-record/record-filter/states/currentRecordFiltersComponentState';
import { computeRecordGqlOperationFilter } from '@twenty-modules/object-record/record-filter/utils/computeViewRecordGqlOperationFilter';
import { AGGREGATE_OPERATIONS } from '@twenty-modules/object-record/record-table/constants/AggregateOperations';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';
import { useGetViewGroupsFilters } from '@twenty-modules/views/hooks/useGetViewGroupsFilters';

export const useGetRecordIndexTotalCount = () => {
  const { objectMetadataItem } = useContextStoreObjectMetadataItemOrThrow();

  const currentRecordFilterGroups = useRecoilComponentValueV2(
    currentRecordFilterGroupsComponentState,
  );

  const currentRecordFilters = useRecoilComponentValueV2(
    currentRecordFiltersComponentState,
  );

  const { filterValueDependencies } = useFilterValueDependencies();

  const recordGroupsVisibilityFilter = useGetViewGroupsFilters();

  const filter = computeRecordGqlOperationFilter({
    filterValueDependencies,
    recordFilters: [...currentRecordFilters, ...recordGroupsVisibilityFilter],
    recordFilterGroups: currentRecordFilterGroups,
    fields: objectMetadataItem.fields,
  });

  const { data, loading } = useAggregateRecords<{
    id: { COUNT: number };
  }>({
    objectNameSingular: objectMetadataItem.nameSingular,
    filter,
    recordGqlFieldsAggregate: {
      id: [AGGREGATE_OPERATIONS.count],
    },
  });

  const totalCount = data?.id?.COUNT;

  return {
    totalCount,
    loading,
  };
};
