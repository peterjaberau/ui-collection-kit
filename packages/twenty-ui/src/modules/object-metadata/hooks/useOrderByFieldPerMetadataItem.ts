import { ObjectMetadataItem } from '@twenty-modules/object-metadata/types/ObjectMetadataItem';
import { getOrderByFieldForObjectMetadataItem } from '@twenty-modules/object-metadata/utils/getObjectOrderByField';
import { capitalize, isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const useOrderByFieldPerMetadataItem = ({
  objectMetadataItems,
}: {
  objectMetadataItems: ObjectMetadataItem[];
}) => {
  const orderByFieldPerMetadataItem = Object.fromEntries(
    objectMetadataItems
      .map((objectMetadataItem) => {
        const orderByField =
          getOrderByFieldForObjectMetadataItem(objectMetadataItem);

        return [
          `orderBy${capitalize(objectMetadataItem.nameSingular)}`,
          [...orderByField],
        ];
      })
      .filter(isDefined),
  );

  return {
    orderByFieldPerMetadataItem,
  };
};
