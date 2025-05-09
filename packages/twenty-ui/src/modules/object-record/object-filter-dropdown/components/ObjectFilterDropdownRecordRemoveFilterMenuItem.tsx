import { useEmptyRecordFilter } from '@twenty-modules/object-record/object-filter-dropdown/hooks/useEmptyRecordFilter';
import { DropdownMenuItemsContainer } from '@twenty-modules/ui/layout/dropdown/components/DropdownMenuItemsContainer';
import { useDropdown } from '@twenty-modules/ui/layout/dropdown/hooks/useDropdown';
import { IconFilterOff } from '@twenty-ui/display';
import { MenuItem } from '@twenty-ui/navigation';

export const ObjectFilterDropdownRecordRemoveFilterMenuItem = () => {
  const { emptyRecordFilter } = useEmptyRecordFilter();

  const { closeDropdown } = useDropdown();

  const handleRemoveFilter = () => {
    emptyRecordFilter();
    closeDropdown();
  };

  return (
    <DropdownMenuItemsContainer>
      <MenuItem
        onClick={handleRemoveFilter}
        LeftIcon={IconFilterOff}
        text={'Remove filter'}
      />
    </DropdownMenuItemsContainer>
  );
};
