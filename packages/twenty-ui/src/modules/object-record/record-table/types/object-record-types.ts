import { FieldDefinition } from '@twenty-modules/object-record/record-field/types/FieldDefinition';
import { FieldMetadata } from '@twenty-modules/object-record/record-field/types/FieldMetadata';

export enum TableOptionsHotkeyScope {
    Dropdown = 'table-options-dropdown',
}

export enum TableHotkeyScope {
    CellDoubleTextInput = 'cell-double-text-input',
    CellEditMode = 'cell-edit-mode',
    CellDateEditMode = 'cell-date-edit-mode',
    TableFocus = 'table-focus',
    Table = 'table',
}

export type TablePosition = {
    numberOfRows: number;
    numberOfColumns: number;
};

export type TableCellPosition = {
    row: number;
    column: number;
};

export type MoveFocusDirection = 'up' | 'down' | 'left' | 'right';

import { AGGREGATE_OPERATIONS } from '@twenty-modules/object-record/record-table/constants/AggregateOperations';
import { DATE_AGGREGATE_OPERATIONS } from '@twenty-modules/object-record/record-table/constants/DateAggregateOperations';

export type ExtendedAggregateOperations =
    | AGGREGATE_OPERATIONS
    | DATE_AGGREGATE_OPERATIONS;


export type ColumnDefinition<T extends FieldMetadata> = FieldDefinition<T> & {
    size: number;
    position: number;
    isLabelIdentifier?: boolean;
    isVisible?: boolean;
    viewFieldId?: string;
    isFilterable?: boolean;
    isSortable?: boolean;
};

export type AllRowsSelectedStatus = 'none' | 'some' | 'all';
