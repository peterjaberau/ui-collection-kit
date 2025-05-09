import { FieldMetadataItem } from '@twenty-modules/object-metadata/types/FieldMetadataItem';
import { ObjectRecord } from '@twenty-modules/object-record/types/ObjectRecord';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const getImageIdentifierFieldValue = (
  record: ObjectRecord,
  imageIdentifierFieldMetadataItem: FieldMetadataItem | undefined,
) => {
  if (isDefined(imageIdentifierFieldMetadataItem?.name)) {
    return record[imageIdentifierFieldMetadataItem.name] as string;
  }

  return null;
};
