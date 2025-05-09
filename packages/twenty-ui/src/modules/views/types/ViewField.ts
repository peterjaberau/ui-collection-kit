import { RecordBoardFieldDefinition } from '@twenty-modules/object-record/record-board/types/RecordBoardFieldDefinition';
import { FieldMetadata } from '@twenty-modules/object-record/record-field/types/FieldMetadata';
import { AGGREGATE_OPERATIONS } from '@twenty-modules/object-record/record-table/constants/AggregateOperations';
import { ColumnDefinition } from '@twenty-modules/object-record/record-table/types/ColumnDefinition';

export type ViewField = {
  __typename: 'ViewField';
  id: string;
  fieldMetadataId: string;
  position: number;
  isVisible: boolean;
  size: number;
  aggregateOperation?: AGGREGATE_OPERATIONS | null;
  definition:
    | ColumnDefinition<FieldMetadata>
    | RecordBoardFieldDefinition<FieldMetadata>;
};
