import { ContextStoreComponentInstanceContext } from '@twenty-modules/context-store/states/contexts/ContextStoreComponentInstanceContext';
import { ContextStoreViewType } from '@twenty-modules/context-store/types/ContextStoreViewType';
import { createComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/utils/createComponentStateV2';

export const contextStoreCurrentViewTypeComponentState =
  createComponentStateV2<ContextStoreViewType | null>({
    key: 'contextStoreCurrentViewTypeComponentState',
    defaultValue: null,
    componentInstanceContext: ContextStoreComponentInstanceContext,
  });
