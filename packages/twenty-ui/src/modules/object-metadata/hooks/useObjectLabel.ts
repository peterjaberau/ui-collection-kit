import { ObjectMetadataItem } from '@twenty-modules/object-metadata/types/ObjectMetadataItem';

export const useObjectLabel = (objectMetadataItem: ObjectMetadataItem) => {
  return objectMetadataItem?.labelSingular ?? '';
};
