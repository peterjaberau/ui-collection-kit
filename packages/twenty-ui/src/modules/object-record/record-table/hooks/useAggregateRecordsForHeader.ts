import { ObjectMetadataItem } from '@twenty-modules/object-metadata/types/ObjectMetadataItem';
import { useAggregateRecords } from '@twenty-modules/object-record/hooks/useAggregateRecords';
import { buildRecordGqlFieldsAggregateForView } from '@twenty-modules/object-record/record-board/record-board-column/utils/buildRecordGqlFieldsAggregateForView';
import { computeAggregateValueAndLabel } from '@twenty-modules/object-record/record-board/record-board-column/utils/computeAggregateValueAndLabel';
import { currentRecordFilterGroupsComponentState } from '@twenty-modules/object-record/record-filter-group/states/currentRecordFilterGroupsComponentState';
import { useFilterValueDependencies } from '@twenty-modules/object-record/record-filter/hooks/useFilterValueDependencies';
import { currentRecordFiltersComponentState } from '@twenty-modules/object-record/record-filter/states/currentRecordFiltersComponentState';
import { computeRecordGqlOperationFilter } from '@twenty-modules/object-record/record-filter/utils/computeViewRecordGqlOperationFilter';
import { recordIndexKanbanAggregateOperationState } from '@twenty-modules/object-record/record-index/states/recordIndexKanbanAggregateOperationState';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';
import { UserContext } from '@twenty-modules/users/contexts/UserContext';
import { useContext } from 'react';
import { useRecoilValue } from 'recoil';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

type UseAggregateRecordsProps = {
  objectMetadataItem: ObjectMetadataItem;
  additionalFilters?: Record<string, unknown>;
  fallbackFieldName: string;
};

export const useAggregateRecordsForHeader = ({
  objectMetadataItem,
  additionalFilters = {},
}: UseAggregateRecordsProps) => {
  const currentRecordFilterGroups = useRecoilComponentValueV2(
    currentRecordFilterGroupsComponentState,
  );

  const currentRecordFilters = useRecoilComponentValueV2(
    currentRecordFiltersComponentState,
  );

  const recordIndexKanbanAggregateOperation = useRecoilValue(
    recordIndexKanbanAggregateOperationState,
  );

  const { filterValueDependencies } = useFilterValueDependencies();

  const { dateFormat, timeFormat, timeZone } = useContext(UserContext);

  const requestFilters = computeRecordGqlOperationFilter({
    filterValueDependencies,
    recordFilters: currentRecordFilters,
    recordFilterGroups: currentRecordFilterGroups,
    fields: objectMetadataItem.fields,
  });

  const recordGqlFieldsAggregate = buildRecordGqlFieldsAggregateForView({
    objectMetadataItem,
    recordIndexKanbanAggregateOperation,
  });

  const { data } = useAggregateRecords({
    objectNameSingular: objectMetadataItem.nameSingular,
    recordGqlFieldsAggregate,
    filter: { ...requestFilters, ...additionalFilters },
  });

  const { value, labelWithFieldName } = computeAggregateValueAndLabel({
    data,
    objectMetadataItem,
    fieldMetadataId: recordIndexKanbanAggregateOperation?.fieldMetadataId,
    aggregateOperation: recordIndexKanbanAggregateOperation?.operation,
    dateFormat,
    timeFormat,
    timeZone,
  });

  return {
    aggregateValue: value,
    aggregateLabel: isDefined(value) ? labelWithFieldName : undefined,
  };
};
