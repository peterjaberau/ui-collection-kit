import { objectMetadataItemsState } from '@twenty-modules/object-metadata/states/objectMetadataItemsState';
import { FieldMetadataItem } from '@twenty-modules/object-metadata/types/FieldMetadataItem';
import { ObjectFilterDropdownComponentInstanceContext } from '@twenty-modules/object-record/object-filter-dropdown/states/contexts/ObjectFilterDropdownComponentInstanceContext';
import { fieldMetadataItemIdUsedInDropdownComponentState } from '@twenty-modules/object-record/object-filter-dropdown/states/fieldMetadataItemIdUsedInDropdownComponentState';
import { createComponentSelectorV2 } from '@twenty-modules/ui/utilities/state/component-state/utils/createComponentSelectorV2';

export const fieldMetadataItemUsedInDropdownComponentSelector =
  createComponentSelectorV2<FieldMetadataItem | null | undefined>({
    key: 'fieldMetadataItemUsedInDropdownComponentSelector',
    get:
      ({ instanceId }) =>
      ({ get }) => {
        const fieldMetadataItemIdUsedInDropdown = get(
          fieldMetadataItemIdUsedInDropdownComponentState.atomFamily({
            instanceId,
          }),
        );

        const objectMetadataItems = get(objectMetadataItemsState);

        const correspondingFieldMetadataItem = objectMetadataItems
          .flatMap((objectMetadataItem) => objectMetadataItem.fields)
          .find(
            (fieldMetadataItem) =>
              fieldMetadataItem.id === fieldMetadataItemIdUsedInDropdown,
          );

        return correspondingFieldMetadataItem;
      },
    componentInstanceContext: ObjectFilterDropdownComponentInstanceContext,
  });
