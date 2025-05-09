import { createComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/utils/createComponentStateV2';
import { ViewComponentInstanceContext } from '@twenty-modules/views/states/contexts/ViewComponentInstanceContext';

export const viewPickerInputNameComponentState = createComponentStateV2<string>(
  {
    key: 'viewPickerInputNameComponentState',
    defaultValue: '',
    componentInstanceContext: ViewComponentInstanceContext,
  },
);
