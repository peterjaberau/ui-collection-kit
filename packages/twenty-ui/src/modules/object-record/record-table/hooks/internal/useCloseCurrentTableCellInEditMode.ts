import { useRecoilCallback } from 'recoil';

import { recordTableCellEditModePositionComponentState } from '@twenty-modules/object-record/record-table/states/recordTableCellEditModePositionComponentState';
import { useGoBackToPreviousDropdownFocusId } from '@twenty-modules/ui/layout/dropdown/hooks/useGoBackToPreviousDropdownFocusId';
import { useRecoilComponentCallbackStateV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentCallbackStateV2';

export const useCloseCurrentTableCellInEditMode = (recordTableId?: string) => {
  const currentTableCellInEditModePositionState =
    useRecoilComponentCallbackStateV2(
      recordTableCellEditModePositionComponentState,
      recordTableId,
    );

  const { goBackToPreviousDropdownFocusId } =
    useGoBackToPreviousDropdownFocusId();

  return useRecoilCallback(
    ({ set }) => {
      return async () => {
        set(currentTableCellInEditModePositionState, null);

        goBackToPreviousDropdownFocusId();
      };
    },
    [currentTableCellInEditModePositionState, goBackToPreviousDropdownFocusId],
  );
};
