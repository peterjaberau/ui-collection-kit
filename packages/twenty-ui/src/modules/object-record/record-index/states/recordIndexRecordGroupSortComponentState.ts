import { RecordGroupSort } from '@twenty-modules/object-record/record-group/types/RecordGroupSort';
import { createComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/utils/createComponentStateV2';
import { ViewComponentInstanceContext } from '@twenty-modules/views/states/contexts/ViewComponentInstanceContext';

export const recordIndexRecordGroupSortComponentState =
  createComponentStateV2<RecordGroupSort>({
    key: 'recordIndexRecordGroupSortComponentState',
    defaultValue: RecordGroupSort.Manual,
    componentInstanceContext: ViewComponentInstanceContext,
  });
