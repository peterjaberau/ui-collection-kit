import { createComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/utils/createComponentStateV2';
import { ViewComponentInstanceContext } from '@twenty-modules/views/states/contexts/ViewComponentInstanceContext';

export const viewPickerSelectedIconComponentState =
  createComponentStateV2<string>({
    key: 'viewPickerSelectedIconComponentState',
    defaultValue: '',
    componentInstanceContext: ViewComponentInstanceContext,
  });
