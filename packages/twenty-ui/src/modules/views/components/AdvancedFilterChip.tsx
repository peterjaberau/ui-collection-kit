import { useObjectMetadataItems } from '@twenty-modules/object-metadata/hooks/useObjectMetadataItems';
import { useChildRecordFiltersAndRecordFilterGroups } from '@twenty-modules/object-record/advanced-filter/hooks/useChildRecordFiltersAndRecordFilterGroups';
import { rootLevelRecordFilterGroupComponentSelector } from '@twenty-modules/object-record/advanced-filter/states/rootLevelRecordFilterGroupComponentSelector';
import { useRemoveRecordFilterGroup } from '@twenty-modules/object-record/record-filter-group/hooks/useRemoveRecordFilterGroup';
import { useRemoveRootRecordFilterGroupIfEmpty } from '@twenty-modules/object-record/record-filter-group/hooks/useRemoveRootRecordFilterGroupIfEmpty';
import { currentRecordFilterGroupsComponentState } from '@twenty-modules/object-record/record-filter-group/states/currentRecordFilterGroupsComponentState';

import { SOFT_DELETE_FILTER_FIELD_NAME } from '@twenty-modules/object-record/record-filter/constants/SoftDeleteFilterFieldName';
import { useRemoveRecordFilter } from '@twenty-modules/object-record/record-filter/hooks/useRemoveRecordFilter';
import { currentRecordFiltersComponentState } from '@twenty-modules/object-record/record-filter/states/currentRecordFiltersComponentState';
import { getAllRecordFilterDescendantsOfRecordFilterGroup } from '@twenty-modules/object-record/record-filter/utils/getAllRecordFilterDescendantsOfRecordFilterGroup';
import { useDropdown } from '@twenty-modules/ui/layout/dropdown/hooks/useDropdown';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';
import { SortOrFilterChip } from '@twenty-modules/views/components/SortOrFilterChip';
import { ADVANCED_FILTER_DROPDOWN_ID } from '@twenty-modules/views/constants/AdvancedFilterDropdownId';
import { plural } from 'pluralize';
import { useMemo } from 'react';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';
import { IconFilter } from '@twenty-ui/display';

export const AdvancedFilterChip = () => {
  const { closeDropdown } = useDropdown(ADVANCED_FILTER_DROPDOWN_ID);

  const currentRecordFilterGroups = useRecoilComponentValueV2(
    currentRecordFilterGroupsComponentState,
  );

  const currentRecordFilters = useRecoilComponentValueV2(
    currentRecordFiltersComponentState,
  );

  const advancedRecordFilterIds = currentRecordFilters
    .filter((recordFilter) => isDefined(recordFilter.recordFilterGroupId))
    .map((recordFilter) => recordFilter.id);

  const { removeRecordFilter } = useRemoveRecordFilter();
  const { removeRecordFilterGroup } = useRemoveRecordFilterGroup();

  const { removeRootRecordFilterGroupIfEmpty } =
    useRemoveRootRecordFilterGroupIfEmpty();

  const rootRecordFilterGroup = useRecoilComponentValueV2(
    rootLevelRecordFilterGroupComponentSelector,
  );

  const { childRecordFiltersAndRecordFilterGroups } =
    useChildRecordFiltersAndRecordFilterGroups({
      recordFilterGroupId: rootRecordFilterGroup?.id,
    });

  const handleRemoveClick = () => {
    closeDropdown();

    const viewFilterGroupIds = currentRecordFilterGroups.map(
      (recordFilterGroup) => recordFilterGroup.id,
    );

    for (const viewFilterGroupId of viewFilterGroupIds) {
      removeRecordFilterGroup(viewFilterGroupId);
    }

    for (const recordFilterId of advancedRecordFilterIds) {
      removeRecordFilter({ recordFilterId });
    }

    removeRootRecordFilterGroupIfEmpty();
  };

  const advancedFilterCount = childRecordFiltersAndRecordFilterGroups.length;

  const labelText = 'advanced rule';
  const chipLabel = `${advancedFilterCount} ${advancedFilterCount === 1 ? labelText : plural(labelText)}`;

  const { objectMetadataItems } = useObjectMetadataItems();

  const hasAnyDeletedAtFilterInAdvancedFilters = useMemo(() => {
    const recordFiltersDescendantOfRootGroup = rootRecordFilterGroup?.id
      ? getAllRecordFilterDescendantsOfRecordFilterGroup({
          recordFilterGroupId: rootRecordFilterGroup?.id,
          recordFilterGroups: currentRecordFilterGroups,
          recordFilters: currentRecordFilters,
        })
      : [];

    const fieldMetadataItems = objectMetadataItems.flatMap(
      (item) => item.fields,
    );

    return recordFiltersDescendantOfRootGroup.some((recordFilter) => {
      const correspondingMetadataItem = fieldMetadataItems.find(
        (fieldMetadataItem) =>
          fieldMetadataItem.id === recordFilter.fieldMetadataId,
      );

      if (isDefined(correspondingMetadataItem)) {
        return correspondingMetadataItem.name === SOFT_DELETE_FILTER_FIELD_NAME;
      }

      return false;
    });
  }, [
    currentRecordFilterGroups,
    currentRecordFilters,
    rootRecordFilterGroup,
    objectMetadataItems,
  ]);

  return (
    <SortOrFilterChip
      testId={ADVANCED_FILTER_DROPDOWN_ID}
      labelKey={chipLabel}
      labelValue=""
      Icon={IconFilter}
      onRemove={handleRemoveClick}
      variant={hasAnyDeletedAtFilterInAdvancedFilters ? 'danger' : 'default'}
    />
  );
};
