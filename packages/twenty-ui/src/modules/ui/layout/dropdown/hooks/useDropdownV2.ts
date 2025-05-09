import { useRecoilCallback } from 'recoil';

import { useGoBackToPreviousDropdownFocusId } from '@twenty-modules/ui/layout/dropdown/hooks/useGoBackToPreviousDropdownFocusId';
import { dropdownHotkeyComponentState } from '@twenty-modules/ui/layout/dropdown/states/dropdownHotkeyComponentState';
import { isDropdownOpenComponentState } from '@twenty-modules/ui/layout/dropdown/states/isDropdownOpenComponentState';
import { usePreviousHotkeyScope } from '@twenty-modules/ui/utilities/hotkey/hooks/usePreviousHotkeyScope';
import { HotkeyScope } from '@twenty-modules/ui/utilities/hotkey/types/HotkeyScope';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const useDropdownV2 = () => {
  const {
    setHotkeyScopeAndMemorizePreviousScope,
    goBackToPreviousHotkeyScope,
  } = usePreviousHotkeyScope();

  const { goBackToPreviousDropdownFocusId } =
    useGoBackToPreviousDropdownFocusId();

  const closeDropdown = useRecoilCallback(
    ({ set, snapshot }) =>
      (specificComponentId: string) => {
        const scopeId = specificComponentId;

        const isDropdownOpen = snapshot
          .getLoadable(isDropdownOpenComponentState({ scopeId }))
          .getValue();

        if (isDropdownOpen) {
          goBackToPreviousHotkeyScope();
          goBackToPreviousDropdownFocusId();
          set(
            isDropdownOpenComponentState({
              scopeId,
            }),
            false,
          );
        }
      },
    [goBackToPreviousHotkeyScope, goBackToPreviousDropdownFocusId],
  );

  const openDropdown = useRecoilCallback(
    ({ set, snapshot }) =>
      (specificComponentId: string, customHotkeyScope?: HotkeyScope) => {
        const scopeId = specificComponentId;

        const dropdownHotkeyScope = snapshot
          .getLoadable(dropdownHotkeyComponentState({ scopeId }))
          .getValue();

        set(
          isDropdownOpenComponentState({
            scopeId,
          }),
          true,
        );

        if (isDefined(customHotkeyScope)) {
          setHotkeyScopeAndMemorizePreviousScope(
            customHotkeyScope.scope,
            customHotkeyScope.customScopes,
          );
        } else if (isDefined(dropdownHotkeyScope)) {
          setHotkeyScopeAndMemorizePreviousScope(
            dropdownHotkeyScope.scope,
            dropdownHotkeyScope.customScopes,
          );
        }
      },
    [setHotkeyScopeAndMemorizePreviousScope],
  );

  const toggleDropdown = useRecoilCallback(
    ({ snapshot }) =>
      (specificComponentId: string, customHotkeyScope?: HotkeyScope) => {
        const scopeId = specificComponentId;
        const isDropdownOpen = snapshot
          .getLoadable(isDropdownOpenComponentState({ scopeId }))
          .getValue();

        if (isDropdownOpen) {
          closeDropdown(specificComponentId);
        } else {
          openDropdown(specificComponentId, customHotkeyScope);
        }
      },
    [closeDropdown, openDropdown],
  );

  return {
    closeDropdown,
    openDropdown,
    toggleDropdown,
  };
};
