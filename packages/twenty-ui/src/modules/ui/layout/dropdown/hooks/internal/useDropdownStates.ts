import { DropdownScopeInternalContext } from '@twenty-modules/ui/layout/dropdown/scopes/scope-internal-context/DropdownScopeInternalContext';
import { dropdownHotkeyComponentState } from '@twenty-modules/ui/layout/dropdown/states/dropdownHotkeyComponentState';
import { dropdownPlacementComponentState } from '@twenty-modules/ui/layout/dropdown/states/dropdownPlacementComponentState';
import { isDropdownOpenComponentState } from '@twenty-modules/ui/layout/dropdown/states/isDropdownOpenComponentState';
import { useAvailableScopeIdOrThrow } from '@twenty-modules/ui/utilities/recoil-scope/scopes-internal/hooks/useAvailableScopeId';
import { extractComponentState } from '@twenty-modules/ui/utilities/state/component-state/utils/extractComponentState';

type UseDropdownStatesProps = {
  dropdownScopeId?: string;
};

export const useDropdownStates = ({
  dropdownScopeId,
}: UseDropdownStatesProps) => {
  const scopeId = useAvailableScopeIdOrThrow(
    DropdownScopeInternalContext,
    dropdownScopeId,
  );

  return {
    scopeId,
    dropdownPlacementState: extractComponentState(
      dropdownPlacementComponentState,
      scopeId,
    ),
    dropdownHotkeyScopeState: extractComponentState(
      dropdownHotkeyComponentState,
      scopeId,
    ),
    isDropdownOpenState: extractComponentState(
      isDropdownOpenComponentState,
      scopeId,
    ),
  };
};
