import { RecordBoardColumnHeaderAggregateDropdownComponentInstanceContext } from '@twenty-modules/object-record/record-board/contexts/RecordBoardColumnHeaderAggregateDropdownComponentInstanceContext';
import { ExtendedAggregateOperations } from '@twenty-modules/object-record/record-table/types/ExtendedAggregateOperations';
import { createComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/utils/createComponentStateV2';

export const aggregateOperationComponentState =
  createComponentStateV2<ExtendedAggregateOperations | null>({
    key: 'aggregateOperationComponentFamilyState',
    defaultValue: null,
    componentInstanceContext:
      RecordBoardColumnHeaderAggregateDropdownComponentInstanceContext,
  });
