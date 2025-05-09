import { useRecoilCallback } from 'recoil';

import { useRecordTableRowContextOrThrow } from '@twenty-modules/object-record/record-table/contexts/RecordTableRowContext';
import { isRowSelectedComponentFamilyState } from '@twenty-modules/object-record/record-table/record-table-row/states/isRowSelectedComponentFamilyState';
import { getSnapshotValue } from '@twenty-modules/ui/utilities/recoil-scope/utils/getSnapshotValue';
import { useRecoilComponentCallbackStateV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentCallbackStateV2';

export const useSetCurrentRowSelected = () => {
  const { recordId } = useRecordTableRowContextOrThrow();

  const isRowSelectedFamilyState = useRecoilComponentCallbackStateV2(
    isRowSelectedComponentFamilyState,
  );

  const setCurrentRowSelected = useRecoilCallback(
    ({ set, snapshot }) =>
      (newSelectedState: boolean) => {
        const isRowSelected = getSnapshotValue(
          snapshot,
          isRowSelectedFamilyState(recordId),
        );

        if (isRowSelected !== newSelectedState) {
          set(isRowSelectedFamilyState(recordId), newSelectedState);
        }
      },
    [recordId, isRowSelectedFamilyState],
  );

  return {
    setCurrentRowSelected,
  };
};
