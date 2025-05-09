import { useObjectMetadataItem } from '@twenty-modules/object-metadata/hooks/useObjectMetadataItem';
import { turnSortsIntoOrderBy } from '@twenty-modules/object-record/object-sort-dropdown/utils/turnSortsIntoOrderBy';
import { currentRecordFilterGroupsComponentState } from '@twenty-modules/object-record/record-filter-group/states/currentRecordFilterGroupsComponentState';
import { useFilterValueDependencies } from '@twenty-modules/object-record/record-filter/hooks/useFilterValueDependencies';
import { currentRecordFiltersComponentState } from '@twenty-modules/object-record/record-filter/states/currentRecordFiltersComponentState';
import { computeRecordGqlOperationFilter } from '@twenty-modules/object-record/record-filter/utils/computeViewRecordGqlOperationFilter';
import { useCurrentRecordGroupDefinition } from '@twenty-modules/object-record/record-group/hooks/useCurrentRecordGroupDefinition';
import { useRecordGroupFilter } from '@twenty-modules/object-record/record-group/hooks/useRecordGroupFilter';
import { currentRecordSortsComponentState } from '@twenty-modules/object-record/record-sort/states/currentRecordSortsComponentState';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';

export const useFindManyRecordIndexTableParams = (
  objectNameSingular: string,
) => {
  const { objectMetadataItem } = useObjectMetadataItem({
    objectNameSingular,
  });

  const { recordGroupFilter } = useRecordGroupFilter(
    objectMetadataItem?.fields,
  );

  const currentRecordGroupDefinition = useCurrentRecordGroupDefinition();

  const currentRecordFilterGroups = useRecoilComponentValueV2(
    currentRecordFilterGroupsComponentState,
  );

  const currentRecordSorts = useRecoilComponentValueV2(
    currentRecordSortsComponentState,
  );

  const currentRecordFilters = useRecoilComponentValueV2(
    currentRecordFiltersComponentState,
  );

  const { filterValueDependencies } = useFilterValueDependencies();

  const stateFilter = computeRecordGqlOperationFilter({
    fields: objectMetadataItem?.fields ?? [],
    filterValueDependencies,
    recordFilterGroups: currentRecordFilterGroups,
    recordFilters: currentRecordFilters,
  });

  const orderBy = turnSortsIntoOrderBy(objectMetadataItem, currentRecordSorts);

  return {
    objectNameSingular,
    filter: {
      ...stateFilter,
      ...recordGroupFilter,
    },
    orderBy,
    // If we have a current record group definition, we only want to fetch 8 records by page
    ...(currentRecordGroupDefinition ? { limit: 8 } : {}),
  };
};
