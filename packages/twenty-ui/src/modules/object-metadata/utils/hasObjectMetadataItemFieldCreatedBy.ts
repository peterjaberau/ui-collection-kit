import { ObjectMetadataItem } from '@twenty-modules/object-metadata/types/ObjectMetadataItem';
import { FieldMetadataType } from '@ui-collection-kit/twenty-shared/src/types';

export const hasObjectMetadataItemFieldCreatedBy = (
  objectMetadataItem: ObjectMetadataItem,
) =>
  objectMetadataItem.fields.some(
    (field) =>
      field.type === FieldMetadataType.ACTOR && field.name === 'createdBy',
  );
