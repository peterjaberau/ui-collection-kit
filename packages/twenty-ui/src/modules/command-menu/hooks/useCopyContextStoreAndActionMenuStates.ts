import { contextStoreCurrentObjectMetadataItemIdComponentState } from '@twenty-modules/context-store/states/contextStoreCurrentObjectMetadataItemIdComponentState';
import { contextStoreCurrentViewIdComponentState } from '@twenty-modules/context-store/states/contextStoreCurrentViewIdComponentState';
import { contextStoreCurrentViewTypeComponentState } from '@twenty-modules/context-store/states/contextStoreCurrentViewTypeComponentState';
import { contextStoreFiltersComponentState } from '@twenty-modules/context-store/states/contextStoreFiltersComponentState';
import { contextStoreNumberOfSelectedRecordsComponentState } from '@twenty-modules/context-store/states/contextStoreNumberOfSelectedRecordsComponentState';
import { contextStoreTargetedRecordsRuleComponentState } from '@twenty-modules/context-store/states/contextStoreTargetedRecordsRuleComponentState';
import { useRecoilCallback } from 'recoil';

export const useCopyContextStoreStates = () => {
  const copyContextStoreStates = useRecoilCallback(
    ({ snapshot, set }) =>
      ({
        instanceIdToCopyFrom,
        instanceIdToCopyTo,
      }: {
        instanceIdToCopyFrom: string;
        instanceIdToCopyTo: string;
      }) => {
        const contextStoreCurrentObjectMetadataItemId = snapshot
          .getLoadable(
            contextStoreCurrentObjectMetadataItemIdComponentState.atomFamily({
              instanceId: instanceIdToCopyFrom,
            }),
          )
          .getValue();

        set(
          contextStoreCurrentObjectMetadataItemIdComponentState.atomFamily({
            instanceId: instanceIdToCopyTo,
          }),
          contextStoreCurrentObjectMetadataItemId,
        );

        const contextStoreTargetedRecordsRule = snapshot
          .getLoadable(
            contextStoreTargetedRecordsRuleComponentState.atomFamily({
              instanceId: instanceIdToCopyFrom,
            }),
          )
          .getValue();

        set(
          contextStoreTargetedRecordsRuleComponentState.atomFamily({
            instanceId: instanceIdToCopyTo,
          }),
          contextStoreTargetedRecordsRule,
        );

        const contextStoreNumberOfSelectedRecords = snapshot
          .getLoadable(
            contextStoreNumberOfSelectedRecordsComponentState.atomFamily({
              instanceId: instanceIdToCopyFrom,
            }),
          )
          .getValue();

        set(
          contextStoreNumberOfSelectedRecordsComponentState.atomFamily({
            instanceId: instanceIdToCopyTo,
          }),
          contextStoreNumberOfSelectedRecords,
        );

        const contextStoreFilters = snapshot
          .getLoadable(
            contextStoreFiltersComponentState.atomFamily({
              instanceId: instanceIdToCopyFrom,
            }),
          )
          .getValue();

        set(
          contextStoreFiltersComponentState.atomFamily({
            instanceId: instanceIdToCopyTo,
          }),
          contextStoreFilters,
        );

        const contextStoreCurrentViewId = snapshot
          .getLoadable(
            contextStoreCurrentViewIdComponentState.atomFamily({
              instanceId: instanceIdToCopyFrom,
            }),
          )
          .getValue();

        set(
          contextStoreCurrentViewIdComponentState.atomFamily({
            instanceId: instanceIdToCopyTo,
          }),
          contextStoreCurrentViewId,
        );

        const contextStoreCurrentViewType = snapshot
          .getLoadable(
            contextStoreCurrentViewTypeComponentState.atomFamily({
              instanceId: instanceIdToCopyFrom,
            }),
          )
          .getValue();

        set(
          contextStoreCurrentViewTypeComponentState.atomFamily({
            instanceId: instanceIdToCopyTo,
          }),
          contextStoreCurrentViewType,
        );
      },
    [],
  );

  return { copyContextStoreStates };
};
