import { useApplyObjectFilterDropdownFilterValue } from '@twenty-modules/object-record/object-filter-dropdown/hooks/useApplyObjectFilterDropdownFilterValue';
import { fieldMetadataItemUsedInDropdownComponentSelector } from '@twenty-modules/object-record/object-filter-dropdown/states/fieldMetadataItemUsedInDropdownComponentSelector';
import { objectFilterDropdownCurrentRecordFilterComponentState } from '@twenty-modules/object-record/object-filter-dropdown/states/objectFilterDropdownCurrentRecordFilterComponentState';
import { selectedOperandInDropdownComponentState } from '@twenty-modules/object-record/object-filter-dropdown/states/selectedOperandInDropdownComponentState';
import { getRelativeDateDisplayValue } from '@twenty-modules/object-record/object-filter-dropdown/utils/getRelativeDateDisplayValue';
import { DateTimePicker } from '@twenty-modules/ui/input/components/internal/date/components/InternalDatePicker';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';
import { ViewFilterOperand } from '@twenty-modules/views/types/ViewFilterOperand';
import { computeVariableDateViewFilterValue } from '@twenty-modules/views/view-filter-value/utils/computeVariableDateViewFilterValue';
import {
  resolveDateViewFilterValue,
  VariableDateViewFilterValueDirection,
  VariableDateViewFilterValueUnit,
} from '@twenty-modules/views/view-filter-value/utils/resolveDateViewFilterValue';
import { useState } from 'react';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';
import { FieldMetadataType } from '@twenty-ui/front/generated-metadata/graphql';

export const ObjectFilterDropdownDateInput = () => {
  const fieldMetadataItemUsedInDropdown = useRecoilComponentValueV2(
    fieldMetadataItemUsedInDropdownComponentSelector,
  );

  const selectedOperandInDropdown = useRecoilComponentValueV2(
    selectedOperandInDropdownComponentState,
  );

  const objectFilterDropdownCurrentRecordFilter = useRecoilComponentValueV2(
    objectFilterDropdownCurrentRecordFilterComponentState,
  );

  const { applyObjectFilterDropdownFilterValue } =
    useApplyObjectFilterDropdownFilterValue();

  const initialFilterValue = isDefined(objectFilterDropdownCurrentRecordFilter)
    ? resolveDateViewFilterValue(objectFilterDropdownCurrentRecordFilter)
    : null;

  const [internalDate, setInternalDate] = useState<Date | null>(
    initialFilterValue instanceof Date ? initialFilterValue : null,
  );

  const isDateTimeInput =
    fieldMetadataItemUsedInDropdown?.type === FieldMetadataType.DATE_TIME;

  const handleAbsoluteDateChange = (newDate: Date | null) => {
    setInternalDate(newDate);

    const newFilterValue = newDate?.toISOString() ?? '';
    const newDisplayValue = isDefined(newDate)
      ? isDateTimeInput
        ? newDate.toLocaleString()
        : newDate.toLocaleDateString()
      : '';

    applyObjectFilterDropdownFilterValue(newFilterValue, newDisplayValue);
  };

  const handleRelativeDateChange = (
    relativeDate: {
      direction: VariableDateViewFilterValueDirection;
      amount?: number;
      unit: VariableDateViewFilterValueUnit;
    } | null,
  ) => {
    const newFilterValue = relativeDate
      ? computeVariableDateViewFilterValue(
          relativeDate.direction,
          relativeDate.amount,
          relativeDate.unit,
        )
      : '';

    const newDisplayValue = relativeDate
      ? getRelativeDateDisplayValue(relativeDate)
      : '';

    applyObjectFilterDropdownFilterValue(newFilterValue, newDisplayValue);
  };

  const isRelativeOperand =
    selectedOperandInDropdown === ViewFilterOperand.IsRelative;

  const resolvedValue = objectFilterDropdownCurrentRecordFilter
    ? resolveDateViewFilterValue(objectFilterDropdownCurrentRecordFilter)
    : null;

  const relativeDate =
    resolvedValue && !(resolvedValue instanceof Date)
      ? resolvedValue
      : undefined;

  return (
    <DateTimePicker
      relativeDate={relativeDate}
      highlightedDateRange={relativeDate}
      isRelative={isRelativeOperand}
      date={internalDate}
      onChange={handleAbsoluteDateChange}
      onRelativeDateChange={handleRelativeDateChange}
      isDateTimeInput={isDateTimeInput}
    />
  );
};
