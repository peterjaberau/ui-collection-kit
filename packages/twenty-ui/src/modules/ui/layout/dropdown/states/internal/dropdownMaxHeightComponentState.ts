import { DropdownComponentInstanceContext } from '@twenty-modules/ui/layout/dropdown/contexts/DropdownComponeInstanceContext';
import { createComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/utils/createComponentStateV2';

export const dropdownMaxHeightComponentState = createComponentStateV2<
  number | undefined
>({
  key: 'dropdownMaxHeightComponentState',
  componentInstanceContext: DropdownComponentInstanceContext,
  defaultValue: undefined,
});
