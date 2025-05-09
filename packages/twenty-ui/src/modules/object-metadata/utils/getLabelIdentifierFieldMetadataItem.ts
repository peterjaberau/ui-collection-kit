import { FieldMetadataItem } from '@twenty-modules/object-metadata/types/FieldMetadataItem';
import { ObjectMetadataItem } from '@twenty-modules/object-metadata/types/ObjectMetadataItem';
import { isLabelIdentifierField } from '@twenty-modules/object-metadata/utils/isLabelIdentifierField';

export const getLabelIdentifierFieldMetadataItem = (
  objectMetadataItem: Pick<
    ObjectMetadataItem,
    'fields' | 'labelIdentifierFieldMetadataId'
  >,
): FieldMetadataItem | undefined =>
  objectMetadataItem.fields.find((fieldMetadataItem) =>
    isLabelIdentifierField({
      fieldMetadataItem,
      objectMetadataItem,
    }),
  );
