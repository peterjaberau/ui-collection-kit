import { ObjectMetadataItem } from '@twenty-modules/object-metadata/types/ObjectMetadataItem';
import { View } from '@twenty-modules/views/types/View';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

type ReturnType = {
  namePlural: string;
  view: Pick<View, 'id' | 'name' | 'objectMetadataId'>;
};

export const getObjectMetadataNamePluralFromViewId = (
  view: Pick<View, 'id' | 'name' | 'objectMetadataId'>,
  objectMetadataItems: ObjectMetadataItem[],
): ReturnType => {
  const objectMetadataItem = objectMetadataItems.find(
    (objectMetadataItem) => objectMetadataItem.id === view.objectMetadataId,
  );

  if (!isDefined(objectMetadataItem)) {
    throw new Error(
      `Object metadata item not found for id ${view.objectMetadataId}`,
    );
  }

  const { namePlural } = objectMetadataItem;

  return {
    namePlural,
    view,
  };
};
