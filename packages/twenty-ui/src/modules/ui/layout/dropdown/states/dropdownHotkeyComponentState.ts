import { HotkeyScope } from '@twenty-modules/ui/utilities/hotkey/types/HotkeyScope';
import { createComponentState } from '@twenty-modules/ui/utilities/state/component-state/utils/createComponentState';

export const dropdownHotkeyComponentState = createComponentState<
  HotkeyScope | null | undefined
>({
  key: 'dropdownHotkeyComponentState',
  defaultValue: null,
});
