import { RecordFilterGroupsComponentInstanceContext } from '@twenty-modules/object-record/record-filter-group/states/context/RecordFilterGroupsComponentInstanceContext';
import { createComponentFamilyStateV2 } from '@twenty-modules/ui/utilities/state/component-state/utils/createComponentFamilyStateV2';

export const hasInitializedCurrentRecordFilterGroupsComponentFamilyState =
  createComponentFamilyStateV2<boolean, { viewId?: string }>({
    key: 'hasInitializedCurrentRecordFilterGroupsComponentFamilyState',
    defaultValue: false,
    componentInstanceContext: RecordFilterGroupsComponentInstanceContext,
  });
