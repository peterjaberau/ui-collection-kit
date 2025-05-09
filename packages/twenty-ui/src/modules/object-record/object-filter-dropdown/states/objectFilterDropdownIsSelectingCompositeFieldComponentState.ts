import { ObjectFilterDropdownComponentInstanceContext } from '@twenty-modules/object-record/object-filter-dropdown/states/contexts/ObjectFilterDropdownComponentInstanceContext';
import { createComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/utils/createComponentStateV2';

export const objectFilterDropdownIsSelectingCompositeFieldComponentState =
  createComponentStateV2<boolean>({
    key: 'objectFilterDropdownIsSelectingCompositeFieldComponentState',
    defaultValue: false,
    componentInstanceContext: ObjectFilterDropdownComponentInstanceContext,
  });
