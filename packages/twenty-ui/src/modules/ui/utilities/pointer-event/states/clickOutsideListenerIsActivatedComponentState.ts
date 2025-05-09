import { ClickOutsideListenerComponentInstanceContext } from '@twenty-modules/ui/utilities/pointer-event/states/contexts/ClickOutsideListenerComponentInstanceContext';
import { createComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/utils/createComponentStateV2';

export const clickOutsideListenerIsActivatedComponentState =
  createComponentStateV2<boolean>({
    key: 'clickOutsideListenerIsActivatedComponentState',
    defaultValue: true,
    componentInstanceContext: ClickOutsideListenerComponentInstanceContext,
  });
