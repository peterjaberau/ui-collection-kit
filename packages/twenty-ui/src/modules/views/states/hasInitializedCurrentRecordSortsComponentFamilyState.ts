import { RecordSortsComponentInstanceContext } from '@twenty-modules/object-record/record-sort/states/context/RecordSortsComponentInstanceContext';
import { createComponentFamilyStateV2 } from '@twenty-modules/ui/utilities/state/component-state/utils/createComponentFamilyStateV2';

export const hasInitializedCurrentRecordSortsComponentFamilyState =
  createComponentFamilyStateV2<boolean, { viewId?: string }>({
    key: 'hasInitializedCurrentRecordSortsComponentFamilyState',
    defaultValue: false,
    componentInstanceContext: RecordSortsComponentInstanceContext,
  });
