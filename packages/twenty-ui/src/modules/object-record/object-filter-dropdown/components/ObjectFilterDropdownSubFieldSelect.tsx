import { FieldMetadataItem } from '@twenty-modules/object-metadata/types/FieldMetadataItem';
import { getFilterTypeFromFieldType } from '@twenty-modules/object-metadata/utils/formatFieldMetadataItemsAsFilterDefinitions';
import { StyledInput } from '@twenty-modules/object-record/object-filter-dropdown/components/ObjectFilterDropdownFieldSelect';
import { FILTER_FIELD_LIST_ID } from '@twenty-modules/object-record/object-filter-dropdown/constants/FilterFieldListId';
import { fieldMetadataItemIdUsedInDropdownComponentState } from '@twenty-modules/object-record/object-filter-dropdown/states/fieldMetadataItemIdUsedInDropdownComponentState';
import { fieldMetadataItemUsedInDropdownComponentSelector } from '@twenty-modules/object-record/object-filter-dropdown/states/fieldMetadataItemUsedInDropdownComponentSelector';
import { objectFilterDropdownCurrentRecordFilterComponentState } from '@twenty-modules/object-record/object-filter-dropdown/states/objectFilterDropdownCurrentRecordFilterComponentState';
import { objectFilterDropdownFilterIsSelectedComponentState } from '@twenty-modules/object-record/object-filter-dropdown/states/objectFilterDropdownFilterIsSelectedComponentState';
import { objectFilterDropdownIsSelectingCompositeFieldComponentState } from '@twenty-modules/object-record/object-filter-dropdown/states/objectFilterDropdownIsSelectingCompositeFieldComponentState';
import { objectFilterDropdownSearchInputComponentState } from '@twenty-modules/object-record/object-filter-dropdown/states/objectFilterDropdownSearchInputComponentState';
import { objectFilterDropdownSubMenuFieldTypeComponentState } from '@twenty-modules/object-record/object-filter-dropdown/states/objectFilterDropdownSubMenuFieldTypeComponentState';
import { selectedOperandInDropdownComponentState } from '@twenty-modules/object-record/object-filter-dropdown/states/selectedOperandInDropdownComponentState';
import { subFieldNameUsedInDropdownComponentState } from '@twenty-modules/object-record/object-filter-dropdown/states/subFieldNameUsedInDropdownComponentState';
import { FiltersHotkeyScope } from '@twenty-modules/object-record/object-filter-dropdown/types/FiltersHotkeyScope';
import { getCompositeSubFieldLabel } from '@twenty-modules/object-record/object-filter-dropdown/utils/getCompositeSubFieldLabel';
import { getFilterableFieldTypeLabel } from '@twenty-modules/object-record/object-filter-dropdown/utils/getFilterableFieldTypeLabel';
import { ICON_NAME_BY_SUB_FIELD } from '@twenty-modules/object-record/record-filter/constants/IconNameBySubField';
import { currentRecordFiltersComponentState } from '@twenty-modules/object-record/record-filter/states/currentRecordFiltersComponentState';
import { areCompositeTypeSubFieldsFilterable } from '@twenty-modules/object-record/record-filter/utils/areCompositeTypeSubFieldsFilterable';
import { findDuplicateRecordFilterInNonAdvancedRecordFilters } from '@twenty-modules/object-record/record-filter/utils/findDuplicateRecordFilterInNonAdvancedRecordFilters';
import { getRecordFilterOperands } from '@twenty-modules/object-record/record-filter/utils/getRecordFilterOperands';
import { isCompositeTypeFilterableByAnySubField } from '@twenty-modules/object-record/record-filter/utils/isCompositeTypeFilterableByAnySubField';
import { SETTINGS_COMPOSITE_FIELD_TYPE_CONFIGS } from '@twenty-modules/settings/data-model/constants/SettingsCompositeFieldTypeConfigs';
import { DropdownMenuHeader } from '@twenty-modules/ui/layout/dropdown/components/DropdownMenuHeader/DropdownMenuHeader';
import { DropdownMenuHeaderLeftComponent } from '@twenty-modules/ui/layout/dropdown/components/DropdownMenuHeader/internal/DropdownMenuHeaderLeftComponent';
import { DropdownMenuItemsContainer } from '@twenty-modules/ui/layout/dropdown/components/DropdownMenuItemsContainer';
import { SelectableList } from '@twenty-modules/ui/layout/selectable-list/components/SelectableList';
import { SelectableListItem } from '@twenty-modules/ui/layout/selectable-list/components/SelectableListItem';
import { selectedItemIdComponentState } from '@twenty-modules/ui/layout/selectable-list/states/selectedItemIdComponentState';
import { useRecoilComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentStateV2';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';
import { useSetRecoilComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useSetRecoilComponentStateV2';
import { useState } from 'react';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';
import { IconApps, IconChevronLeft, useIcons } from '@twenty-ui/display';
import { MenuItem } from '@twenty-ui/navigation';

export const ObjectFilterDropdownSubFieldSelect = () => {
  const [searchText, setSearchText] = useState('');

  const { getIcon } = useIcons();

  const fieldMetadataItemUsedInDropdown = useRecoilComponentValueV2(
    fieldMetadataItemUsedInDropdownComponentSelector,
  );

  const setSubFieldNameUsedInDropdown = useSetRecoilComponentStateV2(
    subFieldNameUsedInDropdownComponentState,
  );

  const [, setObjectFilterDropdownFilterIsSelected] = useRecoilComponentStateV2(
    objectFilterDropdownFilterIsSelectedComponentState,
  );

  const [, setObjectFilterDropdownIsSelectingCompositeField] =
    useRecoilComponentStateV2(
      objectFilterDropdownIsSelectingCompositeFieldComponentState,
    );

  const [
    objectFilterDropdownSubMenuFieldType,
    setObjectFilterDropdownSubMenuFieldType,
  ] = useRecoilComponentStateV2(
    objectFilterDropdownSubMenuFieldTypeComponentState,
  );

  const setFieldMetadataItemIdUsedInDropdown = useSetRecoilComponentStateV2(
    fieldMetadataItemIdUsedInDropdownComponentState,
  );

  const setSelectedOperandInDropdown = useSetRecoilComponentStateV2(
    selectedOperandInDropdownComponentState,
  );

  const setObjectFilterDropdownSearchInput = useSetRecoilComponentStateV2(
    objectFilterDropdownSearchInputComponentState,
  );

  const currentRecordFilters = useRecoilComponentValueV2(
    currentRecordFiltersComponentState,
  );

  const setObjectFilterDropdownCurrentRecordFilter =
    useSetRecoilComponentStateV2(
      objectFilterDropdownCurrentRecordFilterComponentState,
    );

  const handleSelectFilter = (
    fieldMetadataItem: FieldMetadataItem | null | undefined,
    subFieldName?: string | null | undefined,
  ) => {
    if (!isDefined(fieldMetadataItem)) {
      return;
    }

    const type = getFilterTypeFromFieldType(fieldMetadataItem.type);

    const defaultOperand = getRecordFilterOperands({
      filterType: type,
      subFieldName: subFieldName,
    })[0];

    setFieldMetadataItemIdUsedInDropdown(fieldMetadataItem.id);

    setSubFieldNameUsedInDropdown(subFieldName);

    setObjectFilterDropdownSearchInput('');

    setObjectFilterDropdownFilterIsSelected(true);

    const duplicateFilterInCurrentRecordFilters =
      findDuplicateRecordFilterInNonAdvancedRecordFilters({
        recordFilters: currentRecordFilters,
        fieldMetadataItemId: fieldMetadataItem.id,
        subFieldName,
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

  const handleSubMenuBack = () => {
    setFieldMetadataItemIdUsedInDropdown(null);
    setObjectFilterDropdownSubMenuFieldType(null);
    setObjectFilterDropdownIsSelectingCompositeField(false);
    setObjectFilterDropdownFilterIsSelected(false);
    setSubFieldNameUsedInDropdown(null);
  };

  const selectedItemId = useRecoilComponentValueV2(
    selectedItemIdComponentState,
    FILTER_FIELD_LIST_ID,
  );

  if (!isDefined(objectFilterDropdownSubMenuFieldType)) {
    return null;
  }

  const options = SETTINGS_COMPOSITE_FIELD_TYPE_CONFIGS[
    objectFilterDropdownSubMenuFieldType
  ].filterableSubFields
    .sort((a, b) => a.localeCompare(b))
    .filter((item) =>
      item.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()),
    );

  const subFieldsAreFilterable =
    isDefined(fieldMetadataItemUsedInDropdown) &&
    areCompositeTypeSubFieldsFilterable(fieldMetadataItemUsedInDropdown.type);

  const compositeFieldTypeFilterableByAnySubField =
    isDefined(fieldMetadataItemUsedInDropdown) &&
    isCompositeTypeFilterableByAnySubField(
      fieldMetadataItemUsedInDropdown.type,
    );

  return (
    <>
      <DropdownMenuHeader
        StartComponent={
          <DropdownMenuHeaderLeftComponent
            onClick={handleSubMenuBack}
            Icon={IconChevronLeft}
          />
        }
      >
        {getFilterableFieldTypeLabel(objectFilterDropdownSubMenuFieldType)}
      </DropdownMenuHeader>
      <StyledInput
        value={searchText}
        autoFocus
        placeholder="Search fields"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setSearchText(event.target.value)
        }
      />
      <DropdownMenuItemsContainer>
        <SelectableList
          hotkeyScope={FiltersHotkeyScope.ObjectFilterDropdownButton}
          selectableItemIdArray={['-1', ...options]}
          selectableListInstanceId={FILTER_FIELD_LIST_ID}
        >
          {compositeFieldTypeFilterableByAnySubField ? (
            <SelectableListItem
              itemId={'-1'}
              key={`select-filter-${-1}`}
              onEnter={() => {
                handleSelectFilter(fieldMetadataItemUsedInDropdown);
              }}
            >
              <MenuItem
                key={`select-filter-${-1}`}
                testId={`select-filter-${-1}`}
                onClick={() => {
                  handleSelectFilter(fieldMetadataItemUsedInDropdown);
                }}
                LeftIcon={IconApps}
                text={`Any ${getFilterableFieldTypeLabel(objectFilterDropdownSubMenuFieldType)} field`}
              />
            </SelectableListItem>
          ) : (
            <></>
          )}
          {subFieldsAreFilterable &&
            options.map((subFieldName, index) => (
              <SelectableListItem
                itemId={subFieldName}
                key={`select-filter-${index}`}
                onEnter={() => {
                  handleSelectFilter(
                    fieldMetadataItemUsedInDropdown,
                    subFieldName,
                  );
                }}
              >
                <MenuItem
                  focused={selectedItemId === subFieldName}
                  key={`select-filter-${index}`}
                  testId={`select-filter-${index}`}
                  onClick={() => {
                    if (isDefined(fieldMetadataItemUsedInDropdown)) {
                      handleSelectFilter(
                        fieldMetadataItemUsedInDropdown,
                        subFieldName,
                      );
                    }
                  }}
                  text={getCompositeSubFieldLabel(
                    objectFilterDropdownSubMenuFieldType,
                    subFieldName,
                  )}
                  LeftIcon={getIcon(
                    ICON_NAME_BY_SUB_FIELD[subFieldName] ??
                      fieldMetadataItemUsedInDropdown?.icon,
                  )}
                />
              </SelectableListItem>
            ))}
        </SelectableList>
      </DropdownMenuItemsContainer>
    </>
  );
};
