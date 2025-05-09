import { RecordTableComponentInstanceContext } from '@twenty-modules/object-record/record-table/states/context/RecordTableComponentInstanceContext';
import { createComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/utils/createComponentStateV2';
import { TableCellPosition } from '../types/TableCellPosition';

export const recordTableHoverPositionComponentState =
  createComponentStateV2<TableCellPosition | null>({
    key: 'recordTableHoverPositionComponentState',
    defaultValue: null,
    componentInstanceContext: RecordTableComponentInstanceContext,
  });
