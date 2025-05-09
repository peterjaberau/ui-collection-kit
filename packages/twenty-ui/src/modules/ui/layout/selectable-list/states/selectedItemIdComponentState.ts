import { SelectableListComponentInstanceContext } from '@twenty-modules/ui/layout/selectable-list/states/contexts/SelectableListComponentInstanceContext';
import { createComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/utils/createComponentStateV2';

export const selectedItemIdComponentState = createComponentStateV2<
  string | null
>({
  key: 'selectedItemIdComponentState',
  defaultValue: null,
  componentInstanceContext: SelectableListComponentInstanceContext,
});
