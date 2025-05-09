import { createComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/utils/createComponentStateV2';
import { ViewComponentInstanceContext } from '@twenty-modules/views/states/contexts/ViewComponentInstanceContext';

export const objectOptionsDropdownSearchInputComponentState =
  createComponentStateV2<string>({
    key: 'objectOptionsDropdownSearchInputComponentState',
    defaultValue: '',
    componentInstanceContext: ViewComponentInstanceContext,
  });
