import { useRecoilCallback, useRecoilState } from 'recoil';

import { useDropdownStates } from '@twenty-modules/ui/layout/dropdown/hooks/internal/useDropdownStates';
import { useGoBackToPreviousDropdownFocusId } from '@twenty-modules/ui/layout/dropdown/hooks/useGoBackToPreviousDropdownFocusId';
import { useSetActiveDropdownFocusIdAndMemorizePrevious } from '@twenty-modules/ui/layout/dropdown/hooks/useSetFocusedDropdownIdAndMemorizePrevious';
import { dropdownHotkeyComponentState } from '@twenty-modules/ui/layout/dropdown/states/dropdownHotkeyComponentState';
import { usePreviousHotkeyScope } from '@twenty-modules/ui/utilities/hotkey/hooks/usePreviousHotkeyScope';
import { HotkeyScope } from '@twenty-modules/ui/utilities/hotkey/types/HotkeyScope';
import { getSnapshotValue } from '@twenty-modules/ui/utilities/recoil-scope/utils/getSnapshotValue';
import { useCallback } from 'react';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const useDropdown = (dropdownId?: string) => {
  const { scopeId, isDropdownOpenState, dropdownPlacementState } =
    useDropdownStates({
      dropdownScopeId: dropdownId,
    });

  const { setActiveDropdownFocusIdAndMemorizePrevious } =
    useSetActiveDropdownFocusIdAndMemorizePrevious();

  const { goBackToPreviousDropdownFocusId } =
    useGoBackToPreviousDropdownFocusId();

  const {
    setHotkeyScopeAndMemorizePreviousScope,
    goBackToPreviousHotkeyScope,
  } = usePreviousHotkeyScope();

  const [dropdownPlacement, setDropdownPlacement] = useRecoilState(
    dropdownPlacementState,
  );

  const [isDropdownOpen, setIsDropdownOpen] =
    useRecoilState(isDropdownOpenState);

  const closeDropdown = useCallback(() => {
    if (isDropdownOpen) {
      goBackToPreviousHotkeyScope();
      setIsDropdownOpen(false);
      goBackToPreviousDropdownFocusId();
    }
  }, [
    isDropdownOpen,
    goBackToPreviousHotkeyScope,
    setIsDropdownOpen,
    goBackToPreviousDropdownFocusId,
  ]);

  const openDropdown = useRecoilCallback(
    ({ snapshot }) =>
      (dropdownHotkeyScopeFromProps?: HotkeyScope) => {
        if (!isDropdownOpen) {
          setIsDropdownOpen(true);
          setActiveDropdownFocusIdAndMemorizePrevious(dropdownId ?? scopeId);

          const dropdownHotkeyScope = getSnapshotValue(
            snapshot,
            dropdownHotkeyComponentState({
              scopeId: dropdownId ?? scopeId,
            }),
          );

          const dropdownHotkeyScopeForOpening =
            dropdownHotkeyScopeFromProps ?? dropdownHotkeyScope;

          if (isDefined(dropdownHotkeyScopeForOpening)) {
            setHotkeyScopeAndMemorizePreviousScope(
              dropdownHotkeyScopeForOpening.scope,
              dropdownHotkeyScopeForOpening.customScopes,
            );
          }
        }
      },
    [
      isDropdownOpen,
      setIsDropdownOpen,
      setActiveDropdownFocusIdAndMemorizePrevious,
      dropdownId,
      scopeId,
      setHotkeyScopeAndMemorizePreviousScope,
    ],
  );

  const toggleDropdown = (dropdownHotkeyScopeFromProps?: HotkeyScope) => {
    if (isDropdownOpen) {
      closeDropdown();
    } else {
      openDropdown(dropdownHotkeyScopeFromProps);
    }
  };

  return {
    scopeId,
    isDropdownOpen,
    closeDropdown,
    toggleDropdown,
    openDropdown,
    dropdownPlacement,
    setDropdownPlacement,
  };
};
