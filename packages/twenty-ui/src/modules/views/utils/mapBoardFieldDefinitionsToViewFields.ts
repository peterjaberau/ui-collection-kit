import { RecordBoardFieldDefinition } from '@twenty-modules/object-record/record-board/types/RecordBoardFieldDefinition';
import { FieldMetadata } from '@twenty-modules/object-record/record-field/types/FieldMetadata';
import { ViewField } from '@twenty-modules/views/types/ViewField';

export const mapBoardFieldDefinitionsToViewFields = (
  fieldsDefinitions: RecordBoardFieldDefinition<FieldMetadata>[],
): ViewField[] => {
  return fieldsDefinitions.map(
    (fieldDefinition): ViewField => ({
      __typename: 'ViewField',
      id: fieldDefinition.viewFieldId || '',
      fieldMetadataId: fieldDefinition.fieldMetadataId,
      size: 0,
      position: fieldDefinition.position,
      isVisible: fieldDefinition.isVisible ?? true,
      definition: fieldDefinition,
    }),
  );
};
