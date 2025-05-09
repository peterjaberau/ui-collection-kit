import { CoreObjectNameSingular } from '@twenty-modules/object-metadata/types/CoreObjectNameSingular';
import { FieldMetadataItem } from '@twenty-modules/object-metadata/types/FieldMetadataItem';
import { ObjectRecord } from '@twenty-modules/object-record/types/ObjectRecord';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';
import { FieldMetadataType } from '@twenty-ui/front/generated-metadata/graphql';

export const getLabelIdentifierFieldValue = (
  record: ObjectRecord,
  labelIdentifierFieldMetadataItem: FieldMetadataItem | undefined,
  objectNameSingular: string,
): string => {
  if (
    objectNameSingular === CoreObjectNameSingular.WorkspaceMember ||
    labelIdentifierFieldMetadataItem?.type === FieldMetadataType.FULL_NAME
  ) {
    return `${record.name?.firstName ?? ''} ${record.name?.lastName ?? ''}`;
  }

  if (isDefined(labelIdentifierFieldMetadataItem?.name)) {
    return record[labelIdentifierFieldMetadataItem.name] ?? '';
  }

  return '';
};
