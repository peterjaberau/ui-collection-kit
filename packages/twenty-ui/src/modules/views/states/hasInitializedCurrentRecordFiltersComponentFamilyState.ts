import { RecordFiltersComponentInstanceContext } from '@twenty-modules/object-record/record-filter/states/context/RecordFiltersComponentInstanceContext';
import { createComponentFamilyStateV2 } from '@twenty-modules/ui/utilities/state/component-state/utils/createComponentFamilyStateV2';

export const hasInitializedCurrentRecordFiltersComponentFamilyState =
  createComponentFamilyStateV2<boolean, { viewId?: string }>({
    key: 'hasInitializedCurrentRecordFiltersComponentFamilyState',
    defaultValue: false,
    componentInstanceContext: RecordFiltersComponentInstanceContext,
  });
