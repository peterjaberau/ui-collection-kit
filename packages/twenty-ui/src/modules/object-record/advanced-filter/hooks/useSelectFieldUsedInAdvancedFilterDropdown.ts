import { useGetFieldMetadataItemById } from '@twenty-modules/object-metadata/hooks/useGetFieldMetadataItemById';
import { getFilterTypeFromFieldType } from '@twenty-modules/object-metadata/utils/formatFieldMetadataItemsAsFilterDefinitions';
import { fieldMetadataItemIdUsedInDropdownComponentState } from '@twenty-modules/object-record/object-filter-dropdown/states/fieldMetadataItemIdUsedInDropdownComponentState';
import { objectFilterDropdownCurrentRecordFilterComponentState } from '@twenty-modules/object-record/object-filter-dropdown/states/objectFilterDropdownCurrentRecordFilterComponentState';
import { objectFilterDropdownSearchInputComponentState } from '@twenty-modules/object-record/object-filter-dropdown/states/objectFilterDropdownSearchInputComponentState';
import { selectedOperandInDropdownComponentState } from '@twenty-modules/object-record/object-filter-dropdown/states/selectedOperandInDropdownComponentState';
import { subFieldNameUsedInDropdownComponentState } from '@twenty-modules/object-record/object-filter-dropdown/states/subFieldNameUsedInDropdownComponentState';
import { getInitialFilterValue } from '@twenty-modules/object-record/object-filter-dropdown/utils/getInitialFilterValue';
import { useUpsertRecordFilter } from '@twenty-modules/object-record/record-filter/hooks/useUpsertRecordFilter';
import { currentRecordFiltersComponentState } from '@twenty-modules/object-record/record-filter/states/currentRecordFiltersComponentState';
import { RecordFilter } from '@twenty-modules/object-record/record-filter/types/RecordFilter';
import { getRecordFilterOperands } from '@twenty-modules/object-record/record-filter/utils/getRecordFilterOperands';
import { SingleRecordPickerHotkeyScope } from '@twenty-modules/object-record/record-picker/single-record-picker/types/SingleRecordPickerHotkeyScope';

import { useSetHotkeyScope } from '@twenty-modules/ui/utilities/hotkey/hooks/useSetHotkeyScope';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';
import { useSetRecoilComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useSetRecoilComponentStateV2';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

type SelectFilterParams = {
  fieldMetadataItemId: string;
  recordFilterId: string;
  subFieldName?: string | null | undefined;
};

export const useSelectFieldUsedInAdvancedFilterDropdown = () => {
  const setSelectedOperandInDropdown = useSetRecoilComponentStateV2(
    selectedOperandInDropdownComponentState,
  );

  const setFieldMetadataItemIdUsedInDropdown = useSetRecoilComponentStateV2(
    fieldMetadataItemIdUsedInDropdownComponentState,
  );

  const setObjectFilterDropdownSearchInput = useSetRecoilComponentStateV2(
    objectFilterDropdownSearchInputComponentState,
  );

  const currentRecordFilters = useRecoilComponentValueV2(
    currentRecordFiltersComponentState,
  );

  const setHotkeyScope = useSetHotkeyScope();

  const { getFieldMetadataItemById } = useGetFieldMetadataItemById();

  const setSubFieldNameUsedInDropdown = useSetRecoilComponentStateV2(
    subFieldNameUsedInDropdownComponentState,
  );

  const setObjectFilterDropdownCurrentRecordFilter =
    useSetRecoilComponentStateV2(
      objectFilterDropdownCurrentRecordFilterComponentState,
    );

  const { upsertRecordFilter } = useUpsertRecordFilter();

  const selectFieldUsedInAdvancedFilterDropdown = ({
    fieldMetadataItemId,
    recordFilterId,
    subFieldName,
  }: SelectFilterParams) => {
    setFieldMetadataItemIdUsedInDropdown(fieldMetadataItemId);

    const fieldMetadataItem = getFieldMetadataItemById(fieldMetadataItemId);

    if (!isDefined(fieldMetadataItem)) {
      return;
    }

    if (
      fieldMetadataItem.type === 'RELATION' ||
      fieldMetadataItem.type === 'SELECT'
    ) {
      setHotkeyScope(SingleRecordPickerHotkeyScope.SingleRecordPicker);
    }

    const filterType = getFilterTypeFromFieldType(fieldMetadataItem.type);

    const firstOperand = getRecordFilterOperands({
      filterType,
      subFieldName,
    })[0];

    setSelectedOperandInDropdown(firstOperand);

    const { value, displayValue } = getInitialFilterValue(
      filterType,
      firstOperand,
    );

    const existingRecordFilter = currentRecordFilters.find(
      (recordFilter) => recordFilter.id === recordFilterId,
    );

    const newAdvancedFilter = {
      id: recordFilterId,
      fieldMetadataId: fieldMetadataItem.id,
      displayValue,
      operand: firstOperand,
      value,
      recordFilterGroupId: existingRecordFilter?.recordFilterGroupId,
      positionInRecordFilterGroup:
        existingRecordFilter?.positionInRecordFilterGroup,
      type: filterType,
      label: fieldMetadataItem.label,
      subFieldName,
    } satisfies RecordFilter;

    setSubFieldNameUsedInDropdown(subFieldName);

    setObjectFilterDropdownSearchInput('');

    setObjectFilterDropdownCurrentRecordFilter(newAdvancedFilter);
    upsertRecordFilter(newAdvancedFilter);
  };

  return {
    selectFieldUsedInAdvancedFilterDropdown,
  };
};
