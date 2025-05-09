import { useRecoilCallback } from 'recoil';

import { hasUserSelectedAllRowsComponentState } from '@twenty-modules/object-record/record-table/record-table-row/states/hasUserSelectedAllRowsFamilyState';
import { useRecoilComponentCallbackStateV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentCallbackStateV2';

export const useSetHasUserSelectedAllRows = (recordTableId?: string) => {
  const hasUserSelectedAllRowsState = useRecoilComponentCallbackStateV2(
    hasUserSelectedAllRowsComponentState,
    recordTableId,
  );

  return useRecoilCallback(
    ({ set }) =>
      (selected: boolean) => {
        set(hasUserSelectedAllRowsState, selected);
      },
    [hasUserSelectedAllRowsState],
  );
};
