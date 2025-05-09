import { FieldDefinition } from '@twenty-modules/object-record/record-field/types/FieldDefinition';
import { FieldMetadata } from '@twenty-modules/object-record/record-field/types/FieldMetadata';

export type RecordBoardFieldDefinition<T extends FieldMetadata> =
  FieldDefinition<T> & {
    viewFieldId?: string;
    position: number;
    isVisible?: boolean;
    isLabelIdentifier?: boolean;
  };
