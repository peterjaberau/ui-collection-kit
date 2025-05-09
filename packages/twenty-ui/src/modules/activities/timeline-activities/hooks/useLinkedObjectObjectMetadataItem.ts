import { useRecoilValue } from 'recoil';

import { objectMetadataItemsState } from '@twenty-modules/object-metadata/states/objectMetadataItemsState';
import { ObjectMetadataItem } from '@twenty-modules/object-metadata/types/ObjectMetadataItem';

export const useLinkedObjectObjectMetadataItem = (id: string | null) => {
  const objectMetadataItems: ObjectMetadataItem[] = useRecoilValue(
    objectMetadataItemsState,
  );

  if (id === null) {
    return null;
  }
  return (
    objectMetadataItems.find(
      (objectMetadataItem) => objectMetadataItem.id === id,
    ) ?? null
  );
};
