import { contextStoreNumberOfSelectedRecordsComponentState } from '@twenty-modules/context-store/states/contextStoreNumberOfSelectedRecordsComponentState';
import { contextStoreTargetedRecordsRuleComponentState } from '@twenty-modules/context-store/states/contextStoreTargetedRecordsRuleComponentState';
import { useSetRecoilComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useSetRecoilComponentStateV2';
import { useEffect } from 'react';

export const RecordShowContainerContextStoreTargetedRecordsEffect = ({
  recordId,
}: {
  recordId: string;
}) => {
  const setContextStoreTargetedRecordsRule = useSetRecoilComponentStateV2(
    contextStoreTargetedRecordsRuleComponentState,
  );

  const setContextStoreNumberOfSelectedRecords = useSetRecoilComponentStateV2(
    contextStoreNumberOfSelectedRecordsComponentState,
  );

  useEffect(() => {
    setContextStoreTargetedRecordsRule({
      mode: 'selection',
      selectedRecordIds: [recordId],
    });
    setContextStoreNumberOfSelectedRecords(1);

    return () => {
      setContextStoreTargetedRecordsRule({
        mode: 'selection',
        selectedRecordIds: [],
      });
      setContextStoreNumberOfSelectedRecords(0);
    };
  }, [
    recordId,
    setContextStoreTargetedRecordsRule,
    setContextStoreNumberOfSelectedRecords,
  ]);

  return null;
};
