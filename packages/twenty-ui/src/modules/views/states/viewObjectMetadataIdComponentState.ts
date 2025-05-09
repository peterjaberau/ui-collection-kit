import { createComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/utils/createComponentStateV2';
import { ViewComponentInstanceContext } from '@twenty-modules/views/states/contexts/ViewComponentInstanceContext';

export const viewObjectMetadataIdComponentState = createComponentStateV2<
  string | undefined
>({
  key: 'viewObjectMetadataIdComponentState',
  defaultValue: undefined,
  componentInstanceContext: ViewComponentInstanceContext,
});
