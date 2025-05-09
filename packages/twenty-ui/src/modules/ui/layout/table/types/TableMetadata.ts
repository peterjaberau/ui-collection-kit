import { TableFieldMetadata } from '@twenty-modules/ui/layout/table/types/TableFieldMetadata';
import { TableSortValue } from '@twenty-modules/ui/layout/table/types/TableSortValue';

export type TableMetadata<ItemType> = {
  tableId: string;
  fields: TableFieldMetadata<ItemType>[];
  initialSort?: TableSortValue;
};
