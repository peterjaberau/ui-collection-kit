import { contextStoreCurrentViewIdComponentState } from '@twenty-modules/context-store/states/contextStoreCurrentViewIdComponentState';
import { useRecordIndexContextOrThrow } from '@twenty-modules/object-record/record-index/contexts/RecordIndexContext';
import { currentRecordSortsComponentState } from '@twenty-modules/object-record/record-sort/states/currentRecordSortsComponentState';
import { prefetchViewFromViewIdFamilySelector } from '@twenty-modules/prefetch/states/selector/prefetchViewFromViewIdFamilySelector';
import { useRecoilComponentFamilyStateV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentFamilyStateV2';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';
import { useSetRecoilComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useSetRecoilComponentStateV2';
import { hasInitializedCurrentRecordSortsComponentFamilyState } from '@twenty-modules/views/states/hasInitializedCurrentRecordSortsComponentFamilyState';
import { mapViewSortsToSorts } from '@twenty-modules/views/utils/mapViewSortsToSorts';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const ViewBarRecordSortEffect = () => {
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
    hasInitializedCurrentRecordSorts,
    setHasInitializedCurrentRecordSorts,
  ] = useRecoilComponentFamilyStateV2(
    hasInitializedCurrentRecordSortsComponentFamilyState,
    {
      viewId: currentViewId ?? undefined,
    },
  );

  const setCurrentRecordSorts = useSetRecoilComponentStateV2(
    currentRecordSortsComponentState,
  );

  useEffect(() => {
    if (isDefined(currentView) && !hasInitializedCurrentRecordSorts) {
      if (currentView.objectMetadataId !== objectMetadataItem.id) {
        return;
      }

      if (isDefined(currentView)) {
        setCurrentRecordSorts(mapViewSortsToSorts(currentView.viewSorts));
        setHasInitializedCurrentRecordSorts(true);
      }
    }
  }, [
    hasInitializedCurrentRecordSorts,
    currentView,
    setCurrentRecordSorts,
    objectMetadataItem,
    setHasInitializedCurrentRecordSorts,
  ]);

  return null;
};
