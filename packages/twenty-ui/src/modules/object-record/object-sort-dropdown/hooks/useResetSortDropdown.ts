import { isRecordSortDirectionDropdownMenuUnfoldedComponentState } from '@twenty-modules/object-record/object-sort-dropdown/states/isRecordSortDirectionDropdownMenuUnfoldedComponentState';
import { selectedRecordSortDirectionComponentState } from '@twenty-modules/object-record/object-sort-dropdown/states/selectedRecordSortDirectionComponentState';
import { useSetRecoilComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useSetRecoilComponentStateV2';

export const useResetSortDropdown = () => {
  const setIsRecordSortDirectionDropdownMenuUnfolded =
    useSetRecoilComponentStateV2(
      isRecordSortDirectionDropdownMenuUnfoldedComponentState,
    );

  const setSelectedRecordSortDirection = useSetRecoilComponentStateV2(
    selectedRecordSortDirectionComponentState,
  );

  const resetSortDropdown = () => {
    setIsRecordSortDirectionDropdownMenuUnfolded(false);
    setSelectedRecordSortDirection('asc');
  };

  return {
    resetSortDropdown,
  };
};
