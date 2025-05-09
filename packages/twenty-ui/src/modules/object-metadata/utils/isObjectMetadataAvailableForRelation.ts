import { CoreObjectNameSingular } from '@twenty-modules/object-metadata/types/CoreObjectNameSingular';
import { ObjectMetadataItem } from '@twenty-modules/object-metadata/types/ObjectMetadataItem';

export const isObjectMetadataAvailableForRelation = (
  objectMetadataItem: Pick<
    ObjectMetadataItem,
    'isSystem' | 'nameSingular' | 'isRemote'
  >,
) => {
  return (
    (!objectMetadataItem.isSystem ||
      objectMetadataItem.nameSingular ===
        CoreObjectNameSingular.WorkspaceMember) &&
    !objectMetadataItem.isRemote
  );
};
