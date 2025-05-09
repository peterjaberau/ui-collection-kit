import { objectMetadataItemsState } from '@twenty-modules/object-metadata/states/objectMetadataItemsState';
import { filterSortableFieldMetadataItems } from '@twenty-modules/object-metadata/utils/filterSortableFieldMetadataItems';
import { selectorFamily } from 'recoil';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const availableFieldMetadataItemsForSortFamilySelector = selectorFamily({
  key: 'availableFieldMetadataItemsForSortFamilySelector',
  get:
    ({ objectMetadataItemId }: { objectMetadataItemId: string }) =>
    ({ get }) => {
      const objectMetadataItems = get(objectMetadataItemsState);

      const objectMetadataItem = objectMetadataItems.find(
        (item) => item.id === objectMetadataItemId,
      );

      if (!isDefined(objectMetadataItem)) {
        return [];
      }

      const availableFieldMetadataItemsForSort =
        objectMetadataItem.fields.filter(filterSortableFieldMetadataItems);

      return availableFieldMetadataItemsForSort;
    },
});
