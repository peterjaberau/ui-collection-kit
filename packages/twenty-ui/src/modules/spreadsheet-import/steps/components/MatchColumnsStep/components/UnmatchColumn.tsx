import { useSpreadsheetImportInternal } from '@twenty-modules/spreadsheet-import/hooks/useSpreadsheetImportInternal';
import { SubMatchingSelectRow } from '@twenty-modules/spreadsheet-import/steps/components/MatchColumnsStep/components/SubMatchingSelectRow';
import { UnmatchColumnBanner } from '@twenty-modules/spreadsheet-import/steps/components/MatchColumnsStep/components/UnmatchColumnBanner';
import { SpreadsheetImportFields } from '@twenty-modules/spreadsheet-import/types';
import { SpreadsheetColumn } from '@twenty-modules/spreadsheet-import/types/SpreadsheetColumn';
import { SpreadsheetColumns } from '@twenty-modules/spreadsheet-import/types/SpreadsheetColumns';
import styled from '@emotion/styled';
import { useLingui } from '@lingui/react/macro';
import { useState } from 'react';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';
import { AnimatedExpandableContainer } from '@twenty-ui/layout';

const getExpandableContainerTitle = <T extends string>(
  fields: SpreadsheetImportFields<T>,
  column: SpreadsheetColumn<T>,
) => {
  const fieldLabel = fields.find(
    (field) => 'value' in column && field.key === column.value,
  )?.label;

  return `Match ${fieldLabel} (${
    'matchedOptions' in column &&
    column.matchedOptions.filter((option) => !isDefined(option.value)).length
  } Unmatched)`;
};

type UnmatchColumnProps<T extends string> = {
  columns: SpreadsheetColumns<T>;
  columnIndex: number;
  onSubChange: (val: T, index: number, option: string) => void;
};

const StyledContainer = styled.div`
  position: relative;
  width: 100%;
`;

const StyledContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};
  margin-top: ${({ theme }) => theme.spacing(4)};
  padding-bottom: ${({ theme }) => theme.spacing(4)};
`;

export const UnmatchColumn = <T extends string>({
  columns,
  columnIndex,
  onSubChange,
}: UnmatchColumnProps<T>) => {
  const { fields } = useSpreadsheetImportInternal<T>();
  const [isExpanded, setIsExpanded] = useState(false);
  const column = columns[columnIndex];
  const isSelect = 'matchedOptions' in column;
  const { t } = useLingui();

  if (!isSelect) return null;

  return (
    <StyledContainer>
      <UnmatchColumnBanner
        message={getExpandableContainerTitle(fields, column)}
        buttonOnClick={() => setIsExpanded(!isExpanded)}
        isExpanded={isExpanded}
      />
      <AnimatedExpandableContainer
        isExpanded={isExpanded}
        dimension="height"
        mode="scroll-height"
        containAnimation
      >
        <StyledContentWrapper>
          {column.matchedOptions.map((option) => (
            <SubMatchingSelectRow
              option={option}
              column={column}
              onSubChange={onSubChange}
              key={option.entry}
              placeholder={t`Select an option`}
            />
          ))}
        </StyledContentWrapper>
      </AnimatedExpandableContainer>
    </StyledContainer>
  );
};
