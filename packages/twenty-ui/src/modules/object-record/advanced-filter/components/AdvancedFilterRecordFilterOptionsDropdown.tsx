import { useChildRecordFiltersAndRecordFilterGroups } from '@twenty-modules/object-record/advanced-filter/hooks/useChildRecordFiltersAndRecordFilterGroups';
import { useRemoveRecordFilterGroup } from '@twenty-modules/object-record/record-filter-group/hooks/useRemoveRecordFilterGroup';
import { useRemoveRootRecordFilterGroupIfEmpty } from '@twenty-modules/object-record/record-filter-group/hooks/useRemoveRootRecordFilterGroupIfEmpty';

import { useRemoveRecordFilter } from '@twenty-modules/object-record/record-filter/hooks/useRemoveRecordFilter';
import { currentRecordFiltersComponentState } from '@twenty-modules/object-record/record-filter/states/currentRecordFiltersComponentState';

import { DEFAULT_ADVANCED_FILTER_DROPDOWN_OFFSET } from '@twenty-modules/object-record/advanced-filter/constants/DefaultAdvancedFilterDropdownOffset';
import { Dropdown } from '@twenty-modules/ui/layout/dropdown/components/Dropdown';
import { DropdownMenuItemsContainer } from '@twenty-modules/ui/layout/dropdown/components/DropdownMenuItemsContainer';
import { useDropdown } from '@twenty-modules/ui/layout/dropdown/hooks/useDropdown';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';
import { IconButton } from '@twenty-ui/input';
import { IconDotsVertical, IconTrash } from '@twenty-ui/display';
import { MenuItem } from '@twenty-ui/navigation';

type AdvancedFilterRecordFilterOptionsDropdownProps = {
  recordFilterId: string;
};

export const AdvancedFilterRecordFilterOptionsDropdown = ({
  recordFilterId,
}: AdvancedFilterRecordFilterOptionsDropdownProps) => {
  const dropdownId = `advanced-filter-record-filter-options-${recordFilterId}`;

  const { closeDropdown } = useDropdown(dropdownId);

  const { removeRecordFilter } = useRemoveRecordFilter();
  const { removeRecordFilterGroup } = useRemoveRecordFilterGroup();

  const currentRecordFilters = useRecoilComponentValueV2(
    currentRecordFiltersComponentState,
  );

  const currentRecordFilter = currentRecordFilters.find(
    (recordFilter) => recordFilter.id === recordFilterId,
  );

  const { childRecordFiltersAndRecordFilterGroups } =
    useChildRecordFiltersAndRecordFilterGroups({
      recordFilterGroupId: currentRecordFilter?.recordFilterGroupId,
    });

  const { removeRootRecordFilterGroupIfEmpty } =
    useRemoveRootRecordFilterGroupIfEmpty();

  const handleRemove = async () => {
    closeDropdown();

    if (isDefined(currentRecordFilter?.recordFilterGroupId)) {
      const isOnlyViewFilterInGroup =
        childRecordFiltersAndRecordFilterGroups?.length === 1;

      if (isOnlyViewFilterInGroup) {
        removeRecordFilterGroup(currentRecordFilter.recordFilterGroupId);
      }
    }

    removeRecordFilter({ recordFilterId: recordFilterId });

    removeRootRecordFilterGroupIfEmpty();
  };

  return (
    <Dropdown
      dropdownId={dropdownId}
      clickableComponent={
        <IconButton
          aria-label="Record filter rule options"
          variant="tertiary"
          Icon={IconDotsVertical}
        />
      }
      dropdownComponents={
        <DropdownMenuItemsContainer>
          <MenuItem
            text="Remove rule"
            onClick={handleRemove}
            LeftIcon={IconTrash}
            accent="danger"
          />
        </DropdownMenuItemsContainer>
      }
      dropdownHotkeyScope={{ scope: dropdownId }}
      dropdownOffset={DEFAULT_ADVANCED_FILTER_DROPDOWN_OFFSET}
      dropdownPlacement="bottom-start"
    />
  );
};
