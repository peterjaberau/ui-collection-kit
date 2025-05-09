import { contextStoreCurrentViewIdComponentState } from '@twenty-modules/context-store/states/contextStoreCurrentViewIdComponentState';
import { useFilterableFieldMetadataItemsInRecordIndexContext } from '@twenty-modules/object-record/record-filter/hooks/useFilterableFieldMetadataItemsInRecordIndexContext';
import { currentRecordFiltersComponentState } from '@twenty-modules/object-record/record-filter/states/currentRecordFiltersComponentState';
import { prefetchViewFromViewIdFamilySelector } from '@twenty-modules/prefetch/states/selector/prefetchViewFromViewIdFamilySelector';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';
import { useSetRecoilComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useSetRecoilComponentStateV2';
import { mapViewFiltersToFilters } from '@twenty-modules/views/utils/mapViewFiltersToFilters';
import { useRecoilCallback } from 'recoil';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const useApplyCurrentViewFiltersToCurrentRecordFilters = () => {
  const currentViewId = useRecoilComponentValueV2(
    contextStoreCurrentViewIdComponentState,
  );

  const setCurrentRecordFilters = useSetRecoilComponentStateV2(
    currentRecordFiltersComponentState,
  );

  const { filterableFieldMetadataItems } =
    useFilterableFieldMetadataItemsInRecordIndexContext();

  const applyCurrentViewFiltersToCurrentRecordFilters = useRecoilCallback(
    ({ snapshot }) =>
      () => {
        const currentView = snapshot
          .getLoadable(
            prefetchViewFromViewIdFamilySelector({
              viewId: currentViewId ?? '',
            }),
          )
          .getValue();

        if (isDefined(currentView)) {
          setCurrentRecordFilters(
            mapViewFiltersToFilters(
              currentView.viewFilters,
              filterableFieldMetadataItems,
            ),
          );
        }
      },
    [currentViewId, filterableFieldMetadataItems, setCurrentRecordFilters],
  );

  return {
    applyCurrentViewFiltersToCurrentRecordFilters,
  };
};
