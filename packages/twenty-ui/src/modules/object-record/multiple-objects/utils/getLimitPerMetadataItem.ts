import { ObjectMetadataItem } from '@twenty-modules/object-metadata/types/ObjectMetadataItem';
import { capitalize } from '@ui-collection-kit/twenty-shared/src/utils';

export const getLimitPerMetadataItem = (
  objectMetadataItems: Pick<ObjectMetadataItem, 'nameSingular'>[],
  limit: number,
) => {
  return Object.fromEntries(
    objectMetadataItems.map(({ nameSingular }) => {
      return [`limit${capitalize(nameSingular)}`, limit];
    }),
  );
};
