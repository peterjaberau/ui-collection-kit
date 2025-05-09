import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

import { useApplyObjectFilterDropdownFilterValue } from '@twenty-modules/object-record/object-filter-dropdown/hooks/useApplyObjectFilterDropdownFilterValue';
import { useObjectFilterDropdownFilterValue } from '@twenty-modules/object-record/object-filter-dropdown/hooks/useObjectFilterDropdownFilterValue';
import { SingleRecordPickerHotkeyScope } from '@twenty-modules/object-record/record-picker/single-record-picker/types/SingleRecordPickerHotkeyScope';
import { BooleanDisplay } from '@twenty-modules/ui/field/display/components/BooleanDisplay';
import { DropdownMenuItemsContainer } from '@twenty-modules/ui/layout/dropdown/components/DropdownMenuItemsContainer';
import { useDropdown } from '@twenty-modules/ui/layout/dropdown/hooks/useDropdown';
import { SelectableList } from '@twenty-modules/ui/layout/selectable-list/components/SelectableList';
import { IconCheck } from '@twenty-ui/display';

const StyledBooleanSelectContainer = styled.div<{ selected?: boolean }>`
  align-items: center;
  cursor: pointer;
  display: flex;
  padding: ${({ theme }) =>
    `${theme.spacing(2)} ${theme.spacing(2)} ${theme.spacing(2)} ${theme.spacing(1)}`};
  border-radius: ${({ theme }) => theme.border.radius.sm};
  color: ${({ theme }) => theme.font.color.primary};
  &:hover {
    background: ${({ theme }) => theme.background.transparent.light};
  }
`;

const StyledIconCheckContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

export const ObjectFilterDropdownBooleanSelect = () => {
  const theme = useTheme();
  const options = [true, false];

  const { objectFilterDropdownFilterValue } =
    useObjectFilterDropdownFilterValue();

  const { applyObjectFilterDropdownFilterValue } =
    useApplyObjectFilterDropdownFilterValue();

  const { closeDropdown } = useDropdown();

  const handleOptionSelect = (newValue: boolean) => {
    applyObjectFilterDropdownFilterValue(
      newValue.toString(),
      newValue ? 'True' : 'False',
    );

    closeDropdown();
  };

  return (
    <SelectableList
      selectableListInstanceId="boolean-select"
      selectableItemIdArray={options.map((option) => option.toString())}
      hotkeyScope={SingleRecordPickerHotkeyScope.SingleRecordPicker}
    >
      <DropdownMenuItemsContainer hasMaxHeight>
        {options.map((option) => (
          <StyledBooleanSelectContainer
            key={String(option)}
            onClick={() => handleOptionSelect(option)}
            selected={objectFilterDropdownFilterValue === option.toString()}
          >
            <BooleanDisplay value={option} />
            {objectFilterDropdownFilterValue === option.toString() && (
              <StyledIconCheckContainer>
                <IconCheck color={theme.grayScale.gray50} size={16} />
              </StyledIconCheckContainer>
            )}
          </StyledBooleanSelectContainer>
        ))}
      </DropdownMenuItemsContainer>
    </SelectableList>
  );
};
