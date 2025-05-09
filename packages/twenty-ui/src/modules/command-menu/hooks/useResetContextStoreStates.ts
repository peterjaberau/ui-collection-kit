import { contextStoreCurrentObjectMetadataItemIdComponentState } from '@twenty-modules/context-store/states/contextStoreCurrentObjectMetadataItemIdComponentState';
import { contextStoreCurrentViewIdComponentState } from '@twenty-modules/context-store/states/contextStoreCurrentViewIdComponentState';
import { contextStoreFiltersComponentState } from '@twenty-modules/context-store/states/contextStoreFiltersComponentState';
import { contextStoreNumberOfSelectedRecordsComponentState } from '@twenty-modules/context-store/states/contextStoreNumberOfSelectedRecordsComponentState';
import { contextStoreTargetedRecordsRuleComponentState } from '@twenty-modules/context-store/states/contextStoreTargetedRecordsRuleComponentState';
import { useRecoilCallback } from 'recoil';

export const useResetContextStoreStates = () => {
  const resetContextStoreStates = useRecoilCallback(({ set }) => {
    return (instanceId: string) => {
      set(
        contextStoreCurrentObjectMetadataItemIdComponentState.atomFamily({
          instanceId,
        }),
        undefined,
      );

      set(
        contextStoreTargetedRecordsRuleComponentState.atomFamily({
          instanceId,
        }),
        {
          mode: 'selection',
          selectedRecordIds: [],
        },
      );

      set(
        contextStoreNumberOfSelectedRecordsComponentState.atomFamily({
          instanceId,
        }),
        0,
      );

      set(
        contextStoreFiltersComponentState.atomFamily({
          instanceId,
        }),
        [],
      );

      set(
        contextStoreCurrentViewIdComponentState.atomFamily({
          instanceId,
        }),
        undefined,
      );
    };
  }, []);

  return { resetContextStoreStates };
};
