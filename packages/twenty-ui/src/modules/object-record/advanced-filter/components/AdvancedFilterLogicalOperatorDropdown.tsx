import { ADVANCED_FILTER_LOGICAL_OPERATOR_OPTIONS } from '@twenty-modules/object-record/advanced-filter/constants/AdvancedFilterLogicalOperatorOptions';
import { DEFAULT_ADVANCED_FILTER_DROPDOWN_OFFSET } from '@twenty-modules/object-record/advanced-filter/constants/DefaultAdvancedFilterDropdownOffset';
import { useUpsertRecordFilterGroup } from '@twenty-modules/object-record/record-filter-group/hooks/useUpsertRecordFilterGroup';
import { RecordFilterGroup } from '@twenty-modules/object-record/record-filter-group/types/RecordFilterGroup';
import { RecordFilterGroupLogicalOperator } from '@twenty-modules/object-record/record-filter-group/types/RecordFilterGroupLogicalOperator';
import { Select } from '@twenty-modules/ui/input/components/Select';

type AdvancedFilterLogicalOperatorDropdownProps = {
  recordFilterGroup: RecordFilterGroup;
};

export const AdvancedFilterLogicalOperatorDropdown = ({
  recordFilterGroup,
}: AdvancedFilterLogicalOperatorDropdownProps) => {
  const { upsertRecordFilterGroup } = useUpsertRecordFilterGroup();

  const handleChange = (value: RecordFilterGroupLogicalOperator) => {
    upsertRecordFilterGroup({
      id: recordFilterGroup.id,
      parentRecordFilterGroupId: recordFilterGroup.parentRecordFilterGroupId,
      positionInRecordFilterGroup:
        recordFilterGroup.positionInRecordFilterGroup,
      logicalOperator: value,
    });
  };

  return (
    <Select
      fullWidth
      dropdownId={`advanced-filter-logical-operator-${recordFilterGroup.id}`}
      value={recordFilterGroup.logicalOperator}
      onChange={handleChange}
      options={ADVANCED_FILTER_LOGICAL_OPERATOR_OPTIONS}
      dropdownOffset={DEFAULT_ADVANCED_FILTER_DROPDOWN_OFFSET}
    />
  );
};
