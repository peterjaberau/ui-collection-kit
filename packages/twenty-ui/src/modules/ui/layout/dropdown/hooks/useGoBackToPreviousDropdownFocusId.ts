import { useRecoilCallback } from 'recoil';

import { activeDropdownFocusIdState } from '@twenty-modules/ui/layout/dropdown/states/activeDropdownFocusIdState';
import { previousDropdownFocusIdState } from '@twenty-modules/ui/layout/dropdown/states/previousDropdownFocusIdState';

// TODO: this won't work for more than 1 nested dropdown
export const useGoBackToPreviousDropdownFocusId = () => {
  const goBackToPreviousDropdownFocusId = useRecoilCallback(
    ({ snapshot, set }) =>
      () => {
        const previouslyFocusedDropdownId = snapshot
          .getLoadable(previousDropdownFocusIdState)
          .getValue();

        set(activeDropdownFocusIdState, previouslyFocusedDropdownId);
        set(previousDropdownFocusIdState, null);
      },
    [],
  );

  return {
    goBackToPreviousDropdownFocusId,
  };
};
