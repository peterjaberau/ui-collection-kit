import { ScrollWrapperComponentInstanceContext } from '@twenty-modules/ui/utilities/scroll/states/contexts/ScrollWrapperComponentInstanceContext';
import { createComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/utils/createComponentStateV2';

export const scrollWrapperScrollBottomComponentState =
  createComponentStateV2<number>({
    key: 'scrollWrapperScrollBottomComponentState',
    defaultValue: 0,
    componentInstanceContext: ScrollWrapperComponentInstanceContext,
  });
