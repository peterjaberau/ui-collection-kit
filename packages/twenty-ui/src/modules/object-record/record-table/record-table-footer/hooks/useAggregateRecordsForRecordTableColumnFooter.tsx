import { useAggregateRecords } from '@twenty-modules/object-record/hooks/useAggregateRecords';
import { computeAggregateValueAndLabel } from '@twenty-modules/object-record/record-board/record-board-column/utils/computeAggregateValueAndLabel';
import { currentRecordFilterGroupsComponentState } from '@twenty-modules/object-record/record-filter-group/states/currentRecordFilterGroupsComponentState';
import { useFilterValueDependencies } from '@twenty-modules/object-record/record-filter/hooks/useFilterValueDependencies';
import { currentRecordFiltersComponentState } from '@twenty-modules/object-record/record-filter/states/currentRecordFiltersComponentState';
import { computeRecordGqlOperationFilter } from '@twenty-modules/object-record/record-filter/utils/computeViewRecordGqlOperationFilter';
import { useRecordGroupFilter } from '@twenty-modules/object-record/record-group/hooks/useRecordGroupFilter';
import { AGGREGATE_OPERATIONS } from '@twenty-modules/object-record/record-table/constants/AggregateOperations';
import { useRecordTableContextOrThrow } from '@twenty-modules/object-record/record-table/contexts/RecordTableContext';
import { RecordTableColumnAggregateFooterCellContext } from '@twenty-modules/object-record/record-table/record-table-footer/components/RecordTableColumnAggregateFooterCellContext';
import { viewFieldAggregateOperationState } from '@twenty-modules/object-record/record-table/record-table-footer/states/viewFieldAggregateOperationState';
import { ExtendedAggregateOperations } from '@twenty-modules/object-record/record-table/types/ExtendedAggregateOperations';
import { convertAggregateOperationToExtendedAggregateOperation } from '@twenty-modules/object-record/utils/convertAggregateOperationToExtendedAggregateOperation';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';
import { UserContext } from '@twenty-modules/users/contexts/UserContext';
import { useContext } from 'react';
import { useRecoilValue } from 'recoil';
import { isDefined, isFieldMetadataDateKind } from '@ui-collection-kit/twenty-shared/src/utils';

export const useAggregateRecordsForRecordTableColumnFooter = (
  fieldMetadataId: string,
) => {
  const { objectMetadataItem } = useRecordTableContextOrThrow();
  const { recordGroupFilter } = useRecordGroupFilter(objectMetadataItem.fields);

  const currentRecordFilterGroups = useRecoilComponentValueV2(
    currentRecordFilterGroupsComponentState,
  );

  const currentRecordFilters = useRecoilComponentValueV2(
    currentRecordFiltersComponentState,
  );

  const { filterValueDependencies } = useFilterValueDependencies();

  const requestFilters = computeRecordGqlOperationFilter({
    fields: objectMetadataItem.fields,
    filterValueDependencies,
    recordFilterGroups: currentRecordFilterGroups,
    recordFilters: currentRecordFilters,
  });

  const { viewFieldId } = useContext(
    RecordTableColumnAggregateFooterCellContext,
  );

  const fieldMetadataItem = objectMetadataItem.fields.find(
    (field) => field.id === fieldMetadataId,
  );

  // TODO: This shouldn't be set with impossible values,
  // see problem with view id not being set early enoughby Effect component in context store,
  // This happens here when switching from a view to another.
  const aggregateOperationForViewFieldWithProbableImpossibleValues =
    useRecoilValue(viewFieldAggregateOperationState({ viewFieldId }));

  const isAggregateOperationImpossibleForDateField =
    isDefined(fieldMetadataItem) &&
    isFieldMetadataDateKind(fieldMetadataItem.type) &&
    isDefined(aggregateOperationForViewFieldWithProbableImpossibleValues) &&
    (aggregateOperationForViewFieldWithProbableImpossibleValues ===
      AGGREGATE_OPERATIONS.min ||
      aggregateOperationForViewFieldWithProbableImpossibleValues ===
        AGGREGATE_OPERATIONS.max);

  const aggregateOperationForViewField:
    | ExtendedAggregateOperations
    | undefined
    | null = isAggregateOperationImpossibleForDateField
    ? convertAggregateOperationToExtendedAggregateOperation(
        aggregateOperationForViewFieldWithProbableImpossibleValues,
        fieldMetadataItem.type,
      )
    : aggregateOperationForViewFieldWithProbableImpossibleValues;

  const fieldName = fieldMetadataItem?.name;

  const recordGqlFieldsAggregate =
    isDefined(aggregateOperationForViewField) && isDefined(fieldName)
      ? {
          [fieldName]: [aggregateOperationForViewField],
        }
      : {};

  const { data, loading } = useAggregateRecords({
    objectNameSingular: objectMetadataItem.nameSingular,
    recordGqlFieldsAggregate,
    filter: { ...requestFilters, ...recordGroupFilter },
    skip: !isDefined(aggregateOperationForViewField),
  });

  const { dateFormat, timeFormat, timeZone } = useContext(UserContext);

  const { value, label } = computeAggregateValueAndLabel({
    data,
    objectMetadataItem,
    fieldMetadataId: fieldMetadataId,
    aggregateOperation: aggregateOperationForViewField,
    dateFormat,
    timeFormat,
    timeZone,
  });

  return {
    aggregateValue: value,
    aggregateLabel: isDefined(value) ? label : undefined,
    isLoading: loading,
  };
};
