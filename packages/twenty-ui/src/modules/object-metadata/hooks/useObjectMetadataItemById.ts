import { useRecoilValue } from 'recoil';

import { objectMetadataItemsState } from '@twenty-modules/object-metadata/states/objectMetadataItemsState';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const useObjectMetadataItemById = ({
  objectId,
}: {
  objectId: string;
}) => {
  const objectMetadataItems = useRecoilValue(objectMetadataItemsState);

  const objectMetadataItem = objectMetadataItems.find(
    (objectMetadataItem) => objectMetadataItem.id === objectId,
  );

  if (!isDefined(objectMetadataItem)) {
    throw new Error(`Object metadata item not found for id ${objectId}`);
  }

  return {
    objectMetadataItem,
  };
};
