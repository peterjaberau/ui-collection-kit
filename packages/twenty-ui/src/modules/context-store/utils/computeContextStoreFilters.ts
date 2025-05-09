import { ContextStoreTargetedRecordsRule } from '@twenty-modules/context-store/states/contextStoreTargetedRecordsRuleComponentState';
import { ObjectMetadataItem } from '@twenty-modules/object-metadata/types/ObjectMetadataItem';
import { RecordGqlOperationFilter } from '@twenty-modules/object-record/graphql/types/RecordGqlOperationFilter';
import { RecordFilter } from '@twenty-modules/object-record/record-filter/types/RecordFilter';
import { RecordFilterValueDependencies } from '@twenty-modules/object-record/record-filter/types/RecordFilterValueDependencies';
import { computeRecordGqlOperationFilter } from '@twenty-modules/object-record/record-filter/utils/computeViewRecordGqlOperationFilter';
import { makeAndFilterVariables } from '@twenty-modules/object-record/utils/makeAndFilterVariables';

export const computeContextStoreFilters = (
  contextStoreTargetedRecordsRule: ContextStoreTargetedRecordsRule,
  contextStoreFilters: RecordFilter[],
  objectMetadataItem: ObjectMetadataItem,
  filterValueDependencies: RecordFilterValueDependencies,
) => {
  let queryFilter: RecordGqlOperationFilter | undefined;

  if (contextStoreTargetedRecordsRule.mode === 'exclusion') {
    queryFilter = makeAndFilterVariables([
      computeRecordGqlOperationFilter({
        filterValueDependencies,
        fields: objectMetadataItem?.fields ?? [],
        recordFilters: contextStoreFilters,
        recordFilterGroups: [],
      }),
      contextStoreTargetedRecordsRule.excludedRecordIds.length > 0
        ? {
            not: {
              id: {
                in: contextStoreTargetedRecordsRule.excludedRecordIds,
              },
            },
          }
        : undefined,
    ]);
  }
  if (contextStoreTargetedRecordsRule.mode === 'selection') {
    queryFilter =
      contextStoreTargetedRecordsRule.selectedRecordIds.length > 0
        ? {
            id: {
              in: contextStoreTargetedRecordsRule.selectedRecordIds,
            },
          }
        : computeRecordGqlOperationFilter({
            filterValueDependencies,
            fields: objectMetadataItem?.fields ?? [],
            recordFilters: contextStoreFilters,
            recordFilterGroups: [],
          });
  }

  return queryFilter;
};
