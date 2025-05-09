import { AdvancedFilterAddFilterRuleSelect } from '@twenty-modules/object-record/advanced-filter/components/AdvancedFilterAddFilterRuleSelect';

import { AdvancedFilterRecordFilterGroupRow } from '@twenty-modules/object-record/advanced-filter/components/AdvancedFilterRecordFilterGroupRow';
import { AdvancedFilterRecordFilterRow } from '@twenty-modules/object-record/advanced-filter/components/AdvancedFilterRecordFilterRow';
import { useChildRecordFiltersAndRecordFilterGroups } from '@twenty-modules/object-record/advanced-filter/hooks/useChildRecordFiltersAndRecordFilterGroups';
import { rootLevelRecordFilterGroupComponentSelector } from '@twenty-modules/object-record/advanced-filter/states/rootLevelRecordFilterGroupComponentSelector';
import { isRecordFilterGroupChildARecordFilterGroup } from '@twenty-modules/object-record/advanced-filter/utils/isRecordFilterGroupChildARecordFilterGroup';
import { ScrollWrapper } from '@twenty-modules/ui/utilities/scroll/components/ScrollWrapper';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';
import styled from '@emotion/styled';
import { id } from 'date-fns/locale';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

const StyledContainer = styled.div<{ isGrayBackground?: boolean }>`
  align-items: start;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  padding: ${({ theme }) => theme.spacing(2)};
  min-width: 650px;
`;

export const AdvancedFilterRootRecordFilterGroup = () => {
  const rootRecordFilterGroup = useRecoilComponentValueV2(
    rootLevelRecordFilterGroupComponentSelector,
  );

  const { childRecordFiltersAndRecordFilterGroups } =
    useChildRecordFiltersAndRecordFilterGroups({
      recordFilterGroupId: rootRecordFilterGroup?.id,
    });

  if (!isDefined(rootRecordFilterGroup)) {
    return null;
  }

  return (
    <ScrollWrapper componentInstanceId={`scroll-wrapper-dropdown-menu-${id}`}>
      <StyledContainer>
        {childRecordFiltersAndRecordFilterGroups.map(
          (recordFilterGroupChild, recordFilterGroupChildIndex) =>
            isRecordFilterGroupChildARecordFilterGroup(
              recordFilterGroupChild,
            ) ? (
              <AdvancedFilterRecordFilterGroupRow
                key={recordFilterGroupChild.id}
                parentRecordFilterGroup={rootRecordFilterGroup}
                recordFilterGroup={recordFilterGroupChild}
                recordFilterGroupIndex={recordFilterGroupChildIndex}
              />
            ) : (
              <AdvancedFilterRecordFilterRow
                key={recordFilterGroupChild.id}
                recordFilterGroup={rootRecordFilterGroup}
                recordFilter={recordFilterGroupChild}
                recordFilterIndex={recordFilterGroupChildIndex}
              />
            ),
        )}
        <AdvancedFilterAddFilterRuleSelect
          recordFilterGroup={rootRecordFilterGroup}
        />
      </StyledContainer>
    </ScrollWrapper>
  );
};
