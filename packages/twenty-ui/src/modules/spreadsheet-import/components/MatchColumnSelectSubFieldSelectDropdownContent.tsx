import { FieldMetadataItem } from '@twenty-modules/object-metadata/types/FieldMetadataItem';
import { isCompositeFieldType } from '@twenty-modules/object-record/object-filter-dropdown/utils/isCompositeFieldType';
import { getSubFieldOptionKey } from '@twenty-modules/object-record/spreadsheet-import/utils/getSubFieldOptionKey';
import { SETTINGS_COMPOSITE_FIELD_TYPE_CONFIGS } from '@twenty-modules/settings/data-model/constants/SettingsCompositeFieldTypeConfigs';
import { DropdownMenuHeader } from '@twenty-modules/ui/layout/dropdown/components/DropdownMenuHeader/DropdownMenuHeader';
import { DropdownMenuHeaderLeftComponent } from '@twenty-modules/ui/layout/dropdown/components/DropdownMenuHeader/internal/DropdownMenuHeaderLeftComponent';
import { DropdownMenuItemsContainer } from '@twenty-modules/ui/layout/dropdown/components/DropdownMenuItemsContainer';
import { DropdownMenuSearchInput } from '@twenty-modules/ui/layout/dropdown/components/DropdownMenuSearchInput';
import { DropdownMenuSeparator } from '@twenty-modules/ui/layout/dropdown/components/DropdownMenuSeparator';
import { useState } from 'react';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';
import {
  IconChevronLeft,
  OverflowingTextWithTooltip,
  useIcons,
} from '@twenty-ui/display';
import { SelectOption } from '@twenty-ui/input';
import { MenuItem } from '@twenty-ui/navigation';
import { ReadonlyDeep } from 'type-fest';

export const MatchColumnSelectSubFieldSelectDropdownContent = ({
  fieldMetadataItem,
  onSubFieldSelect,
  options,
  onBack,
}: {
  fieldMetadataItem: FieldMetadataItem;
  onSubFieldSelect: (subFieldNameSelected: string) => void;
  options: readonly ReadonlyDeep<SelectOption>[];
  onBack: () => void;
}) => {
  const [searchFilter, setSearchFilter] = useState('');

  const { getIcon } = useIcons();

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;

    setSearchFilter(value);
  };

  const handleSubFieldSelect = (subFieldName: string) => {
    onSubFieldSelect(subFieldName);
  };

  const handleSubMenuBack = () => {
    setSearchFilter('');
    onBack();
  };

  if (!isCompositeFieldType(fieldMetadataItem.type)) {
    return <></>;
  }

  const fieldMetadataItemSettings =
    SETTINGS_COMPOSITE_FIELD_TYPE_CONFIGS[fieldMetadataItem.type];

  const subFieldNamesThatExistInOptions = fieldMetadataItemSettings.subFields
    .filter((subFieldName) => {
      const optionKey = getSubFieldOptionKey(fieldMetadataItem, subFieldName);

      const correspondingOption = options.find(
        (option) => option.value === optionKey,
      );

      return isDefined(correspondingOption);
    })
    .filter((subFieldName) => subFieldName.includes(searchFilter));

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
        <OverflowingTextWithTooltip text={fieldMetadataItem.label} />
      </DropdownMenuHeader>
      <DropdownMenuSearchInput
        value={searchFilter}
        onChange={handleFilterChange}
        autoFocus
      />
      <DropdownMenuSeparator />
      <DropdownMenuItemsContainer hasMaxHeight width={200}>
        {subFieldNamesThatExistInOptions.map((subFieldName) => (
          <MenuItem
            key={subFieldName}
            onClick={() => handleSubFieldSelect(subFieldName)}
            LeftIcon={getIcon(fieldMetadataItem.icon)}
            text={
              (fieldMetadataItemSettings.labelBySubField as any)[subFieldName]
            }
            disabled={
              options.find(
                (option) =>
                  option.value ===
                  getSubFieldOptionKey(fieldMetadataItem, subFieldName),
              )?.disabled
            }
          />
        ))}
      </DropdownMenuItemsContainer>
    </>
  );
};
