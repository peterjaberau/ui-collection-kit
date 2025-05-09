import { createComponentState } from '@twenty-modules/ui/utilities/state/component-state/utils/createComponentState';

export const isDropdownOpenComponentState = createComponentState<boolean>({
  key: 'isDropdownOpenComponentState',
  defaultValue: false,
});
