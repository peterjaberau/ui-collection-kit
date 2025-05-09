import { RecordFilterGroup } from '@twenty-modules/object-record/record-filter-group/types/RecordFilterGroup';
import { ViewFilterGroup } from '@twenty-modules/views/types/ViewFilterGroup';
import { mapViewFilterGroupLogicalOperatorToRecordFilterGroupLogicalOperator } from '@twenty-modules/views/utils/mapViewFilterGroupLogicalOperatorToRecordFilterGroupLogicalOperator';

export const mapViewFilterGroupsToRecordFilterGroups = (
  viewFilterGroups: ViewFilterGroup[],
): RecordFilterGroup[] => {
  return viewFilterGroups.map((viewFilterGroup) => {
    const recordFilterGroupLogicalOperator =
      mapViewFilterGroupLogicalOperatorToRecordFilterGroupLogicalOperator({
        viewFilterGroupLogicalOperator: viewFilterGroup.logicalOperator,
      });

    return {
      id: viewFilterGroup.id,
      parentRecordFilterGroupId: viewFilterGroup.parentViewFilterGroupId,
      logicalOperator: recordFilterGroupLogicalOperator,
      positionInRecordFilterGroup: viewFilterGroup.positionInViewFilterGroup,
    };
  });
};
