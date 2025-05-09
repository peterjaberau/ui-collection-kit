import { DropdownMenuItemsContainer } from '@twenty-modules/ui/layout/dropdown/components/DropdownMenuItemsContainer';

import { objectFilterDropdownSearchInputComponentState } from '@twenty-modules/object-record/object-filter-dropdown/states/objectFilterDropdownSearchInputComponentState';

import { useRecordIndexContextOrThrow } from '@twenty-modules/object-record/record-index/contexts/RecordIndexContext';
import { visibleTableColumnsComponentSelector } from '@twenty-modules/object-record/record-table/states/selectors/visibleTableColumnsComponentSelector';
import { DropdownMenuSeparator } from '@twenty-modules/ui/layout/dropdown/components/DropdownMenuSeparator';
import { SelectableList } from '@twenty-modules/ui/layout/selectable-list/components/SelectableList';
import { SelectableListItem } from '@twenty-modules/ui/layout/selectable-list/components/SelectableListItem';
import { useSelectableList } from '@twenty-modules/ui/layout/selectable-list/hooks/useSelectableList';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';

import { FieldMetadataItem } from '@twenty-modules/object-metadata/types/FieldMetadataItem';
import { getFilterTypeFromFieldType } from '@twenty-modules/object-metadata/utils/formatFieldMetadataItemsAsFilterDefinitions';
import { AdvancedFilterFieldSelectSearchInput } from '@twenty-modules/object-record/advanced-filter/components/AdvancedFilterFieldSelectSearchInput';
import { useAdvancedFilterFieldSelectDropdown } from '@twenty-modules/object-record/advanced-filter/hooks/useAdvancedFilterFieldSelectDropdown';
import { useSelectFieldUsedInAdvancedFilterDropdown } from '@twenty-modules/object-record/advanced-filter/hooks/useSelectFieldUsedInAdvancedFilterDropdown';
import { ObjectFilterDropdownFilterSelectMenuItemV2 } from '@twenty-modules/object-record/object-filter-dropdown/components/ObjectFilterDropdownFilterSelectMenuItemV2';
import { fieldMetadataItemIdUsedInDropdownComponentState } from '@twenty-modules/object-record/object-filter-dropdown/states/fieldMetadataItemIdUsedInDropdownComponentState';
import { objectFilterDropdownIsSelectingCompositeFieldComponentState } from '@twenty-modules/object-record/object-filter-dropdown/states/objectFilterDropdownIsSelectingCompositeFieldComponentState';
import { objectFilterDropdownSubMenuFieldTypeComponentState } from '@twenty-modules/object-record/object-filter-dropdown/states/objectFilterDropdownSubMenuFieldTypeComponentState';
import { isCompositeFieldType } from '@twenty-modules/object-record/object-filter-dropdown/utils/isCompositeFieldType';
import { useFilterableFieldMetadataItemsInRecordIndexContext } from '@twenty-modules/object-record/record-filter/hooks/useFilterableFieldMetadataItemsInRecordIndexContext';
import { useRecoilComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentStateV2';
import { useSetRecoilComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useSetRecoilComponentStateV2';

type AdvancedFilterFieldSelectMenuProps = {
  recordFilterId: string;
};

export const AdvancedFilterFieldSelectMenu = ({
  recordFilterId,
}: AdvancedFilterFieldSelectMenuProps) => {
  const { recordIndexId } = useRecordIndexContextOrThrow();

  const {
    closeAdvancedFilterFieldSelectDropdown,
    advancedFilterFieldSelectDropdownId,
  } = useAdvancedFilterFieldSelectDropdown(recordFilterId);

  const [objectFilterDropdownSearchInput] = useRecoilComponentStateV2(
    objectFilterDropdownSearchInputComponentState,
  );

  const { filterableFieldMetadataItems } =
    useFilterableFieldMetadataItemsInRecordIndexContext();

  const visibleTableColumns = useRecoilComponentValueV2(
    visibleTableColumnsComponentSelector,
    recordIndexId,
  );
  const visibleColumnsIds = visibleTableColumns.map(
    (column) => column.fieldMetadataId,
  );

  const filteredSearchInputFieldMetadataItems =
    filterableFieldMetadataItems.filter((fieldMetadataItem) =>
      fieldMetadataItem.label
        .toLocaleLowerCase()
        .includes(objectFilterDropdownSearchInput.toLocaleLowerCase()),
    );

  const visibleColumnsFieldMetadataItems = filteredSearchInputFieldMetadataItems
    .sort((a, b) => {
      return visibleColumnsIds.indexOf(a.id) - visibleColumnsIds.indexOf(b.id);
    })
    .filter((fieldMetadataItem) =>
      visibleColumnsIds.includes(fieldMetadataItem.id),
    );

  const hiddenColumnsFieldMetadataItems = filteredSearchInputFieldMetadataItems
    .sort((a, b) => a.label.localeCompare(b.label))
    .filter(
      (fieldMetadataItem) => !visibleColumnsIds.includes(fieldMetadataItem.id),
    );

  const { resetSelectedItem } = useSelectableList(
    advancedFilterFieldSelectDropdownId,
  );

  const { selectFieldUsedInAdvancedFilterDropdown } =
    useSelectFieldUsedInAdvancedFilterDropdown();

  const [, setObjectFilterDropdownSubMenuFieldType] = useRecoilComponentStateV2(
    objectFilterDropdownSubMenuFieldTypeComponentState,
  );

  const [, setObjectFilterDropdownIsSelectingCompositeField] =
    useRecoilComponentStateV2(
      objectFilterDropdownIsSelectingCompositeFieldComponentState,
    );

  const setFieldMetadataItemIdUsedInDropdown = useSetRecoilComponentStateV2(
    fieldMetadataItemIdUsedInDropdownComponentState,
  );

  const handleFieldMetadataItemSelect = (
    selectedFieldMetadataItem: FieldMetadataItem,
  ) => {
    resetSelectedItem();

    const filterType = getFilterTypeFromFieldType(
      selectedFieldMetadataItem.type,
    );

    if (isCompositeFieldType(filterType)) {
      setObjectFilterDropdownSubMenuFieldType(filterType);

      setFieldMetadataItemIdUsedInDropdown(selectedFieldMetadataItem.id);
      setObjectFilterDropdownIsSelectingCompositeField(true);
    } else {
      selectFieldUsedInAdvancedFilterDropdown({
        fieldMetadataItemId: selectedFieldMetadataItem.id,
        recordFilterId,
      });

      closeAdvancedFilterFieldSelectDropdown();
    }
  };

  const shouldShowSeparator =
    visibleColumnsFieldMetadataItems.length > 0 &&
    hiddenColumnsFieldMetadataItems.length > 0;

  const selectableItemIdArray = [
    ...visibleColumnsFieldMetadataItems.map(
      (fieldMetadataItem) => fieldMetadataItem.id,
    ),
    ...hiddenColumnsFieldMetadataItems.map(
      (fieldMetadataItem) => fieldMetadataItem.id,
    ),
  ];

  return (
    <>
      <AdvancedFilterFieldSelectSearchInput />
      <SelectableList
        hotkeyScope={advancedFilterFieldSelectDropdownId}
        selectableItemIdArray={selectableItemIdArray}
        selectableListInstanceId={advancedFilterFieldSelectDropdownId}
      >
        <DropdownMenuItemsContainer>
          {visibleColumnsFieldMetadataItems.map(
            (visibleFieldMetadataItem, index) => (
              <SelectableListItem
                itemId={visibleFieldMetadataItem.id}
                key={`visible-select-filter-${index}`}
                onEnter={() => {
                  handleFieldMetadataItemSelect(visibleFieldMetadataItem);
                }}
              >
                <ObjectFilterDropdownFilterSelectMenuItemV2
                  fieldMetadataItemToSelect={visibleFieldMetadataItem}
                  onClick={handleFieldMetadataItemSelect}
                />
              </SelectableListItem>
            ),
          )}
          {shouldShowSeparator && <DropdownMenuSeparator />}
          {hiddenColumnsFieldMetadataItems.map(
            (hiddenFieldMetadataItem, index) => (
              <SelectableListItem
                itemId={hiddenFieldMetadataItem.id}
                key={`hidden-select-filter-${index}`}
                onEnter={() => {
                  handleFieldMetadataItemSelect(hiddenFieldMetadataItem);
                }}
              >
                <ObjectFilterDropdownFilterSelectMenuItemV2
                  fieldMetadataItemToSelect={hiddenFieldMetadataItem}
                  onClick={handleFieldMetadataItemSelect}
                />
              </SelectableListItem>
            ),
          )}
        </DropdownMenuItemsContainer>
      </SelectableList>
    </>
  );
};
