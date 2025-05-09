import { contextStoreFiltersComponentState } from '@twenty-modules/context-store/states/contextStoreFiltersComponentState';
import { contextStoreNumberOfSelectedRecordsComponentState } from '@twenty-modules/context-store/states/contextStoreNumberOfSelectedRecordsComponentState';
import { contextStoreTargetedRecordsRuleComponentState } from '@twenty-modules/context-store/states/contextStoreTargetedRecordsRuleComponentState';
import { computeContextStoreFilters } from '@twenty-modules/context-store/utils/computeContextStoreFilters';
import { useObjectMetadataItem } from '@twenty-modules/object-metadata/hooks/useObjectMetadataItem';
import { useObjectNameSingularFromPlural } from '@twenty-modules/object-metadata/hooks/useObjectNameSingularFromPlural';
import { useFindManyRecords } from '@twenty-modules/object-record/hooks/useFindManyRecords';
import { useFilterValueDependencies } from '@twenty-modules/object-record/record-filter/hooks/useFilterValueDependencies';
import { useRecordIndexContextOrThrow } from '@twenty-modules/object-record/record-index/contexts/RecordIndexContext';
import { useFindManyRecordIndexTableParams } from '@twenty-modules/object-record/record-index/hooks/useFindManyRecordIndexTableParams';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';
import { useSetRecoilComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useSetRecoilComponentStateV2';
import { useEffect } from 'react';

export const RecordIndexContainerContextStoreNumberOfSelectedRecordsEffect =
  () => {
    const setContextStoreNumberOfSelectedRecords = useSetRecoilComponentStateV2(
      contextStoreNumberOfSelectedRecordsComponentState,
    );

    const contextStoreTargetedRecordsRule = useRecoilComponentValueV2(
      contextStoreTargetedRecordsRuleComponentState,
    );

    const { objectNamePlural } = useRecordIndexContextOrThrow();

    const { objectNameSingular } = useObjectNameSingularFromPlural({
      objectNamePlural,
    });

    const { objectMetadataItem } = useObjectMetadataItem({
      objectNameSingular,
    });

    const findManyRecordsParams = useFindManyRecordIndexTableParams(
      objectMetadataItem?.nameSingular ?? '',
    );

    const contextStoreFilters = useRecoilComponentValueV2(
      contextStoreFiltersComponentState,
    );

    const { filterValueDependencies } = useFilterValueDependencies();

    const { totalCount } = useFindManyRecords({
      ...findManyRecordsParams,
      recordGqlFields: {
        id: true,
      },
      filter: computeContextStoreFilters(
        contextStoreTargetedRecordsRule,
        contextStoreFilters,
        objectMetadataItem,
        filterValueDependencies,
      ),
      limit: 1,
      skip: contextStoreTargetedRecordsRule.mode === 'selection',
    });

    useEffect(() => {
      if (contextStoreTargetedRecordsRule.mode === 'selection') {
        setContextStoreNumberOfSelectedRecords(
          contextStoreTargetedRecordsRule.selectedRecordIds.length,
        );
      }
      if (contextStoreTargetedRecordsRule.mode === 'exclusion') {
        setContextStoreNumberOfSelectedRecords(totalCount ?? 0);
      }
    }, [
      contextStoreTargetedRecordsRule,
      setContextStoreNumberOfSelectedRecords,
      totalCount,
    ]);

    return null;
  };
