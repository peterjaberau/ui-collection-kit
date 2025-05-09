import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import { lastShowPageRecordIdState } from '@twenty-modules/object-record/record-field/states/lastShowPageRecordId';
import { useCurrentRecordGroupId } from '@twenty-modules/object-record/record-group/hooks/useCurrentRecordGroupId';
import { useLazyLoadRecordIndexTable } from '@twenty-modules/object-record/record-index/hooks/useLazyLoadRecordIndexTable';
import { recordIndexHasFetchedAllRecordsByGroupComponentState } from '@twenty-modules/object-record/record-index/states/recordIndexHasFetchedAllRecordsByGroupComponentState';
import { ROW_HEIGHT } from '@twenty-modules/object-record/record-table/constants/RowHeight';
import { useRecordTableContextOrThrow } from '@twenty-modules/object-record/record-table/contexts/RecordTableContext';
import { useOnboardingStatus } from '@twenty-modules/onboarding/hooks/useOnboardingStatus';
import { useScrollToPosition } from '@twenty-modules/ui/utilities/scroll/hooks/useScrollToPosition';
import { useSetRecoilComponentFamilyStateV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useSetRecoilComponentFamilyStateV2';
import { isNonEmptyString } from '@sniptt/guards';
import { OnboardingStatus } from '@twenty-ui/front/generated-metadata/graphql';

export const RecordTableRecordGroupBodyEffect = () => {
  const { objectNameSingular } = useRecordTableContextOrThrow();

  const onboardingStatus = useOnboardingStatus();

  const recordGroupId = useCurrentRecordGroupId();

  const [hasInitializedScroll, setHasInitializedScroll] = useState(false);

  const {
    findManyRecords,
    records,
    totalCount,
    setRecordTableData,
    loading,
    hasNextPage,
  } = useLazyLoadRecordIndexTable(objectNameSingular);

  const setHasRecordFetchedAllRecordsComponents =
    useSetRecoilComponentFamilyStateV2(
      recordIndexHasFetchedAllRecordsByGroupComponentState,
      recordGroupId,
    );

  const [lastShowPageRecordId] = useRecoilState(lastShowPageRecordIdState);

  const { scrollToPosition } = useScrollToPosition();

  useEffect(() => {
    if (isNonEmptyString(lastShowPageRecordId) && !hasInitializedScroll) {
      const recordPosition = records.findIndex(
        (record) => record.id === lastShowPageRecordId,
      );

      if (recordPosition !== -1) {
        const positionInPx = recordPosition * ROW_HEIGHT;

        scrollToPosition(positionInPx);

        setHasInitializedScroll(true);
      }
    }
  }, [
    loading,
    lastShowPageRecordId,
    records,
    scrollToPosition,
    hasInitializedScroll,
  ]);

  useEffect(() => {
    if (!loading) {
      setRecordTableData({
        records,
        currentRecordGroupId: recordGroupId,
        totalCount,
      });
    }
  }, [records, totalCount, setRecordTableData, loading, recordGroupId]);

  useEffect(() => {
    const allRecordsHaveBeenFetched = !hasNextPage;

    setHasRecordFetchedAllRecordsComponents(allRecordsHaveBeenFetched);
  }, [hasNextPage, setHasRecordFetchedAllRecordsComponents]);

  useEffect(() => {
    if (onboardingStatus !== OnboardingStatus.COMPLETED) {
      return;
    }

    findManyRecords();
  }, [onboardingStatus, findManyRecords]);

  return <></>;
};
