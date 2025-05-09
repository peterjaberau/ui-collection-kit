import { ContextStoreComponentInstanceContext } from '@twenty-modules/context-store/states/contexts/ContextStoreComponentInstanceContext';
import { RecordFilter } from '@twenty-modules/object-record/record-filter/types/RecordFilter';
import { createComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/utils/createComponentStateV2';

export const contextStoreFiltersComponentState = createComponentStateV2<
  RecordFilter[]
>({
  key: 'contextStoreFiltersComponentState',
  defaultValue: [],
  componentInstanceContext: ContextStoreComponentInstanceContext,
});
