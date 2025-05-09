import { useFilterableFieldMetadataItems } from '@twenty-modules/object-record/record-filter/hooks/useFilterableFieldMetadataItems';
import { currentRecordFiltersComponentState } from '@twenty-modules/object-record/record-filter/states/currentRecordFiltersComponentState';
import { useRecordIndexContextOrThrow } from '@twenty-modules/object-record/record-index/contexts/RecordIndexContext';
import { useSetRecoilComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useSetRecoilComponentStateV2';
import { ViewFilter } from '@twenty-modules/views/types/ViewFilter';
import { mapViewFiltersToFilters } from '@twenty-modules/views/utils/mapViewFiltersToFilters';

export const useApplyViewFiltersToCurrentRecordFilters = () => {
  const setCurrentRecordFilters = useSetRecoilComponentStateV2(
    currentRecordFiltersComponentState,
  );

  const { objectMetadataItem } = useRecordIndexContextOrThrow();

  const { filterableFieldMetadataItems } = useFilterableFieldMetadataItems(
    objectMetadataItem.id,
  );

  const applyViewFiltersToCurrentRecordFilters = (
    viewFilters: ViewFilter[],
  ) => {
    const recordFiltersToApply = mapViewFiltersToFilters(
      viewFilters,
      filterableFieldMetadataItems,
    );

    setCurrentRecordFilters(recordFiltersToApply);
  };

  return {
    applyViewFiltersToCurrentRecordFilters,
  };
};
