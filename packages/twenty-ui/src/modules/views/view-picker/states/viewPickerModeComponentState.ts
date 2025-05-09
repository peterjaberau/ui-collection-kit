import { createComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/utils/createComponentStateV2';
import { ViewComponentInstanceContext } from '@twenty-modules/views/states/contexts/ViewComponentInstanceContext';
import { ViewPickerMode } from '@twenty-modules/views/view-picker/types/ViewPickerMode';

export const viewPickerModeComponentState =
  createComponentStateV2<ViewPickerMode>({
    key: 'viewPickerModeComponentState',
    defaultValue: 'list',
    componentInstanceContext: ViewComponentInstanceContext,
  });
