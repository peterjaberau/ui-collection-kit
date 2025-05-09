import { DropdownMenuHeader } from '@twenty-modules/ui/layout/dropdown/components/DropdownMenuHeader/DropdownMenuHeader';

import { ObjectFilterDropdownOperandSelect } from '@twenty-modules/object-record/object-filter-dropdown/components/ObjectFilterDropdownOperandSelect';
import { selectedOperandInDropdownComponentState } from '@twenty-modules/object-record/object-filter-dropdown/states/selectedOperandInDropdownComponentState';

import { FiltersHotkeyScope } from '@twenty-modules/object-record/object-filter-dropdown/types/FiltersHotkeyScope';
import { Dropdown } from '@twenty-modules/ui/layout/dropdown/components/Dropdown';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { getOperandLabel } from '../utils/getOperandLabel';
import { IconChevronDown } from '@twenty-ui/display';

const StyledDropdownMenuHeader = styled(DropdownMenuHeader)`
  cursor: pointer;
`;

export const ObjectFilterDropdownOperandDropdown = ({
  filterDropdownId,
}: {
  filterDropdownId?: string;
}) => {
  const selectedOperandInDropdown = useRecoilComponentValueV2(
    selectedOperandInDropdownComponentState,
  );

  const theme = useTheme();

  const dropdownId = `${filterDropdownId}-operand-dropdown`;

  return (
    <Dropdown
      dropdownId={dropdownId}
      clickableComponent={
        <StyledDropdownMenuHeader
          key={'selected-filter-operand'}
          EndComponent={<IconChevronDown />}
        >
          {getOperandLabel(selectedOperandInDropdown)}
        </StyledDropdownMenuHeader>
      }
      dropdownComponents={<ObjectFilterDropdownOperandSelect />}
      dropdownHotkeyScope={{
        scope: FiltersHotkeyScope.ObjectFilterDropdownOperandDropdown,
      }}
      dropdownOffset={{ x: parseInt(theme.spacing(2), 10) }}
    />
  );
};
