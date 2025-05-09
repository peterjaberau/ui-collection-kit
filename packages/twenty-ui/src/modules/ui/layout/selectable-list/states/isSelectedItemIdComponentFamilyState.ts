import { SelectableListComponentInstanceContext } from '@twenty-modules/ui/layout/selectable-list/states/contexts/SelectableListComponentInstanceContext';
import { createComponentFamilyStateV2 } from '@twenty-modules/ui/utilities/state/component-state/utils/createComponentFamilyStateV2';

export const isSelectedItemIdComponentFamilyState =
  createComponentFamilyStateV2<boolean, string>({
    key: 'isSelectedItemIdComponentFamilyState',
    defaultValue: false,
    componentInstanceContext: SelectableListComponentInstanceContext,
  });
