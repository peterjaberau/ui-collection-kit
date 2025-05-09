import { currentRecordSortsComponentState } from '@twenty-modules/object-record/record-sort/states/currentRecordSortsComponentState';
import { useSetRecoilComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useSetRecoilComponentStateV2';
import { ViewSort } from '@twenty-modules/views/types/ViewSort';
import { mapViewSortsToSorts } from '@twenty-modules/views/utils/mapViewSortsToSorts';

export const useApplyViewSortsToCurrentRecordSorts = () => {
  const setCurrentRecordSorts = useSetRecoilComponentStateV2(
    currentRecordSortsComponentState,
  );

  const applyViewSortsToCurrentRecordSorts = (viewSorts: ViewSort[]) => {
    const recordSortsToApply = mapViewSortsToSorts(viewSorts);

    setCurrentRecordSorts(recordSortsToApply);
  };

  return {
    applyViewSortsToCurrentRecordSorts,
  };
};
