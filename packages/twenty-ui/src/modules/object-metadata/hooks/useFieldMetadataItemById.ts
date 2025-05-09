import { objectMetadataItemsState } from '@twenty-modules/object-metadata/states/objectMetadataItemsState';
import { useRecoilValue } from 'recoil';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const useFieldMetadataItemById = (fieldMetadataId: string) => {
  const objectMetadataItems = useRecoilValue(objectMetadataItemsState);

  const fieldMetadataItem = objectMetadataItems
    .flatMap((objectMetadataItem) => objectMetadataItem.fields)
    .find((field) => field.id === fieldMetadataId);

  if (!isDefined(fieldMetadataItem)) {
    throw new Error(`Field metadata item not found for id ${fieldMetadataId}`);
  }

  return { fieldMetadataItem };
};
