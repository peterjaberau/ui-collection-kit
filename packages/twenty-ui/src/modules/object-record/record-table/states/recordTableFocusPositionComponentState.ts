import { RecordTableComponentInstanceContext } from '@twenty-modules/object-record/record-table/states/context/RecordTableComponentInstanceContext';
import { createComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/utils/createComponentStateV2';
import { TableCellPosition } from '../types/TableCellPosition';

export const recordTableFocusPositionComponentState =
  createComponentStateV2<TableCellPosition>({
    key: 'recordTableFocusPositionComponentState',
    defaultValue: {
      row: 0,
      column: 1,
    },
    componentInstanceContext: RecordTableComponentInstanceContext,
  });
