import { createComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/utils/createComponentStateV2';
import { ViewComponentInstanceContext } from '@twenty-modules/views/states/contexts/ViewComponentInstanceContext';

export const isRecordIndexLoadMoreLockedComponentState =
  createComponentStateV2<boolean>({
    key: 'isRecordIndexLoadMoreLockedComponentState',
    componentInstanceContext: ViewComponentInstanceContext,
    defaultValue: false,
  });
