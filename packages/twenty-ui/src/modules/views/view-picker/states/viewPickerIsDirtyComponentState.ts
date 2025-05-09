import { createComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/utils/createComponentStateV2';
import { ViewComponentInstanceContext } from '@twenty-modules/views/states/contexts/ViewComponentInstanceContext';

export const viewPickerIsDirtyComponentState = createComponentStateV2<boolean>({
  key: 'viewPickerIsDirtyComponentState',
  defaultValue: false,
  componentInstanceContext: ViewComponentInstanceContext,
});
