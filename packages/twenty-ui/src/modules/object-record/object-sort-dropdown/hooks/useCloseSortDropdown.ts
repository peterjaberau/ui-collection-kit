import { OBJECT_SORT_DROPDOWN_ID } from '@twenty-modules/object-record/object-sort-dropdown/constants/ObjectSortDropdownId';
import { useResetSortDropdown } from '@twenty-modules/object-record/object-sort-dropdown/hooks/useResetSortDropdown';
import { useDropdown } from '@twenty-modules/ui/layout/dropdown/hooks/useDropdown';

export const useCloseSortDropdown = () => {
  const { resetSortDropdown } = useResetSortDropdown();

  const { closeDropdown } = useDropdown(OBJECT_SORT_DROPDOWN_ID);

  const closeSortDropdown = () => {
    closeDropdown();
    resetSortDropdown();
  };

  return {
    closeSortDropdown,
  };
};
