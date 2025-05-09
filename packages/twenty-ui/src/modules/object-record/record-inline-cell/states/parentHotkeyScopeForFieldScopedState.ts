import { HotkeyScope } from '@twenty-modules/ui/utilities/hotkey/types/HotkeyScope';
import { createFamilyState } from '@twenty-modules/ui/utilities/state/utils/createFamilyState';

export const parentHotkeyScopeForFieldScopedState = createFamilyState<
  HotkeyScope | null,
  string
>({
  key: 'parentHotkeyScopeForFieldScopedState',
  defaultValue: null,
});
