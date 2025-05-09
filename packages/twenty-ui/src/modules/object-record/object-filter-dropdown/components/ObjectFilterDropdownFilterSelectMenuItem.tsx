import { fieldMetadataItemIdUsedInDropdownComponentState } from '@twenty-modules/object-record/object-filter-dropdown/states/fieldMetadataItemIdUsedInDropdownComponentState';
import { objectFilterDropdownFilterIsSelectedComponentState } from '@twenty-modules/object-record/object-filter-dropdown/states/objectFilterDropdownFilterIsSelectedComponentState';

import { objectFilterDropdownIsSelectingCompositeFieldComponentState } from '@twenty-modules/object-record/object-filter-dropdown/states/objectFilterDropdownIsSelectingCompositeFieldComponentState';
import { objectFilterDropdownSubMenuFieldTypeComponentState } from '@twenty-modules/object-record/object-filter-dropdown/states/objectFilterDropdownSubMenuFieldTypeComponentState';
import { selectedOperandInDropdownComponentState } from '@twenty-modules/object-record/object-filter-dropdown/states/selectedOperandInDropdownComponentState';

import { FieldMetadataItem } from '@twenty-modules/object-metadata/types/FieldMetadataItem';
import { getFilterTypeFromFieldType } from '@twenty-modules/object-metadata/utils/formatFieldMetadataItemsAsFilterDefinitions';
import { FILTER_FIELD_LIST_ID } from '@twenty-modules/object-record/object-filter-dropdown/constants/FilterFieldListId';
import { objectFilterDropdownCurrentRecordFilterComponentState } from '@twenty-modules/object-record/object-filter-dropdown/states/objectFilterDropdownCurrentRecordFilterComponentState';
import { isCompositeFieldType } from '@twenty-modules/object-record/object-filter-dropdown/utils/isCompositeFieldType';
import { currentRecordFiltersComponentState } from '@twenty-modules/object-record/record-filter/states/currentRecordFiltersComponentState';
import { findDuplicateRecordFilterInNonAdvancedRecordFilters } from '@twenty-modules/object-record/record-filter/utils/findDuplicateRecordFilterInNonAdvancedRecordFilters';
import { getRecordFilterOperands } from '@twenty-modules/object-record/record-filter/utils/getRecordFilterOperands';
import { SingleRecordPickerHotkeyScope } from '@twenty-modules/object-record/record-picker/single-record-picker/types/SingleRecordPickerHotkeyScope';
import { SelectableListItem } from '@twenty-modules/ui/layout/selectable-list/components/SelectableListItem';
import { useSelectableList } from '@twenty-modules/ui/layout/selectable-list/hooks/useSelectableList';
import { isSelectedItemIdComponentFamilySelector } from '@twenty-modules/ui/layout/selectable-list/states/selectors/isSelectedItemIdComponentFamilySelector';
import { useSetHotkeyScope } from '@twenty-modules/ui/utilities/hotkey/hooks/useSetHotkeyScope';
import { useRecoilComponentFamilyValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentFamilyValueV2';
import { useRecoilComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentStateV2';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';
import { useSetRecoilComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useSetRecoilComponentStateV2';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';
import { useIcons } from '@twenty-ui/display';
import { MenuItem } from '@twenty-ui/navigation';

export type ObjectFilterDropdownFilterSelectMenuItemProps = {
  fieldMetadataItemToSelect: FieldMetadataItem;
};

export const ObjectFilterDropdownFilterSelectMenuItem = ({
  fieldMetadataItemToSelect,
}: ObjectFilterDropdownFilterSelectMenuItemProps) => {
  const setFieldMetadataItemIdUsedInDropdown = useSetRecoilComponentStateV2(
    fieldMetadataItemIdUsedInDropdownComponentState,
  );

  const [, setObjectFilterDropdownSubMenuFieldType] = useRecoilComponentStateV2(
    objectFilterDropdownSubMenuFieldTypeComponentState,
  );

  const [, setObjectFilterDropdownIsSelectingCompositeField] =
    useRecoilComponentStateV2(
      objectFilterDropdownIsSelectingCompositeFieldComponentState,
    );

  const [, setObjectFilterDropdownFilterIsSelected] = useRecoilComponentStateV2(
    objectFilterDropdownFilterIsSelectedComponentState,
  );

  const { resetSelectedItem } = useSelectableList(FILTER_FIELD_LIST_ID);

  const isSelectedItem = useRecoilComponentFamilyValueV2(
    isSelectedItemIdComponentFamilySelector,
    fieldMetadataItemToSelect.id,
  );

  const setSelectedOperandInDropdown = useSetRecoilComponentStateV2(
    selectedOperandInDropdownComponentState,
  );

  const setHotkeyScope = useSetHotkeyScope();

  const currentRecordFilters = useRecoilComponentValueV2(
    currentRecordFiltersComponentState,
  );

  const setObjectFilterDropdownCurrentRecordFilter =
    useSetRecoilComponentStateV2(
      objectFilterDropdownCurrentRecordFilterComponentState,
    );

  const handleSelectFilter = (fieldMetadataItem: FieldMetadataItem) => {
    setFieldMetadataItemIdUsedInDropdown(fieldMetadataItem.id);

    const filterType = getFilterTypeFromFieldType(fieldMetadataItem.type);

    if (filterType === 'RELATION' || filterType === 'SELECT') {
      setHotkeyScope(SingleRecordPickerHotkeyScope.SingleRecordPicker);
    }

    const defaultOperand = getRecordFilterOperands({
      filterType,
    })[0];

    setObjectFilterDropdownFilterIsSelected(true);

    const duplicateFilterInCurrentRecordFilters =
      findDuplicateRecordFilterInNonAdvancedRecordFilters({
        recordFilters: currentRecordFilters,
        fieldMetadataItemId: fieldMetadataItem.id,
      });

    const filterIsAlreadyInCurrentRecordFilters = isDefined(
      duplicateFilterInCurrentRecordFilters,
    );

    if (filterIsAlreadyInCurrentRecordFilters) {
      setObjectFilterDropdownCurrentRecordFilter(
        duplicateFilterInCurrentRecordFilters,
      );

      setSelectedOperandInDropdown(
        duplicateFilterInCurrentRecordFilters.operand,
      );
    } else {
      setSelectedOperandInDropdown(defaultOperand);
    }
  };

  const { getIcon } = useIcons();

  const Icon = getIcon(fieldMetadataItemToSelect.icon);

  const shouldShowSubMenu = isCompositeFieldType(
    fieldMetadataItemToSelect.type,
  );

  const handleClick = () => {
    resetSelectedItem();

    const filterType = getFilterTypeFromFieldType(
      fieldMetadataItemToSelect.type,
    );

    if (isCompositeFieldType(filterType)) {
      setObjectFilterDropdownSubMenuFieldType(filterType);

      setFieldMetadataItemIdUsedInDropdown(fieldMetadataItemToSelect.id);
      setObjectFilterDropdownIsSelectingCompositeField(true);
    } else {
      handleSelectFilter(fieldMetadataItemToSelect);
    }
  };

  return (
    <SelectableListItem
      itemId={fieldMetadataItemToSelect.id}
      onEnter={handleClick}
    >
      <MenuItem
        focused={isSelectedItem}
        onClick={handleClick}
        LeftIcon={Icon}
        text={fieldMetadataItemToSelect.label}
        hasSubMenu={shouldShowSubMenu}
      />
    </SelectableListItem>
  );
};
