import { TabListComponentInstanceContext } from '@twenty-modules/ui/layout/tab/states/contexts/TabListComponentInstanceContext';
import { createComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/utils/createComponentStateV2';

export const activeTabIdComponentState = createComponentStateV2<string | null>({
  key: 'activeTabIdComponentState',
  defaultValue: null,
  componentInstanceContext: TabListComponentInstanceContext,
});
