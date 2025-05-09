import { DropdownComponentInstanceContext } from '@twenty-modules/ui/layout/dropdown/contexts/DropdownComponeInstanceContext';
import { createComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/utils/createComponentStateV2';

export const dropdownMaxWidthComponentState = createComponentStateV2<
  number | undefined
>({
  key: 'dropdownMaxWidthComponentState',
  componentInstanceContext: DropdownComponentInstanceContext,
  defaultValue: undefined,
});
