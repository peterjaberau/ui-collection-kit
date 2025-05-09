import { createComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/utils/createComponentStateV2';
import { ViewComponentInstanceContext } from '@twenty-modules/views/states/contexts/ViewComponentInstanceContext';
import { ViewType } from '@twenty-modules/views/types/ViewType';

export const viewPickerTypeComponentState = createComponentStateV2<ViewType>({
  key: 'viewPickerTypeComponentState',
  defaultValue: ViewType.Table,
  componentInstanceContext: ViewComponentInstanceContext,
});
