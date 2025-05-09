import { useFieldMetadataItemById } from '@twenty-modules/object-metadata/hooks/useFieldMetadataItemById';
import { getCompositeSubFieldLabel } from '@twenty-modules/object-record/object-filter-dropdown/utils/getCompositeSubFieldLabel';
import { getOperandLabelShort } from '@twenty-modules/object-record/object-filter-dropdown/utils/getOperandLabel';
import { isCompositeFieldType } from '@twenty-modules/object-record/object-filter-dropdown/utils/isCompositeFieldType';
import { RecordFilter } from '@twenty-modules/object-record/record-filter/types/RecordFilter';
import { isEmptinessOperand } from '@twenty-modules/object-record/record-filter/utils/isEmptinessOperand';
import { isRecordFilterConsideredEmpty } from '@twenty-modules/object-record/record-filter/utils/isRecordFilterConsideredEmpty';
import { isValidSubFieldName } from '@twenty-modules/settings/data-model/utils/isValidSubFieldName';
import { SortOrFilterChip } from '@twenty-modules/views/components/SortOrFilterChip';
import { isNonEmptyString } from '@sniptt/guards';
import { useIcons } from '@twenty-ui/display';

type EditableFilterChipProps = {
  recordFilter: RecordFilter;
  onRemove: () => void;
  onClick?: () => void;
};

export const EditableFilterChip = ({
  recordFilter,
  onRemove,
  onClick,
}: EditableFilterChipProps) => {
  const { getIcon } = useIcons();

  const { fieldMetadataItem } = useFieldMetadataItemById(
    recordFilter.fieldMetadataId,
  );

  const FieldMetadataItemIcon = getIcon(fieldMetadataItem.icon);

  const operandLabelShort = getOperandLabelShort(recordFilter.operand);
  const operandIsEmptiness = isEmptinessOperand(recordFilter.operand);

  const recordFilterSubFieldName = recordFilter.subFieldName;

  const subFieldLabel =
    isCompositeFieldType(fieldMetadataItem.type) &&
    isNonEmptyString(recordFilterSubFieldName) &&
    isValidSubFieldName(recordFilterSubFieldName)
      ? getCompositeSubFieldLabel(
          fieldMetadataItem.type,
          recordFilterSubFieldName,
        )
      : '';

  const fieldNameLabel = isNonEmptyString(subFieldLabel)
    ? `${recordFilter.label} / ${subFieldLabel}`
    : recordFilter.label;

  const recordFilterIsEmpty = isRecordFilterConsideredEmpty(recordFilter);

  const labelKey = `${fieldNameLabel}${!operandIsEmptiness && !recordFilterIsEmpty ? operandLabelShort : operandIsEmptiness ? ` ${operandLabelShort}` : ''}`;

  return (
    <SortOrFilterChip
      key={recordFilter.id}
      testId={recordFilter.id}
      labelKey={labelKey}
      labelValue={recordFilter.displayValue}
      Icon={FieldMetadataItemIcon}
      onRemove={onRemove}
      onClick={onClick}
    />
  );
};
