import { FieldDefinition } from '@twenty-modules/object-record/record-field/types/FieldDefinition';
import {
  FieldMetadata,
  FieldMultiSelectMetadata,
} from '@twenty-modules/object-record/record-field/types/FieldMetadata';
import { FieldMetadataType } from '@twenty-ui/front/generated-metadata/graphql';

export const isFieldMultiSelect = (
  field: Pick<FieldDefinition<FieldMetadata>, 'type'>,
): field is FieldDefinition<FieldMultiSelectMetadata> =>
  field.type === FieldMetadataType.MULTI_SELECT;
