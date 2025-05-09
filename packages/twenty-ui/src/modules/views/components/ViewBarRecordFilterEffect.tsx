import { contextStoreCurrentViewIdComponentState } from '@twenty-modules/context-store/states/contextStoreCurrentViewIdComponentState';
import { useFilterableFieldMetadataItems } from '@twenty-modules/object-record/record-filter/hooks/useFilterableFieldMetadataItems';
import { currentRecordFiltersComponentState } from '@twenty-modules/object-record/record-filter/states/currentRecordFiltersComponentState';
import { useRecordIndexContextOrThrow } from '@twenty-modules/object-record/record-index/contexts/RecordIndexContext';
import { prefetchViewFromViewIdFamilySelector } from '@twenty-modules/prefetch/states/selector/prefetchViewFromViewIdFamilySelector';
import { useRecoilComponentFamilyStateV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentFamilyStateV2';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';
import { useSetRecoilComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useSetRecoilComponentStateV2';
import { hasInitializedCurrentRecordFiltersComponentFamilyState } from '@twenty-modules/views/states/hasInitializedCurrentRecordFiltersComponentFamilyState';
import { mapViewFiltersToFilters } from '@twenty-modules/views/utils/mapViewFiltersToFilters';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const ViewBarRecordFilterEffect = () => {
  const currentViewId = useRecoilComponentValueV2(
    contextStoreCurrentViewIdComponentState,
  );

  const { objectMetadataItem } = useRecordIndexContextOrThrow();

  const currentView = useRecoilValue(
    prefetchViewFromViewIdFamilySelector({
      viewId: currentViewId ?? '',
    }),
  );

  const [
    hasInitializedCurrentRecordFilters,
    setHasInitializedCurrentRecordFilters,
  ] = useRecoilComponentFamilyStateV2(
    hasInitializedCurrentRecordFiltersComponentFamilyState,
    {
      viewId: currentViewId ?? undefined,
    },
  );

  const setCurrentRecordFilters = useSetRecoilComponentStateV2(
    currentRecordFiltersComponentState,
  );

  const { filterableFieldMetadataItems } = useFilterableFieldMetadataItems(
    objectMetadataItem.id,
  );

  useEffect(() => {
    if (isDefined(currentView) && !hasInitializedCurrentRecordFilters) {
      if (currentView.objectMetadataId !== objectMetadataItem.id) {
        return;
      }

      if (isDefined(currentView)) {
        setCurrentRecordFilters(
          mapViewFiltersToFilters(
            currentView.viewFilters,
            filterableFieldMetadataItems,
          ),
        );

        setHasInitializedCurrentRecordFilters(true);
      }
    }
  }, [
    currentViewId,
    setCurrentRecordFilters,
    filterableFieldMetadataItems,
    hasInitializedCurrentRecordFilters,
    setHasInitializedCurrentRecordFilters,
    currentView,
    objectMetadataItem,
  ]);

  return null;
};
