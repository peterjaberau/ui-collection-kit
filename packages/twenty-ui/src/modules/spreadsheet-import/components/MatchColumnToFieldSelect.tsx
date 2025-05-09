import { useState } from 'react';
import { ReadonlyDeep } from 'type-fest';

import { FieldMetadataItem } from '@twenty-modules/object-metadata/types/FieldMetadataItem';
import { isCompositeFieldType } from '@twenty-modules/object-record/object-filter-dropdown/utils/isCompositeFieldType';
import { getSubFieldOptionKey } from '@twenty-modules/object-record/spreadsheet-import/utils/getSubFieldOptionKey';
import { MatchColumnSelectFieldSelectDropdownContent } from '@twenty-modules/spreadsheet-import/components/MatchColumnSelectFieldSelectDropdownContent';
import { MatchColumnSelectSubFieldSelectDropdownContent } from '@twenty-modules/spreadsheet-import/components/MatchColumnSelectSubFieldSelectDropdownContent';
import { DO_NOT_IMPORT_OPTION_KEY } from '@twenty-modules/spreadsheet-import/constants/DoNotImportOptionKey';
import { Dropdown } from '@twenty-modules/ui/layout/dropdown/components/Dropdown';
import { useDropdown } from '@twenty-modules/ui/layout/dropdown/hooks/useDropdown';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';
import { SelectOption } from '@twenty-ui/input';
import { MenuItem } from '@twenty-ui/navigation';

interface MatchColumnToFieldSelectProps {
  columnIndex: string;
  onChange: (value: ReadonlyDeep<SelectOption> | null) => void;
  value?: ReadonlyDeep<SelectOption>;
  options: readonly ReadonlyDeep<SelectOption>[];
  placeholder?: string;
}

export const MatchColumnToFieldSelect = ({
  onChange,
  value,
  options,
  placeholder,
  columnIndex,
}: MatchColumnToFieldSelectProps) => {
  const dropdownId = `match-column-select-v2-dropdown-${columnIndex}`;

  const { closeDropdown } = useDropdown(dropdownId);

  const [selectedFieldMetadataItem, setSelectedFieldMetadataItem] =
    useState<FieldMetadataItem | null>(null);

  const handleFieldMetadataItemSelect = (
    selectedFieldMetadataItem: FieldMetadataItem,
  ) => {
    setSelectedFieldMetadataItem(selectedFieldMetadataItem);

    if (!isCompositeFieldType(selectedFieldMetadataItem.type)) {
      const correspondingOption = options.find(
        (option) => option.value === selectedFieldMetadataItem.name,
      );

      if (isDefined(correspondingOption)) {
        setSelectedFieldMetadataItem(null);

        onChange(correspondingOption);
        closeDropdown();
      }
    }
  };

  const handleSubFieldSelect = (subFieldNameSelected: string) => {
    if (!isDefined(selectedFieldMetadataItem)) {
      return;
    }

    const correspondingOption = options.find((option) => {
      const optionKey = getSubFieldOptionKey(
        selectedFieldMetadataItem,
        subFieldNameSelected,
      );

      return option.value === optionKey;
    });

    if (isDefined(correspondingOption)) {
      setSelectedFieldMetadataItem(null);

      onChange(correspondingOption);
      closeDropdown();
    }
  };

  const handleDoNotImportSelect = () => {
    if (isDefined(doNotImportOption)) {
      onChange(doNotImportOption);
      closeDropdown();
    }
  };

  const handleClickOutside = () => {
    setSelectedFieldMetadataItem(null);
  };

  const handleSubFieldBack = () => {
    setSelectedFieldMetadataItem(null);
  };

  const handleCancelSelectClick = () => {
    setSelectedFieldMetadataItem(null);
    closeDropdown();
  };

  const doNotImportOption = options.find(
    (option) => option.value === DO_NOT_IMPORT_OPTION_KEY,
  );

  const shouldDisplaySubFieldMetadataItemSelect =
    isDefined(selectedFieldMetadataItem?.type) &&
    isCompositeFieldType(selectedFieldMetadataItem?.type);

  return (
    <Dropdown
      dropdownId={dropdownId}
      dropdownHotkeyScope={{
        scope: dropdownId,
      }}
      dropdownPlacement="bottom-start"
      clickableComponent={
        <MenuItem
          LeftIcon={value?.Icon}
          text={value?.label ?? placeholder ?? ''}
          accent={value?.label ? 'default' : 'placeholder'}
        />
      }
      dropdownComponents={
        shouldDisplaySubFieldMetadataItemSelect && selectedFieldMetadataItem ? (
          <MatchColumnSelectSubFieldSelectDropdownContent
            fieldMetadataItem={selectedFieldMetadataItem}
            onSubFieldSelect={handleSubFieldSelect}
            options={options}
            onBack={handleSubFieldBack}
          />
        ) : (
          <MatchColumnSelectFieldSelectDropdownContent
            selectedValue={value}
            onSelectFieldMetadataItem={handleFieldMetadataItemSelect}
            onCancelSelect={handleCancelSelectClick}
            onDoNotImportSelect={handleDoNotImportSelect}
            options={options}
          />
        )
      }
      onClickOutside={handleClickOutside}
    />
  );
};
