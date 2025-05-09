import { FieldMetadataItem } from '@twenty-modules/object-metadata/types/FieldMetadataItem';
import { RecordGqlConnection } from '@twenty-modules/object-record/graphql/types/RecordGqlConnection';
import { assertUnreachable } from '@twenty-modules/workflow/utils/assertUnreachable';
import { RelationDefinitionType } from '@twenty-ui/front/generated-metadata/graphql';

export const isObjectRecordConnection = (
  relationDefinition: NonNullable<FieldMetadataItem['relationDefinition']>,
  value: unknown,
): value is RecordGqlConnection => {
  switch (relationDefinition.direction) {
    case RelationDefinitionType.MANY_TO_MANY:
    case RelationDefinitionType.ONE_TO_MANY: {
      return true;
    }
    case RelationDefinitionType.MANY_TO_ONE:
    case RelationDefinitionType.ONE_TO_ONE: {
      return false;
    }
    default: {
      return assertUnreachable(relationDefinition.direction);
    }
  }
};
