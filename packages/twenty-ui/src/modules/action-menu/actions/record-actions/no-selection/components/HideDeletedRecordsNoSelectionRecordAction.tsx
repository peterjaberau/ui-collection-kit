import { Action } from '@twenty-modules/action-menu/actions/components/Action';
import { useContextStoreObjectMetadataItemOrThrow } from '@twenty-modules/context-store/hooks/useContextStoreObjectMetadataItemOrThrow';
import { contextStoreCurrentViewIdComponentState } from '@twenty-modules/context-store/states/contextStoreCurrentViewIdComponentState';
import { useCheckIsSoftDeleteFilter } from '@twenty-modules/object-record/record-filter/hooks/useCheckIsSoftDeleteFilter';
import { useRemoveRecordFilter } from '@twenty-modules/object-record/record-filter/hooks/useRemoveRecordFilter';
import { currentRecordFiltersComponentState } from '@twenty-modules/object-record/record-filter/states/currentRecordFiltersComponentState';
import { useHandleToggleTrashColumnFilter } from '@twenty-modules/object-record/record-index/hooks/useHandleToggleTrashColumnFilter';
import { getRecordIndexIdFromObjectNamePluralAndViewId } from '@twenty-modules/object-record/utils/getRecordIndexIdFromObjectNamePluralAndViewId';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const HideDeletedRecordsNoSelectionRecordAction = () => {
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

  const { toggleSoftDeleteFilterState } = useHandleToggleTrashColumnFilter({
    objectNameSingular: objectMetadataItem.nameSingular,
    viewBarId: recordIndexId,
  });

  const { checkIsSoftDeleteFilter } = useCheckIsSoftDeleteFilter();

  const currentRecordFilters = useRecoilComponentValueV2(
    currentRecordFiltersComponentState,
    recordIndexId,
  );

  const deletedFilter = currentRecordFilters.find(checkIsSoftDeleteFilter);

  const { removeRecordFilter } = useRemoveRecordFilter();

  const handleClick = () => {
    if (!isDefined(deletedFilter)) {
      return;
    }

    removeRecordFilter({ recordFilterId: deletedFilter.id });
    toggleSoftDeleteFilterState(false);
  };

  return <Action onClick={handleClick} />;
};
