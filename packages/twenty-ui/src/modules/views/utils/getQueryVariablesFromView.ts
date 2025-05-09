import { FieldMetadataItem } from '@twenty-modules/object-metadata/types/FieldMetadataItem';
import { ObjectMetadataItem } from '@twenty-modules/object-metadata/types/ObjectMetadataItem';

import { turnSortsIntoOrderBy } from '@twenty-modules/object-record/object-sort-dropdown/utils/turnSortsIntoOrderBy';
import { RecordFilterValueDependencies } from '@twenty-modules/object-record/record-filter/types/RecordFilterValueDependencies';

import { computeRecordGqlOperationFilter } from '@twenty-modules/object-record/record-filter/utils/computeViewRecordGqlOperationFilter';
import { View } from '@twenty-modules/views/types/View';
import { mapViewFilterGroupsToRecordFilterGroups } from '@twenty-modules/views/utils/mapViewFilterGroupsToRecordFilterGroups';
import { mapViewFiltersToFilters } from '@twenty-modules/views/utils/mapViewFiltersToFilters';
import { mapViewSortsToSorts } from '@twenty-modules/views/utils/mapViewSortsToSorts';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const getQueryVariablesFromView = ({
  view,
  fieldMetadataItems,
  objectMetadataItem,
  filterValueDependencies,
}: {
  view: View | null | undefined;
  fieldMetadataItems: FieldMetadataItem[];
  objectMetadataItem: ObjectMetadataItem;
  filterValueDependencies: RecordFilterValueDependencies;
}) => {
  if (!isDefined(view)) {
    return {
      filter: undefined,
      orderBy: undefined,
    };
  }

  const { viewFilterGroups, viewFilters, viewSorts } = view;

  const recordFilterGroups = mapViewFilterGroupsToRecordFilterGroups(
    viewFilterGroups ?? [],
  );

  const recordFilters = mapViewFiltersToFilters(
    viewFilters,
    fieldMetadataItems,
  );

  const filter = computeRecordGqlOperationFilter({
    fields: objectMetadataItem?.fields ?? [],
    filterValueDependencies,
    recordFilterGroups,
    recordFilters,
  });

  const orderBy = turnSortsIntoOrderBy(
    objectMetadataItem,
    mapViewSortsToSorts(viewSorts),
  );

  return {
    filter,
    orderBy,
  };
};
