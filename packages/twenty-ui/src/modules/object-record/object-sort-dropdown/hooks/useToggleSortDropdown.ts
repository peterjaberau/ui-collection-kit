import { OBJECT_SORT_DROPDOWN_ID } from '@twenty-modules/object-record/object-sort-dropdown/constants/ObjectSortDropdownId';
import { useResetSortDropdown } from '@twenty-modules/object-record/object-sort-dropdown/hooks/useResetSortDropdown';
import { useDropdown } from '@twenty-modules/ui/layout/dropdown/hooks/useDropdown';

export const useToggleSortDropdown = () => {
  const { toggleDropdown } = useDropdown(OBJECT_SORT_DROPDOWN_ID);

  const { resetSortDropdown } = useResetSortDropdown();

  const toggleSortDropdown = () => {
    toggleDropdown();
    resetSortDropdown();
  };

  return {
    toggleSortDropdown,
  };
};
