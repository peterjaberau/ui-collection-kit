import { SelectableListComponentInstanceContext } from '@twenty-modules/ui/layout/selectable-list/states/contexts/SelectableListComponentInstanceContext';
import { createComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/utils/createComponentStateV2';

export const selectableItemIdsComponentState = createComponentStateV2<
  string[][]
>({
  key: 'selectableItemIdsComponentState',
  defaultValue: [[]],
  componentInstanceContext: SelectableListComponentInstanceContext,
});
