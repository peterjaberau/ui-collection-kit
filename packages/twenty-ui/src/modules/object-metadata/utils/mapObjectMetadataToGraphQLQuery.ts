import { ObjectMetadataItem } from '@twenty-modules/object-metadata/types/ObjectMetadataItem';
import { mapFieldMetadataToGraphQLQuery } from '@twenty-modules/object-metadata/utils/mapFieldMetadataToGraphQLQuery';
import { shouldFieldBeQueried } from '@twenty-modules/object-metadata/utils/shouldFieldBeQueried';
import { RecordGqlFields } from '@twenty-modules/object-record/graphql/types/RecordGqlFields';
import { isRecordGqlFieldsNode } from '@twenty-modules/object-record/graphql/utils/isRecordGraphlFieldsNode';
import { FieldMetadataType } from '@ui-collection-kit/twenty-shared/src/types';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

type MapObjectMetadataToGraphQLQueryArgs = {
  objectMetadataItems: ObjectMetadataItem[];
  objectMetadataItem: Pick<ObjectMetadataItem, 'nameSingular' | 'fields'>;
  recordGqlFields?: RecordGqlFields;
  computeReferences?: boolean;
  isRootLevel?: boolean;
};
export const mapObjectMetadataToGraphQLQuery = ({
  objectMetadataItems,
  objectMetadataItem,
  recordGqlFields,
  computeReferences = false,
  isRootLevel = true,
}: MapObjectMetadataToGraphQLQueryArgs): string => {
  const manyToOneRelationFields = objectMetadataItem?.fields
    .filter((field) => field.isActive)
    .filter((field) => field.type === FieldMetadataType.RELATION)
    .filter((field) => isDefined(field.settings?.joinColumnName));

  const manyToOneRelationGqlFieldWithFieldMetadata =
    manyToOneRelationFields.map((field) => ({
      gqlField: field.settings?.joinColumnName,
      fieldMetadata: field,
    }));

  const gqlFieldWithFieldMetadataThatCouldBeQueried = [
    ...objectMetadataItem.fields
      .filter((fieldMetadata) => fieldMetadata.isActive)
      .map((fieldMetadata) => ({
        gqlField: fieldMetadata.name,
        fieldMetadata,
      })),
    ...manyToOneRelationGqlFieldWithFieldMetadata,
  ].sort((gqlFieldWithFieldMetadataA, gqlFieldWithFieldMetadataB) =>
    gqlFieldWithFieldMetadataA.gqlField.localeCompare(
      gqlFieldWithFieldMetadataB.gqlField,
    ),
  );

  const gqlFieldWithFieldMetadataThatSouldBeQueried =
    gqlFieldWithFieldMetadataThatCouldBeQueried.filter(
      (gqlFieldWithFieldMetadata) =>
        shouldFieldBeQueried({
          gqlField: gqlFieldWithFieldMetadata.gqlField,
          fieldMetadata: gqlFieldWithFieldMetadata.fieldMetadata,
          recordGqlFields,
        }),
    );

  if (!isRootLevel && computeReferences) {
    return `{
      __ref
    }`;
  }

  return `{
__typename
${gqlFieldWithFieldMetadataThatSouldBeQueried
  .map((gqlFieldWithFieldMetadata) => {
    const currentRecordGqlFields =
      recordGqlFields?.[gqlFieldWithFieldMetadata.gqlField];
    const relationRecordGqlFields = isRecordGqlFieldsNode(
      currentRecordGqlFields,
    )
      ? currentRecordGqlFields
      : undefined;
    return mapFieldMetadataToGraphQLQuery({
      objectMetadataItems,
      gqlField: gqlFieldWithFieldMetadata.gqlField,
      fieldMetadata: gqlFieldWithFieldMetadata.fieldMetadata,
      relationRecordGqlFields,
      computeReferences,
    });
  })
  .join('\n')}
}`;
};
