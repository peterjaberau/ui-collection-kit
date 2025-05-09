import { useObjectLabel } from '@twenty-modules/object-metadata/hooks/useObjectLabel';
import { useCheckIsSoftDeleteFilter } from '@twenty-modules/object-record/record-filter/hooks/useCheckIsSoftDeleteFilter';
import { useRemoveRecordFilter } from '@twenty-modules/object-record/record-filter/hooks/useRemoveRecordFilter';
import { useHandleToggleTrashColumnFilter } from '@twenty-modules/object-record/record-index/hooks/useHandleToggleTrashColumnFilter';
import { useRecordTableContextOrThrow } from '@twenty-modules/object-record/record-table/contexts/RecordTableContext';
import { RecordTableEmptyStateDisplay } from '@twenty-modules/object-record/record-table/empty-state/components/RecordTableEmptyStateDisplay';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';

import { currentRecordFiltersComponentState } from '@twenty-modules/object-record/record-filter/states/currentRecordFiltersComponentState';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';
import { IconFilterOff } from '@twenty-ui/display';

export const RecordTableEmptyStateSoftDelete = () => {
  const { objectMetadataItem, objectNameSingular, recordTableId } =
    useRecordTableContextOrThrow();

  const currentRecordFilters = useRecoilComponentValueV2(
    currentRecordFiltersComponentState,
  );

  const { toggleSoftDeleteFilterState } = useHandleToggleTrashColumnFilter({
    objectNameSingular,
    viewBarId: recordTableId,
  });

  const { removeRecordFilter } = useRemoveRecordFilter();

  const { checkIsSoftDeleteFilter } = useCheckIsSoftDeleteFilter();

  const handleButtonClick = async () => {
    const deletedFilter = currentRecordFilters.find(checkIsSoftDeleteFilter);

    if (!isDefined(deletedFilter)) {
      throw new Error('Deleted filter not found');
    }

    removeRecordFilter({ recordFilterId: deletedFilter.id });

    toggleSoftDeleteFilterState(false);
  };

  const objectLabel = useObjectLabel(objectMetadataItem);

  return (
    <RecordTableEmptyStateDisplay
      buttonTitle={'Remove Deleted filter'}
      subTitle={'No deleted records matching the filter criteria were found.'}
      title={`No Deleted ${objectLabel} found`}
      ButtonIcon={IconFilterOff}
      animatedPlaceholderType="noDeletedRecord"
      onClick={handleButtonClick}
    />
  );
};
