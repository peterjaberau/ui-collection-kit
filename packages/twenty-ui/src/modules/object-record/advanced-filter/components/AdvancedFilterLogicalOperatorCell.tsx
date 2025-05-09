import { AdvancedFilterLogicalOperatorDropdown } from '@twenty-modules/object-record/advanced-filter/components/AdvancedFilterLogicalOperatorDropdown';
import { RecordFilterGroup } from '@twenty-modules/object-record/record-filter-group/types/RecordFilterGroup';

import styled from '@emotion/styled';
import { capitalize } from '@ui-collection-kit/twenty-shared/src/utils';

const StyledText = styled.div`
  height: ${({ theme }) => theme.spacing(8)};
  display: flex;
  align-items: center;

  padding-left: ${({ theme }) => theme.spacing(2.25)};
`;

const StyledContainer = styled.div`
  align-items: start;
  display: flex;
  min-width: ${({ theme }) => theme.spacing(20)};
  color: ${({ theme }) => theme.font.color.tertiary};
`;

type AdvancedFilterLogicalOperatorCellProps = {
  index: number;
  recordFilterGroup: RecordFilterGroup;
};

export const AdvancedFilterLogicalOperatorCell = ({
  index,
  recordFilterGroup,
}: AdvancedFilterLogicalOperatorCellProps) => (
  <StyledContainer>
    {index === 0 ? (
      <StyledText>Where</StyledText>
    ) : index === 1 ? (
      <AdvancedFilterLogicalOperatorDropdown
        recordFilterGroup={recordFilterGroup}
      />
    ) : (
      <StyledText>
        {capitalize(recordFilterGroup.logicalOperator.toLowerCase())}
      </StyledText>
    )}
  </StyledContainer>
);
