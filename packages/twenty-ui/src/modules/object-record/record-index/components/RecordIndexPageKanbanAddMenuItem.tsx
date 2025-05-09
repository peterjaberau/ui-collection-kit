import { recordGroupDefinitionFamilyState } from '@twenty-modules/object-record/record-group/states/recordGroupDefinitionFamilyState';
import { RecordGroupDefinitionType } from '@twenty-modules/object-record/record-group/types/RecordGroupDefinition';
import styled from '@emotion/styled';
import { useRecoilValue } from 'recoil';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';
import { MenuItem } from '@twenty-ui/navigation';
import { Tag } from '@twenty-ui/components';

const StyledMenuItem = styled(MenuItem)`
  width: calc(100% - 2 * var(--horizontal-padding));
`;

type RecordIndexPageKanbanAddMenuItemProps = {
  columnId: string;
  onItemClick: (columnDefinition: any) => void;
};

export const RecordIndexPageKanbanAddMenuItem = ({
  columnId,
  onItemClick,
}: RecordIndexPageKanbanAddMenuItemProps) => {
  const recordGroupDefinition = useRecoilValue(
    recordGroupDefinitionFamilyState(columnId),
  );

  if (!isDefined(recordGroupDefinition)) {
    return null;
  }

  return (
    <StyledMenuItem
      text={
        <Tag
          variant={
            recordGroupDefinition.type === RecordGroupDefinitionType.Value
              ? 'solid'
              : 'outline'
          }
          color={
            recordGroupDefinition.type === RecordGroupDefinitionType.Value
              ? recordGroupDefinition.color
              : 'transparent'
          }
          text={recordGroupDefinition.title}
          weight={
            recordGroupDefinition.type === RecordGroupDefinitionType.Value
              ? 'regular'
              : 'medium'
          }
        />
      }
      onClick={() => onItemClick(recordGroupDefinition)}
    />
  );
};
