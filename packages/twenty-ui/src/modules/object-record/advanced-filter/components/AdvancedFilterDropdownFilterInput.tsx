import { ObjectFilterDropdownOptionSelect } from '@twenty-modules/object-record/object-filter-dropdown/components/ObjectFilterDropdownOptionSelect';
import { ObjectFilterDropdownRatingInput } from '@twenty-modules/object-record/object-filter-dropdown/components/ObjectFilterDropdownRatingInput';
import { ObjectFilterDropdownRecordSelect } from '@twenty-modules/object-record/object-filter-dropdown/components/ObjectFilterDropdownRecordSelect';
import { ObjectFilterDropdownSearchInput } from '@twenty-modules/object-record/object-filter-dropdown/components/ObjectFilterDropdownSearchInput';
import { ObjectFilterDropdownSourceSelect } from '@twenty-modules/object-record/object-filter-dropdown/components/ObjectFilterDropdownSourceSelect';
import { DropdownMenuSeparator } from '@twenty-modules/ui/layout/dropdown/components/DropdownMenuSeparator';

import { ObjectFilterDropdownBooleanSelect } from '@twenty-modules/object-record/object-filter-dropdown/components/ObjectFilterDropdownBooleanSelect';
import { ObjectFilterDropdownCurrencySelect } from '@twenty-modules/object-record/object-filter-dropdown/components/ObjectFilterDropdownCurrencySelect';
import { ObjectFilterDropdownDateInput } from '@twenty-modules/object-record/object-filter-dropdown/components/ObjectFilterDropdownDateInput';
import { ObjectFilterDropdownTextInput } from '@twenty-modules/object-record/object-filter-dropdown/components/ObjectFilterDropdownTextInput';
import { DATE_FILTER_TYPES } from '@twenty-modules/object-record/object-filter-dropdown/constants/DateFilterTypes';
import { subFieldNameUsedInDropdownComponentState } from '@twenty-modules/object-record/object-filter-dropdown/states/subFieldNameUsedInDropdownComponentState';
import { isExpectedSubFieldName } from '@twenty-modules/object-record/object-filter-dropdown/utils/isExpectedSubFieldName';
import { isFilterOnActorSourceSubField } from '@twenty-modules/object-record/object-filter-dropdown/utils/isFilterOnActorSourceSubField';
import { RecordFilter } from '@twenty-modules/object-record/record-filter/types/RecordFilter';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';
import { FieldMetadataType } from '@ui-collection-kit/twenty-shared/src/types';

type AdvancedFilterDropdownFilterInputProps = {
  filterDropdownId?: string;
  recordFilter: RecordFilter;
};

export const AdvancedFilterDropdownFilterInput = ({
  filterDropdownId,
  recordFilter,
}: AdvancedFilterDropdownFilterInputProps) => {
  const subFieldNameUsedInDropdown = useRecoilComponentValueV2(
    subFieldNameUsedInDropdownComponentState,
    filterDropdownId,
  );

  const filterType = recordFilter.type;

  const isActorSourceCompositeFilter = isFilterOnActorSourceSubField(
    subFieldNameUsedInDropdown,
  );

  return (
    <>
      {filterType === 'RATING' && <ObjectFilterDropdownRatingInput />}
      {DATE_FILTER_TYPES.includes(filterType) && (
        <ObjectFilterDropdownDateInput />
      )}
      {filterType === 'RELATION' && (
        <>
          <ObjectFilterDropdownSearchInput />
          <DropdownMenuSeparator />
          <ObjectFilterDropdownRecordSelect recordFilterId={recordFilter.id} />
        </>
      )}
      {filterType === 'ACTOR' &&
        (isActorSourceCompositeFilter ? (
          <>
            <ObjectFilterDropdownSourceSelect />
          </>
        ) : (
          <>
            <ObjectFilterDropdownTextInput />
          </>
        ))}
      {['SELECT', 'MULTI_SELECT'].includes(filterType) && (
        <>
          <ObjectFilterDropdownSearchInput />
          <DropdownMenuSeparator />
          <ObjectFilterDropdownOptionSelect />
        </>
      )}
      {filterType === 'BOOLEAN' && <ObjectFilterDropdownBooleanSelect />}
      {filterType === 'CURRENCY' &&
        (isExpectedSubFieldName(
          FieldMetadataType.CURRENCY,
          'currencyCode',
          recordFilter.subFieldName,
        ) ? (
          <>
            <ObjectFilterDropdownCurrencySelect dropdownWidth={280} />
          </>
        ) : (
          <></>
        ))}
    </>
  );
};
