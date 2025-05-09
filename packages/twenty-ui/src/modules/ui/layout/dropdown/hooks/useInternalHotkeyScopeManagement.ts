import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { useDropdownStates } from '@twenty-modules/ui/layout/dropdown/hooks/internal/useDropdownStates';
import { HotkeyScope } from '@twenty-modules/ui/utilities/hotkey/types/HotkeyScope';
import { isDeeplyEqual } from '@twenty-ui/front/utils/isDeeplyEqual';

export const useInternalHotkeyScopeManagement = ({
  dropdownScopeId,
  dropdownHotkeyScopeFromParent,
}: {
  dropdownScopeId: string;
  dropdownHotkeyScopeFromParent?: HotkeyScope;
}) => {
  const { dropdownHotkeyScopeState } = useDropdownStates({ dropdownScopeId });

  const [dropdownHotkeyScope, setDropdownHotkeyScope] = useRecoilState(
    dropdownHotkeyScopeState,
  );

  useEffect(() => {
    if (!isDeeplyEqual(dropdownHotkeyScopeFromParent, dropdownHotkeyScope)) {
      setDropdownHotkeyScope(dropdownHotkeyScopeFromParent);
    }
  }, [
    dropdownHotkeyScope,
    dropdownHotkeyScopeFromParent,
    setDropdownHotkeyScope,
  ]);
};
