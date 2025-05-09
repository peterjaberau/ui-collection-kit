import { AdvancedFilterFieldSelectDropdownButtonClickableSelect } from '@twenty-modules/object-record/advanced-filter/components/AdvancedFilterFieldSelectDropdownButtonClickableSelect';
import { AdvancedFilterFieldSelectDropdownContent } from '@twenty-modules/object-record/advanced-filter/components/AdvancedFilterFieldSelectDropdownContent';
import { DEFAULT_ADVANCED_FILTER_DROPDOWN_OFFSET } from '@twenty-modules/object-record/advanced-filter/constants/DefaultAdvancedFilterDropdownOffset';
import { useAdvancedFilterFieldSelectDropdown } from '@twenty-modules/object-record/advanced-filter/hooks/useAdvancedFilterFieldSelectDropdown';

import { Dropdown } from '@twenty-modules/ui/layout/dropdown/components/Dropdown';
import styled from '@emotion/styled';

const StyledContainer = styled.div`
  flex: 2;
`;

type AdvancedFilterFieldSelectDropdownButtonProps = {
  recordFilterId: string;
};

export const AdvancedFilterFieldSelectDropdownButton = ({
  recordFilterId,
}: AdvancedFilterFieldSelectDropdownButtonProps) => {
  const { advancedFilterFieldSelectDropdownId } =
    useAdvancedFilterFieldSelectDropdown(recordFilterId);

  return (
    <StyledContainer>
      <Dropdown
        dropdownId={advancedFilterFieldSelectDropdownId}
        clickableComponent={
          <AdvancedFilterFieldSelectDropdownButtonClickableSelect
            recordFilterId={recordFilterId}
          />
        }
        dropdownComponents={
          <AdvancedFilterFieldSelectDropdownContent
            recordFilterId={recordFilterId}
          />
        }
        dropdownHotkeyScope={{ scope: advancedFilterFieldSelectDropdownId }}
        dropdownOffset={DEFAULT_ADVANCED_FILTER_DROPDOWN_OFFSET}
        dropdownPlacement="bottom-start"
      />
    </StyledContainer>
  );
};
