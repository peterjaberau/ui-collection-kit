import { RecordBoardColumnHeaderAggregateDropdownComponentInstanceContext } from '@twenty-modules/object-record/record-board/contexts/RecordBoardColumnHeaderAggregateDropdownComponentInstanceContext';
import { createComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/utils/createComponentStateV2';

export const availableFieldIdsForAggregateOperationComponentState =
  createComponentStateV2<string[]>({
    key: 'availableFieldIdsForAggregateOperationComponentFamilyState',
    defaultValue: [],
    componentInstanceContext:
      RecordBoardColumnHeaderAggregateDropdownComponentInstanceContext,
  });
