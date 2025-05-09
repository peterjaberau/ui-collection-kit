import { useSpreadsheetImportInternal } from '@twenty-modules/spreadsheet-import/hooks/useSpreadsheetImportInternal';

import { getFieldOptions } from '@twenty-modules/spreadsheet-import/utils/getFieldOptions';

import { SubMatchingSelectDropdownButton } from '@twenty-modules/spreadsheet-import/steps/components/MatchColumnsStep/components/SubMatchingSelectDropdownButton';
import { SubMatchingSelectInput } from '@twenty-modules/spreadsheet-import/steps/components/MatchColumnsStep/components/SubMatchingSelectInput';
import {
  SpreadsheetMatchedSelectColumn,
  SpreadsheetMatchedSelectOptionsColumn,
} from '@twenty-modules/spreadsheet-import/types/SpreadsheetColumn';
import { SpreadsheetMatchedOptions } from '@twenty-modules/spreadsheet-import/types/SpreadsheetMatchedOptions';
import { Dropdown } from '@twenty-modules/ui/layout/dropdown/components/Dropdown';
import { useDropdown } from '@twenty-modules/ui/layout/dropdown/hooks/useDropdown';
import styled from '@emotion/styled';
import { SelectOption } from '@twenty-ui/input';

const StyledDropdownContainer = styled.div`
  width: 100%;
`;

interface SubMatchingSelectRowRightDropdownProps<T> {
  option: SpreadsheetMatchedOptions<T> | Partial<SpreadsheetMatchedOptions<T>>;
  column:
    | SpreadsheetMatchedSelectColumn<T>
    | SpreadsheetMatchedSelectOptionsColumn<T>;
  onSubChange: (val: T, index: number, option: string) => void;
  placeholder: string;
  selectedOption?:
    | SpreadsheetMatchedOptions<T>
    | Partial<SpreadsheetMatchedOptions<T>>;
}

export const SubMatchingSelectRowRightDropdown = <T extends string>({
  option,
  column,
  onSubChange,
  placeholder,
}: SubMatchingSelectRowRightDropdownProps<T>) => {
  const dropdownId = `sub-matching-select-dropdown-${option.entry}`;

  const { closeDropdown } = useDropdown(dropdownId);

  const { fields } = useSpreadsheetImportInternal<T>();
  const options = getFieldOptions(fields, column.value) as SelectOption[];
  const value = options.find((opt) => opt.value === option.value);

  const handleSelect = (selectedOption: SelectOption) => {
    onSubChange(selectedOption.value as T, column.index, option.entry ?? '');
    closeDropdown();
  };

  return (
    <StyledDropdownContainer>
      <Dropdown
        dropdownHotkeyScope={{ scope: dropdownId }}
        dropdownId={dropdownId}
        dropdownPlacement="bottom-start"
        clickableComponent={
          <SubMatchingSelectDropdownButton
            column={column}
            option={option}
            placeholder={placeholder}
          />
        }
        dropdownComponents={
          <SubMatchingSelectInput
            defaultOption={value}
            options={options}
            onOptionSelected={handleSelect}
          />
        }
      />
    </StyledDropdownContainer>
  );
};
