import { contextStoreCurrentViewIdComponentState } from '@twenty-modules/context-store/states/contextStoreCurrentViewIdComponentState';
import { currentRecordFilterGroupsComponentState } from '@twenty-modules/object-record/record-filter-group/states/currentRecordFilterGroupsComponentState';
import { prefetchViewFromViewIdFamilySelector } from '@twenty-modules/prefetch/states/selector/prefetchViewFromViewIdFamilySelector';
import { useRecoilComponentCallbackStateV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentCallbackStateV2';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';
import { useSetRecoilComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useSetRecoilComponentStateV2';
import { mapViewFilterGroupsToRecordFilterGroups } from '@twenty-modules/views/utils/mapViewFilterGroupsToRecordFilterGroups';
import { useRecoilCallback } from 'recoil';
import { isDeeplyEqual } from '@twenty-ui/front/utils/isDeeplyEqual';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const useApplyCurrentViewFilterGroupsToCurrentRecordFilterGroups =
  () => {
    const currentViewId = useRecoilComponentValueV2(
      contextStoreCurrentViewIdComponentState,
    );

    const setCurrentRecordFilterGroups = useSetRecoilComponentStateV2(
      currentRecordFilterGroupsComponentState,
    );

    const currentRecordFilterGroupsCallbackState =
      useRecoilComponentCallbackStateV2(
        currentRecordFilterGroupsComponentState,
      );

    const applyCurrentViewFilterGroupsToCurrentRecordFilterGroups =
      useRecoilCallback(
        ({ snapshot }) =>
          () => {
            const currentView = snapshot
              .getLoadable(
                prefetchViewFromViewIdFamilySelector({
                  viewId: currentViewId ?? '',
                }),
              )
              .getValue();

            if (isDefined(currentView)) {
              const currentRecordFilterGroups = snapshot
                .getLoadable(currentRecordFilterGroupsCallbackState)
                .getValue();

              const newRecordFilterGroups =
                mapViewFilterGroupsToRecordFilterGroups(
                  currentView.viewFilterGroups ?? [],
                );

              if (
                !isDeeplyEqual(currentRecordFilterGroups, newRecordFilterGroups)
              ) {
                setCurrentRecordFilterGroups(newRecordFilterGroups);
              }
            }
          },
        [
          currentViewId,
          setCurrentRecordFilterGroups,
          currentRecordFilterGroupsCallbackState,
        ],
      );

    return {
      applyCurrentViewFilterGroupsToCurrentRecordFilterGroups,
    };
  };
