import { createContext } from 'react';

import { FieldMetadata } from '@twenty-modules/object-record/record-field/types/FieldMetadata';
import { ColumnDefinition } from '@twenty-modules/object-record/record-table/types/ColumnDefinition';
import { TableCellPosition } from '@twenty-modules/object-record/record-table/types/TableCellPosition';

export type RecordTableCellContextValue = {
  columnDefinition: ColumnDefinition<FieldMetadata>;
  cellPosition: TableCellPosition;
};

export const RecordTableCellContext =
  createContext<RecordTableCellContextValue>({} as RecordTableCellContextValue);
