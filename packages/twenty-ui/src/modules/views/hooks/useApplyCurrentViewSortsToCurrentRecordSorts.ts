import { contextStoreCurrentViewIdComponentState } from '@twenty-modules/context-store/states/contextStoreCurrentViewIdComponentState';
import { currentRecordSortsComponentState } from '@twenty-modules/object-record/record-sort/states/currentRecordSortsComponentState';
import { prefetchViewFromViewIdFamilySelector } from '@twenty-modules/prefetch/states/selector/prefetchViewFromViewIdFamilySelector';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';
import { useSetRecoilComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useSetRecoilComponentStateV2';
import { mapViewSortsToSorts } from '@twenty-modules/views/utils/mapViewSortsToSorts';
import { useRecoilValue } from 'recoil';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const useApplyCurrentViewSortsToCurrentRecordSorts = () => {
  const currentViewId = useRecoilComponentValueV2(
    contextStoreCurrentViewIdComponentState,
  );

  const currentView = useRecoilValue(
    prefetchViewFromViewIdFamilySelector({
      viewId: currentViewId ?? '',
    }),
  );

  const setCurrentRecordSorts = useSetRecoilComponentStateV2(
    currentRecordSortsComponentState,
  );

  const applyCurrentViewSortsToCurrentRecordSorts = () => {
    if (isDefined(currentView)) {
      setCurrentRecordSorts(mapViewSortsToSorts(currentView.viewSorts));
    }
  };

  return {
    applyCurrentViewSortsToCurrentRecordSorts,
  };
};
