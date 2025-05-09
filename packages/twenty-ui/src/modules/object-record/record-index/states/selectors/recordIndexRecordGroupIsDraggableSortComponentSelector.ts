import { RecordGroupSort } from '@twenty-modules/object-record/record-group/types/RecordGroupSort';
import { recordIndexRecordGroupSortComponentState } from '@twenty-modules/object-record/record-index/states/recordIndexRecordGroupSortComponentState';
import { createComponentSelectorV2 } from '@twenty-modules/ui/utilities/state/component-state/utils/createComponentSelectorV2';
import { ViewComponentInstanceContext } from '@twenty-modules/views/states/contexts/ViewComponentInstanceContext';

export const recordIndexRecordGroupIsDraggableSortComponentSelector =
  createComponentSelectorV2<boolean>({
    key: 'recordIndexRecordGroupIsDraggableSortComponentSelector',
    componentInstanceContext: ViewComponentInstanceContext,
    get:
      ({ instanceId }) =>
      ({ get }) => {
        return (
          get(
            recordIndexRecordGroupSortComponentState.atomFamily({
              instanceId,
            }),
          ) === RecordGroupSort.Manual
        );
      },
  });
