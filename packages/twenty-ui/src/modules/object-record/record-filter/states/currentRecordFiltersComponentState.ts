import { RecordFiltersComponentInstanceContext } from '@twenty-modules/object-record/record-filter/states/context/RecordFiltersComponentInstanceContext';
import { createComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/utils/createComponentStateV2';
import { RecordFilter } from '../../record-filter/types/RecordFilter';

export const currentRecordFiltersComponentState = createComponentStateV2<
  RecordFilter[]
>({
  key: 'currentRecordFiltersComponentState',
  defaultValue: [],
  componentInstanceContext: RecordFiltersComponentInstanceContext,
});
