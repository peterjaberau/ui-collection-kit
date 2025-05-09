import { isFieldRelation } from '@twenty-modules/object-record/record-field/types/guards/isFieldRelation';

import { RelationDefinitionType } from '@twenty-ui/front/generated-metadata/graphql';
import { FieldDefinition } from '../FieldDefinition';
import { FieldMetadata, FieldRelationMetadata } from '../FieldMetadata';

export const isFieldRelationToOneObject = (
  field: Pick<FieldDefinition<FieldMetadata>, 'type' | 'metadata'>,
): field is FieldDefinition<FieldRelationMetadata> =>
  isFieldRelation(field) &&
  field.metadata.relationType === RelationDefinitionType.MANY_TO_ONE;
