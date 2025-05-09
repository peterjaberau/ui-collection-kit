import { FieldMetadataItem } from '@twenty-modules/object-metadata/types/FieldMetadataItem';
import { ObjectMetadataItem } from '@twenty-modules/object-metadata/types/ObjectMetadataItem';
import { getFieldIdentifierType } from '@twenty-modules/settings/data-model/utils/getFieldIdentifierType';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const getSettingsObjectFieldType = (
  objectMetadataItem: ObjectMetadataItem,
  fieldMetadataItem: FieldMetadataItem,
) => {
  const variant = objectMetadataItem.isCustom ? 'identifier' : 'field-type';

  const identifierType = getFieldIdentifierType(
    fieldMetadataItem,
    objectMetadataItem,
  );

  if (variant === 'field-type') {
    return objectMetadataItem.isRemote
      ? 'Remote'
      : fieldMetadataItem.isCustom
        ? 'Custom'
        : 'Standard';
  } else {
    return isDefined(identifierType)
      ? identifierType === 'label'
        ? 'Record text'
        : 'Record image'
      : null;
  }
};
