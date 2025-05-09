import { FieldMetadataItem } from '@twenty-modules/object-metadata/types/FieldMetadataItem';
import { isCompositeFieldType } from '@twenty-modules/object-record/object-filter-dropdown/utils/isCompositeFieldType';
import { DO_NOT_IMPORT_OPTION_KEY } from '@twenty-modules/spreadsheet-import/constants/DoNotImportOptionKey';
import { useSpreadsheetImportInternal } from '@twenty-modules/spreadsheet-import/hooks/useSpreadsheetImportInternal';
import { DropdownMenuHeader } from '@twenty-modules/ui/layout/dropdown/components/DropdownMenuHeader/DropdownMenuHeader';
import { DropdownMenuHeaderLeftComponent } from '@twenty-modules/ui/layout/dropdown/components/DropdownMenuHeader/internal/DropdownMenuHeaderLeftComponent';
import { DropdownMenuItemsContainer } from '@twenty-modules/ui/layout/dropdown/components/DropdownMenuItemsContainer';
import { DropdownMenuSearchInput } from '@twenty-modules/ui/layout/dropdown/components/DropdownMenuSearchInput';
import { DropdownMenuSeparator } from '@twenty-modules/ui/layout/dropdown/components/DropdownMenuSeparator';
import { useLingui } from '@lingui/react/macro';
import { useState } from 'react';
import { IconForbid, IconX, useIcons } from '@twenty-ui/display';
import { SelectOption } from '@twenty-ui/input';
import { MenuItemSelect } from '@twenty-ui/navigation';
import { ReadonlyDeep } from 'type-fest';

export const MatchColumnSelectFieldSelectDropdownContent = ({
  selectedValue,
  onSelectFieldMetadataItem,
  onCancelSelect,
  onDoNotImportSelect,
  options,
}: {
  selectedValue: SelectOption | undefined;
  onSelectFieldMetadataItem: (
    selectedFieldMetadataItem: FieldMetadataItem,
  ) => void;
  onCancelSelect: () => void;
  onDoNotImportSelect: () => void;
  options: readonly ReadonlyDeep<SelectOption>[];
}) => {
  const [searchFilter, setSearchFilter] = useState('');

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;

    setSearchFilter(value);
  };

  const { availableFieldMetadataItems } = useSpreadsheetImportInternal();

  const filteredAvailableFieldMetadataItems =
    availableFieldMetadataItems.filter(
      (field) =>
        field.label.toLowerCase().includes(searchFilter.toLowerCase()) ||
        field.name.toLowerCase().includes(searchFilter.toLowerCase()),
    );

  const { getIcon } = useIcons();

  const handleFieldClick = (fieldMetadataItem: FieldMetadataItem) => {
    onSelectFieldMetadataItem(fieldMetadataItem);
  };

  const handleCancelClick = () => {
    onCancelSelect();
  };

  const { t } = useLingui();

  return (
    <>
      <DropdownMenuHeader
        StartComponent={
          <DropdownMenuHeaderLeftComponent
            onClick={handleCancelClick}
            Icon={IconX}
          />
        }
      >
        Select matching field
      </DropdownMenuHeader>
      <DropdownMenuSearchInput
        value={searchFilter}
        onChange={handleFilterChange}
        autoFocus
      />
      <DropdownMenuSeparator />
      <DropdownMenuItemsContainer hasMaxHeight width={200}>
        <MenuItemSelect
          selected={selectedValue?.value === DO_NOT_IMPORT_OPTION_KEY}
          onClick={onDoNotImportSelect}
          LeftIcon={IconForbid}
          text={t`Do not import`}
        />
        {filteredAvailableFieldMetadataItems.map((field) => (
          <MenuItemSelect
            key={field.id}
            selected={selectedValue?.value === field.name}
            onClick={() => handleFieldClick(field)}
            disabled={
              options.find((option) => option.value === field.name)?.disabled &&
              selectedValue?.value !== field.name
            }
            LeftIcon={getIcon(field.icon)}
            text={field.label}
            hasSubMenu={isCompositeFieldType(field.type)}
          />
        ))}
      </DropdownMenuItemsContainer>
    </>
  );
};
