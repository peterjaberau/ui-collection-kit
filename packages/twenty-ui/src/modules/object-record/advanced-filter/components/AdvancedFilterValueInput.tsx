import { AdvancedFilterDropdownFilterInput } from '@twenty-modules/object-record/advanced-filter/components/AdvancedFilterDropdownFilterInput';
import { AdvancedFilterDropdownTextInput } from '@twenty-modules/object-record/advanced-filter/components/AdvancedFilterDropdownTextInput';
import { AdvancedFilterValueInputDropdownButtonClickableSelect } from '@twenty-modules/object-record/advanced-filter/components/AdvancedFilterValueInputDropdownButtonClickableSelect';
import { DEFAULT_ADVANCED_FILTER_DROPDOWN_OFFSET } from '@twenty-modules/object-record/advanced-filter/constants/DefaultAdvancedFilterDropdownOffset';
import { NUMBER_FILTER_TYPES } from '@twenty-modules/object-record/object-filter-dropdown/constants/NumberFilterTypes';
import { TEXT_FILTER_TYPES } from '@twenty-modules/object-record/object-filter-dropdown/constants/TextFilterTypes';
import { fieldMetadataItemIdUsedInDropdownComponentState } from '@twenty-modules/object-record/object-filter-dropdown/states/fieldMetadataItemIdUsedInDropdownComponentState';
import { objectFilterDropdownCurrentRecordFilterComponentState } from '@twenty-modules/object-record/object-filter-dropdown/states/objectFilterDropdownCurrentRecordFilterComponentState';
import { objectFilterDropdownSearchInputComponentState } from '@twenty-modules/object-record/object-filter-dropdown/states/objectFilterDropdownSearchInputComponentState';
import { configurableViewFilterOperands } from '@twenty-modules/object-record/object-filter-dropdown/utils/configurableViewFilterOperands';
import { isExpectedSubFieldName } from '@twenty-modules/object-record/object-filter-dropdown/utils/isExpectedSubFieldName';
import { currentRecordFiltersComponentState } from '@twenty-modules/object-record/record-filter/states/currentRecordFiltersComponentState';
import { Dropdown } from '@twenty-modules/ui/layout/dropdown/components/Dropdown';
import { DropdownOffset } from '@twenty-modules/ui/layout/dropdown/types/DropdownOffset';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';
import { useSetRecoilComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useSetRecoilComponentStateV2';

import styled from '@emotion/styled';
import { FieldMetadataType } from '@ui-collection-kit/twenty-shared/src/types';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

const StyledValueDropdownContainer = styled.div`
  flex: 3;
`;

type AdvancedFilterValueInputProps = {
  recordFilterId: string;
};

export const AdvancedFilterValueInput = ({
  recordFilterId,
}: AdvancedFilterValueInputProps) => {
  const dropdownId = `advanced-filter-view-filter-value-input-${recordFilterId}`;

  const currentRecordFilters = useRecoilComponentValueV2(
    currentRecordFiltersComponentState,
  );

  const recordFilter = currentRecordFilters.find(
    (recordFilter) => recordFilter.id === recordFilterId,
  );

  const isDisabled = !recordFilter?.fieldMetadataId || !recordFilter.operand;

  const setObjectFilterDropdownSearchInput = useSetRecoilComponentStateV2(
    objectFilterDropdownSearchInputComponentState,
  );

  const setFieldMetadataItemIdUsedInDropdown = useSetRecoilComponentStateV2(
    fieldMetadataItemIdUsedInDropdownComponentState,
  );

  const setObjectFilterDropdownCurrentRecordFilter =
    useSetRecoilComponentStateV2(
      objectFilterDropdownCurrentRecordFilterComponentState,
    );

  const operandHasNoInput =
    recordFilter && !configurableViewFilterOperands.has(recordFilter.operand);

  if (!isDefined(recordFilter)) {
    return null;
  }

  const handleFilterValueDropdownClose = () => {
    setObjectFilterDropdownSearchInput('');
  };

  const handleFilterValueDropdownOpen = () => {
    setObjectFilterDropdownCurrentRecordFilter(recordFilter);
    setFieldMetadataItemIdUsedInDropdown(recordFilter.fieldMetadataId);
  };

  const filterType = recordFilter.type;

  const dropdownContentOffset =
    filterType === 'DATE' || filterType === 'DATE_TIME'
      ? ({ y: -33, x: 0 } satisfies DropdownOffset)
      : DEFAULT_ADVANCED_FILTER_DROPDOWN_OFFSET;

  const showFilterTextInput =
    (isDefined(filterType) &&
      (TEXT_FILTER_TYPES.includes(filterType) ||
        NUMBER_FILTER_TYPES.includes(filterType))) ||
    isExpectedSubFieldName(
      FieldMetadataType.CURRENCY,
      'amountMicros',
      recordFilter.subFieldName,
    );

  return (
    <StyledValueDropdownContainer>
      {operandHasNoInput ? (
        <></>
      ) : isDisabled ? (
        <AdvancedFilterValueInputDropdownButtonClickableSelect
          recordFilterId={recordFilterId}
        />
      ) : showFilterTextInput ? (
        <AdvancedFilterDropdownTextInput recordFilter={recordFilter} />
      ) : (
        <Dropdown
          dropdownId={dropdownId}
          clickableComponent={
            <AdvancedFilterValueInputDropdownButtonClickableSelect
              recordFilterId={recordFilterId}
            />
          }
          dropdownComponents={
            <AdvancedFilterDropdownFilterInput recordFilter={recordFilter} />
          }
          dropdownHotkeyScope={{ scope: dropdownId }}
          dropdownOffset={dropdownContentOffset}
          dropdownPlacement="bottom-start"
          dropdownWidth={280}
          onClose={handleFilterValueDropdownClose}
          onOpen={handleFilterValueDropdownOpen}
        />
      )}
    </StyledValueDropdownContainer>
  );
};
