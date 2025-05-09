import { RecordFilterGroup } from '@twenty-modules/object-record/record-filter-group/types/RecordFilterGroup';
import { View } from '@twenty-modules/views/types/View';
import { ViewFilterGroup } from '@twenty-modules/views/types/ViewFilterGroup';
import { mapRecordFilterGroupLogicalOperatorToViewFilterGroupLogicalOperator } from '@twenty-modules/views/utils/mapRecordFilterGroupLogicalOperatorToViewFilterGroupLogicalOperator';

export const mapRecordFilterGroupToViewFilterGroup = ({
  recordFilterGroup,
  view,
}: {
  recordFilterGroup: RecordFilterGroup;
  view: Pick<View, 'id'>;
}): ViewFilterGroup => {
  return {
    __typename: 'ViewFilterGroup',
    id: recordFilterGroup.id,
    logicalOperator:
      mapRecordFilterGroupLogicalOperatorToViewFilterGroupLogicalOperator({
        recordFilterGroupLogicalOperator: recordFilterGroup.logicalOperator,
      }),
    viewId: view.id,
    parentViewFilterGroupId: recordFilterGroup.parentRecordFilterGroupId,
    positionInViewFilterGroup: recordFilterGroup.positionInRecordFilterGroup,
  };
};
