import { FieldMetadata } from '@twenty-modules/object-record/record-field/types/FieldMetadata';
import { ColumnDefinition } from '@twenty-modules/object-record/record-table/types/ColumnDefinition';
import { ObjectRecord } from '@twenty-modules/object-record/types/ObjectRecord';

import { contextStoreFiltersComponentState } from '@twenty-modules/context-store/states/contextStoreFiltersComponentState';
import { contextStoreTargetedRecordsRuleComponentState } from '@twenty-modules/context-store/states/contextStoreTargetedRecordsRuleComponentState';
import { computeContextStoreFilters } from '@twenty-modules/context-store/utils/computeContextStoreFilters';
import { ObjectMetadataItem } from '@twenty-modules/object-metadata/types/ObjectMetadataItem';
import { useLazyFetchAllRecords } from '@twenty-modules/object-record/hooks/useLazyFetchAllRecords';
import { EXPORT_TABLE_DATA_DEFAULT_PAGE_SIZE } from '@twenty-modules/object-record/object-options-dropdown/constants/ExportTableDataDefaultPageSize';
import { useObjectOptionsForBoard } from '@twenty-modules/object-record/object-options-dropdown/hooks/useObjectOptionsForBoard';
import { useFilterValueDependencies } from '@twenty-modules/object-record/record-filter/hooks/useFilterValueDependencies';
import { recordGroupFieldMetadataComponentState } from '@twenty-modules/object-record/record-group/states/recordGroupFieldMetadataComponentState';
import { useFindManyRecordIndexTableParams } from '@twenty-modules/object-record/record-index/hooks/useFindManyRecordIndexTableParams';
import { visibleTableColumnsComponentSelector } from '@twenty-modules/object-record/record-table/states/selectors/visibleTableColumnsComponentSelector';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';
import { ViewType } from '@twenty-modules/views/types/ViewType';

export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const percentage = (part: number, whole: number): number => {
  return Math.round((part / whole) * 100);
};

export type UseRecordDataOptions = {
  delayMs: number;
  maximumRequests?: number;
  objectMetadataItem: ObjectMetadataItem;
  pageSize?: number;
  recordIndexId: string;
  callback: (
    rows: ObjectRecord[],
    columns: ColumnDefinition<FieldMetadata>[],
  ) => void | Promise<void>;
  viewType?: ViewType;
};

export const useExportFetchRecords = ({
  objectMetadataItem,
  delayMs,
  maximumRequests = 100,
  pageSize = EXPORT_TABLE_DATA_DEFAULT_PAGE_SIZE,
  recordIndexId,
  callback,
  viewType = ViewType.Table,
}: UseRecordDataOptions) => {
  const { hiddenBoardFields } = useObjectOptionsForBoard({
    objectNameSingular: objectMetadataItem.nameSingular,
    recordBoardId: recordIndexId,
    viewBarId: recordIndexId,
  });

  const recordGroupFieldMetadata = useRecoilComponentValueV2(
    recordGroupFieldMetadataComponentState,
    recordIndexId,
  );

  const hiddenKanbanFieldColumn = hiddenBoardFields.find(
    (column) => column.metadata.fieldName === recordGroupFieldMetadata?.name,
  );
  const columns = useRecoilComponentValueV2(
    visibleTableColumnsComponentSelector,
    recordIndexId,
  );

  const contextStoreTargetedRecordsRule = useRecoilComponentValueV2(
    contextStoreTargetedRecordsRuleComponentState,
  );

  const contextStoreFilters = useRecoilComponentValueV2(
    contextStoreFiltersComponentState,
  );

  const { filterValueDependencies } = useFilterValueDependencies();

  const queryFilter = computeContextStoreFilters(
    contextStoreTargetedRecordsRule,
    contextStoreFilters,
    objectMetadataItem,
    filterValueDependencies,
  );

  const findManyRecordsParams = useFindManyRecordIndexTableParams(
    objectMetadataItem.nameSingular,
  );

  const finalColumns = [
    ...columns,
    ...(hiddenKanbanFieldColumn && viewType === ViewType.Kanban
      ? [hiddenKanbanFieldColumn]
      : []),
  ];

  const { progress, isDownloading, fetchAllRecords } = useLazyFetchAllRecords({
    ...findManyRecordsParams,
    filter: queryFilter,
    limit: pageSize,
    delayMs,
    maximumRequests,
  });

  const getTableData = async () => {
    const result = await fetchAllRecords();
    if (result.length > 0) {
      callback(result, finalColumns);
    }
  };

  return {
    progress,
    isDownloading,
    getTableData: getTableData,
  };
};
