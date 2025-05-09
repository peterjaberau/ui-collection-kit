import { useRecoilValue } from 'recoil';

import { objectMetadataItemsState } from '@twenty-modules/object-metadata/states/objectMetadataItemsState';

export const useObjectMetadataItems = () => {
  const objectMetadataItems = useRecoilValue(objectMetadataItemsState);

  return {
    objectMetadataItems,
  };
};
