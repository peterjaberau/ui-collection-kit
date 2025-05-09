import { ShouldBeRegisteredFunctionParams } from '@twenty-modules/action-menu/actions/types/ShouldBeRegisteredFunctionParams';
import { getActionViewType } from '@twenty-modules/action-menu/actions/utils/getActionViewType';
import { ActionMenuContext } from '@twenty-modules/action-menu/contexts/ActionMenuContext';
import { contextStoreCurrentViewTypeComponentState } from '@twenty-modules/context-store/states/contextStoreCurrentViewTypeComponentState';
import { contextStoreNumberOfSelectedRecordsComponentState } from '@twenty-modules/context-store/states/contextStoreNumberOfSelectedRecordsComponentState';
import { contextStoreTargetedRecordsRuleComponentState } from '@twenty-modules/context-store/states/contextStoreTargetedRecordsRuleComponentState';
import { ContextStoreViewType } from '@twenty-modules/context-store/types/ContextStoreViewType';
import { useFavorites } from '@twenty-modules/favorites/hooks/useFavorites';
import { CoreObjectNameSingular } from '@twenty-modules/object-metadata/types/CoreObjectNameSingular';
import { ObjectMetadataItem } from '@twenty-modules/object-metadata/types/ObjectMetadataItem';
import { recordStoreFamilyState } from '@twenty-modules/object-record/record-store/states/recordStoreFamilyState';
import { isSoftDeleteFilterActiveComponentState } from '@twenty-modules/object-record/record-table/states/isSoftDeleteFilterActiveComponentState';
import { useHasObjectReadOnlyPermission } from '@twenty-modules/settings/roles/hooks/useHasObjectReadOnlyPermission';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';
import { useIsFeatureEnabled } from '@twenty-modules/workspace/hooks/useIsFeatureEnabled';
import { useContext } from 'react';
import { useRecoilValue } from 'recoil';
import { FeatureFlagKey } from '@twenty-ui/front/generated-metadata/graphql';

export const useShouldActionBeRegisteredParams = ({
  objectMetadataItem,
}: {
  objectMetadataItem?: ObjectMetadataItem;
}): ShouldBeRegisteredFunctionParams => {
  const { sortedFavorites: favorites } = useFavorites();

  const contextStoreTargetedRecordsRule = useRecoilComponentValueV2(
    contextStoreTargetedRecordsRuleComponentState,
  );

  const recordId =
    contextStoreTargetedRecordsRule.mode === 'selection'
      ? contextStoreTargetedRecordsRule.selectedRecordIds[0]
      : undefined;

  const foundFavorite = favorites?.find(
    (favorite) => favorite.recordId === recordId,
  );

  const isFavorite = !!foundFavorite;

  const selectedRecord =
    useRecoilValue(recordStoreFamilyState(recordId ?? '')) || undefined;

  const hasObjectReadOnlyPermission = useHasObjectReadOnlyPermission();

  const isNoteOrTask =
    objectMetadataItem?.nameSingular === CoreObjectNameSingular.Note ||
    objectMetadataItem?.nameSingular === CoreObjectNameSingular.Task;

  const { isInRightDrawer } = useContext(ActionMenuContext);

  const isSoftDeleteFilterActive = useRecoilComponentValueV2(
    isSoftDeleteFilterActiveComponentState,
  );

  const isShowPage =
    useRecoilComponentValueV2(contextStoreCurrentViewTypeComponentState) ===
    ContextStoreViewType.ShowPage;

  const isWorkflowEnabled = useIsFeatureEnabled(
    FeatureFlagKey.IsWorkflowEnabled,
  );

  const numberOfSelectedRecords = useRecoilComponentValueV2(
    contextStoreNumberOfSelectedRecordsComponentState,
  );

  const contextStoreCurrentViewType = useRecoilComponentValueV2(
    contextStoreCurrentViewTypeComponentState,
  );

  const viewType = getActionViewType(
    contextStoreCurrentViewType,
    contextStoreTargetedRecordsRule,
  );

  return {
    objectMetadataItem,
    isFavorite,
    hasObjectReadOnlyPermission,
    isNoteOrTask,
    isInRightDrawer,
    isSoftDeleteFilterActive,
    isShowPage,
    selectedRecord,
    isWorkflowEnabled,
    numberOfSelectedRecords,
    viewType: viewType ?? undefined,
  };
};
