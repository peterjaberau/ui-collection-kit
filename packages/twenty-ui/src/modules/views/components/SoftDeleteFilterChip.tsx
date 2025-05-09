import { useRemoveRecordFilter } from '@twenty-modules/object-record/record-filter/hooks/useRemoveRecordFilter';
import { RecordFilter } from '@twenty-modules/object-record/record-filter/types/RecordFilter';
import { isSoftDeleteFilterActiveComponentState } from '@twenty-modules/object-record/record-table/states/isSoftDeleteFilterActiveComponentState';
import { useSetRecoilComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useSetRecoilComponentStateV2';
import { SortOrFilterChip } from '@twenty-modules/views/components/SortOrFilterChip';
import { useIcons } from '@twenty-ui/display';

type SoftDeleteFilterChipProps = {
  recordFilter: RecordFilter;
  viewBarId: string;
};

export const SoftDeleteFilterChip = ({
  recordFilter,
  viewBarId,
}: SoftDeleteFilterChipProps) => {
  const setIsSoftDeleteFilterActive = useSetRecoilComponentStateV2(
    isSoftDeleteFilterActiveComponentState,
    viewBarId,
  );

  const { removeRecordFilter } = useRemoveRecordFilter();

  const { getIcon } = useIcons();

  const handleRemoveClick = () => {
    removeRecordFilter({ recordFilterId: recordFilter.id });

    setIsSoftDeleteFilterActive(false);
  };

  const ChipIcon = getIcon('IconTrash');

  return (
    <SortOrFilterChip
      testId={recordFilter.fieldMetadataId}
      variant={'danger'}
      labelValue={recordFilter.label ?? ''}
      Icon={ChipIcon}
      onRemove={handleRemoveClick}
    />
  );
};
