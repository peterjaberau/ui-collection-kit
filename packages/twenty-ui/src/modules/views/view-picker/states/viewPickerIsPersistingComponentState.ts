import { createComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/utils/createComponentStateV2';
import { ViewComponentInstanceContext } from '@twenty-modules/views/states/contexts/ViewComponentInstanceContext';

export const viewPickerIsPersistingComponentState =
  createComponentStateV2<boolean>({
    key: 'viewPickerIsPersistingComponentState',
    defaultValue: false,
    componentInstanceContext: ViewComponentInstanceContext,
  });
