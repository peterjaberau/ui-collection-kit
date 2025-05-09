import { ObjectFilterDropdownDateInput } from '@twenty-modules/object-record/object-filter-dropdown/components/ObjectFilterDropdownDateInput';
import { ObjectFilterDropdownNumberInput } from '@twenty-modules/object-record/object-filter-dropdown/components/ObjectFilterDropdownNumberInput';
import { ObjectFilterDropdownOptionSelect } from '@twenty-modules/object-record/object-filter-dropdown/components/ObjectFilterDropdownOptionSelect';
import { ObjectFilterDropdownRatingInput } from '@twenty-modules/object-record/object-filter-dropdown/components/ObjectFilterDropdownRatingInput';
import { ObjectFilterDropdownRecordSelect } from '@twenty-modules/object-record/object-filter-dropdown/components/ObjectFilterDropdownRecordSelect';
import { ObjectFilterDropdownSearchInput } from '@twenty-modules/object-record/object-filter-dropdown/components/ObjectFilterDropdownSearchInput';
import { ObjectFilterDropdownSourceSelect } from '@twenty-modules/object-record/object-filter-dropdown/components/ObjectFilterDropdownSourceSelect';
import { DropdownMenuSeparator } from '@twenty-modules/ui/layout/dropdown/components/DropdownMenuSeparator';
import { ViewFilterOperand } from '@twenty-modules/views/types/ViewFilterOperand';

import { getFilterTypeFromFieldType } from '@twenty-modules/object-metadata/utils/formatFieldMetadataItemsAsFilterDefinitions';
import { ObjectFilterDropdownBooleanSelect } from '@twenty-modules/object-record/object-filter-dropdown/components/ObjectFilterDropdownBooleanSelect';
import { ObjectFilterDropdownCurrencySelect } from '@twenty-modules/object-record/object-filter-dropdown/components/ObjectFilterDropdownCurrencySelect';
import { ObjectFilterDropdownTextInput } from '@twenty-modules/object-record/object-filter-dropdown/components/ObjectFilterDropdownTextInput';
import { DATE_FILTER_TYPES } from '@twenty-modules/object-record/object-filter-dropdown/constants/DateFilterTypes';
import { NUMBER_FILTER_TYPES } from '@twenty-modules/object-record/object-filter-dropdown/constants/NumberFilterTypes';
import { TEXT_FILTER_TYPES } from '@twenty-modules/object-record/object-filter-dropdown/constants/TextFilterTypes';
import { fieldMetadataItemUsedInDropdownComponentSelector } from '@twenty-modules/object-record/object-filter-dropdown/states/fieldMetadataItemUsedInDropdownComponentSelector';
import { selectedOperandInDropdownComponentState } from '@twenty-modules/object-record/object-filter-dropdown/states/selectedOperandInDropdownComponentState';
import { subFieldNameUsedInDropdownComponentState } from '@twenty-modules/object-record/object-filter-dropdown/states/subFieldNameUsedInDropdownComponentState';
import { isExpectedSubFieldName } from '@twenty-modules/object-record/object-filter-dropdown/utils/isExpectedSubFieldName';
import { isFilterOnActorSourceSubField } from '@twenty-modules/object-record/object-filter-dropdown/utils/isFilterOnActorSourceSubField';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';
import { FieldMetadataType } from '@ui-collection-kit/twenty-shared/src/types';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

type ObjectFilterDropdownFilterInputProps = {
  filterDropdownId?: string;
  recordFilterId?: string;
};

export const ObjectFilterDropdownFilterInput = ({
  filterDropdownId,
  recordFilterId,
}: ObjectFilterDropdownFilterInputProps) => {
  const fieldMetadataItemUsedInDropdown = useRecoilComponentValueV2(
    fieldMetadataItemUsedInDropdownComponentSelector,
    filterDropdownId,
  );

  const subFieldNameUsedInDropdown = useRecoilComponentValueV2(
    subFieldNameUsedInDropdownComponentState,
    filterDropdownId,
  );

  const selectedOperandInDropdown = useRecoilComponentValueV2(
    selectedOperandInDropdownComponentState,
    filterDropdownId,
  );

  const isConfigurable =
    selectedOperandInDropdown &&
    [
      ViewFilterOperand.Is,
      ViewFilterOperand.IsNotNull,
      ViewFilterOperand.IsNot,
      ViewFilterOperand.LessThan,
      ViewFilterOperand.GreaterThan,
      ViewFilterOperand.IsBefore,
      ViewFilterOperand.IsAfter,
      ViewFilterOperand.Contains,
      ViewFilterOperand.DoesNotContain,
      ViewFilterOperand.IsRelative,
    ].includes(selectedOperandInDropdown);

  if (!isDefined(fieldMetadataItemUsedInDropdown)) {
    return null;
  }

  const filterType = getFilterTypeFromFieldType(
    fieldMetadataItemUsedInDropdown.type,
  );

  const isActorSourceCompositeFilter = isFilterOnActorSourceSubField(
    subFieldNameUsedInDropdown,
  );

  return (
    <>
      {isConfigurable && selectedOperandInDropdown && (
        <>
          {TEXT_FILTER_TYPES.includes(filterType) && (
            <ObjectFilterDropdownTextInput />
          )}
          {NUMBER_FILTER_TYPES.includes(filterType) && (
            <ObjectFilterDropdownNumberInput />
          )}
          {filterType === 'RATING' && <ObjectFilterDropdownRatingInput />}
          {DATE_FILTER_TYPES.includes(filterType) && (
            <ObjectFilterDropdownDateInput />
          )}
          {filterType === 'RELATION' && (
            <>
              <ObjectFilterDropdownSearchInput />
              <DropdownMenuSeparator />
              <ObjectFilterDropdownRecordSelect
                recordFilterId={recordFilterId}
              />
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
          {filterType === 'CURRENCY' &&
            (isExpectedSubFieldName(
              FieldMetadataType.CURRENCY,
              'currencyCode',
              subFieldNameUsedInDropdown,
            ) ? (
              <>
                <ObjectFilterDropdownCurrencySelect />
              </>
            ) : isExpectedSubFieldName(
                FieldMetadataType.CURRENCY,
                'amountMicros',
                subFieldNameUsedInDropdown,
              ) ? (
              <>
                <ObjectFilterDropdownNumberInput />
              </>
            ) : (
              <></>
            ))}
          {['SELECT', 'MULTI_SELECT'].includes(filterType) && (
            <>
              <ObjectFilterDropdownSearchInput />
              <DropdownMenuSeparator />
              <ObjectFilterDropdownOptionSelect />
            </>
          )}
          {filterType === 'BOOLEAN' && <ObjectFilterDropdownBooleanSelect />}
        </>
      )}
    </>
  );
};
