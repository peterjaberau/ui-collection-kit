import { useObjectMetadataItemById } from '@twenty-modules/object-metadata/hooks/useObjectMetadataItemById';
import { availableFieldMetadataItemsForFilterFamilySelector } from '@twenty-modules/object-metadata/states/availableFieldMetadataItemsForFilterFamilySelector';
import { FieldMetadataItem } from '@twenty-modules/object-metadata/types/FieldMetadataItem';
import { useGetCurrentViewOnly } from '@twenty-modules/views/hooks/useGetCurrentViewOnly';
import { useRecoilValue } from 'recoil';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const useDefaultFieldMetadataItemForFilter = () => {
  const { currentView } = useGetCurrentViewOnly();

  const objectMetadataId = currentView?.objectMetadataId;

  if (!isDefined(objectMetadataId)) {
    throw new Error('Object metadata id is missing from current view');
  }

  const { objectMetadataItem } = useObjectMetadataItemById({
    objectId: objectMetadataId,
  });

  const availableFieldMetadataItemsForFilter = useRecoilValue(
    availableFieldMetadataItemsForFilterFamilySelector({
      objectMetadataItemId: objectMetadataId,
    }),
  );

  const fieldMetadataItemForLabelIdentifier =
    availableFieldMetadataItemsForFilter.find(
      (fieldMetadataItem) =>
        fieldMetadataItem.id ===
        objectMetadataItem?.labelIdentifierFieldMetadataId,
    );

  const firstFieldMetadataItem = availableFieldMetadataItemsForFilter?.[0] as
    | FieldMetadataItem
    | undefined;

  const defaultFieldMetadataItemForFilter =
    fieldMetadataItemForLabelIdentifier ?? firstFieldMetadataItem;

  return { defaultFieldMetadataItemForFilter };
};
