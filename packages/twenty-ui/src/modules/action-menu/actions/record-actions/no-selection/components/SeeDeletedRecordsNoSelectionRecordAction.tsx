import { Action } from '@twenty-modules/action-menu/actions/components/Action';
import { useContextStoreObjectMetadataItemOrThrow } from '@twenty-modules/context-store/hooks/useContextStoreObjectMetadataItemOrThrow';
import { contextStoreCurrentViewIdComponentState } from '@twenty-modules/context-store/states/contextStoreCurrentViewIdComponentState';
import { useHandleToggleTrashColumnFilter } from '@twenty-modules/object-record/record-index/hooks/useHandleToggleTrashColumnFilter';
import { getRecordIndexIdFromObjectNamePluralAndViewId } from '@twenty-modules/object-record/utils/getRecordIndexIdFromObjectNamePluralAndViewId';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';

export const SeeDeletedRecordsNoSelectionRecordAction = () => {
  const { objectMetadataItem } = useContextStoreObjectMetadataItemOrThrow();

  const currentViewId = useRecoilComponentValueV2(
    contextStoreCurrentViewIdComponentState,
  );

  if (!currentViewId) {
    throw new Error('Current view ID is not defined');
  }

  const recordIndexId = getRecordIndexIdFromObjectNamePluralAndViewId(
    objectMetadataItem.namePlural,
    currentViewId,
  );

  const { handleToggleTrashColumnFilter, toggleSoftDeleteFilterState } =
    useHandleToggleTrashColumnFilter({
      objectNameSingular: objectMetadataItem.nameSingular,
      viewBarId: recordIndexId,
    });

  return (
    <Action
      onClick={() => {
        handleToggleTrashColumnFilter();
        toggleSoftDeleteFilterState(true);
      }}
    />
  );
};
