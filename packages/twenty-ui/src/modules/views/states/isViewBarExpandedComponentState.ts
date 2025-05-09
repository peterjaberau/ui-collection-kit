import { createComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/utils/createComponentStateV2';
import { ViewComponentInstanceContext } from '@twenty-modules/views/states/contexts/ViewComponentInstanceContext';

export const isViewBarExpandedComponentState = createComponentStateV2<boolean>({
  key: 'isViewBarExpandedComponentState',
  defaultValue: true,
  componentInstanceContext: ViewComponentInstanceContext,
});
