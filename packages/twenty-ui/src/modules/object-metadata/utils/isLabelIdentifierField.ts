import { FieldMetadataItem } from '@twenty-modules/object-metadata/types/FieldMetadataItem';
import { ObjectMetadataItem } from '@twenty-modules/object-metadata/types/ObjectMetadataItem';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const DEFAULT_LABEL_IDENTIFIER_FIELD_NAME = 'name';

export const isLabelIdentifierField = ({
  fieldMetadataItem,
  objectMetadataItem,
}: {
  fieldMetadataItem: Pick<FieldMetadataItem, 'id' | 'name'>;
  objectMetadataItem: Pick<
    ObjectMetadataItem,
    'labelIdentifierFieldMetadataId'
  >;
}) => {
  return isDefined(objectMetadataItem.labelIdentifierFieldMetadataId)
    ? fieldMetadataItem.id === objectMetadataItem.labelIdentifierFieldMetadataId
    : fieldMetadataItem.name === DEFAULT_LABEL_IDENTIFIER_FIELD_NAME;
};
