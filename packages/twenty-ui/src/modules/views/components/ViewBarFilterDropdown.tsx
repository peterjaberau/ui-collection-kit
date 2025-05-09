import { useResetFilterDropdown } from '@twenty-modules/object-record/object-filter-dropdown/hooks/useResetFilterDropdown';
import { Dropdown } from '@twenty-modules/ui/layout/dropdown/components/Dropdown';
import { HotkeyScope } from '@twenty-modules/ui/utilities/hotkey/types/HotkeyScope';
import { VIEW_BAR_FILTER_DROPDOWN_ID } from '@twenty-modules/views/constants/ViewBarFilterDropdownId';

import { objectFilterDropdownCurrentRecordFilterComponentState } from '@twenty-modules/object-record/object-filter-dropdown/states/objectFilterDropdownCurrentRecordFilterComponentState';
import { useRemoveRecordFilter } from '@twenty-modules/object-record/record-filter/hooks/useRemoveRecordFilter';
import { isRecordFilterConsideredEmpty } from '@twenty-modules/object-record/record-filter/utils/isRecordFilterConsideredEmpty';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';
import { ViewBarFilterDropdownContent } from '@twenty-modules/views/components/ViewBarFilterDropdownContent';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';
import { ViewBarFilterButton } from './ViewBarFilterButton';

type ViewBarFilterDropdownProps = {
  hotkeyScope: HotkeyScope;
};

export const ViewBarFilterDropdown = ({
  hotkeyScope,
}: ViewBarFilterDropdownProps) => {
  const { resetFilterDropdown } = useResetFilterDropdown();

  const { removeRecordFilter } = useRemoveRecordFilter();

  const objectFilterDropdownCurrentRecordFilter = useRecoilComponentValueV2(
    objectFilterDropdownCurrentRecordFilterComponentState,
  );

  const handleDropdownClickOutside = () => {
    const recordFilterIsEmpty =
      isDefined(objectFilterDropdownCurrentRecordFilter) &&
      isRecordFilterConsideredEmpty(objectFilterDropdownCurrentRecordFilter);

    if (recordFilterIsEmpty) {
      removeRecordFilter({
        recordFilterId: objectFilterDropdownCurrentRecordFilter.id,
      });
    }
  };

  const handleDropdownClose = () => {
    resetFilterDropdown();
  };

  return (
    <Dropdown
      dropdownId={VIEW_BAR_FILTER_DROPDOWN_ID}
      onClose={handleDropdownClose}
      clickableComponent={<ViewBarFilterButton />}
      dropdownComponents={<ViewBarFilterDropdownContent />}
      dropdownHotkeyScope={hotkeyScope}
      dropdownOffset={{ y: 8 }}
      onClickOutside={handleDropdownClickOutside}
    />
  );
};
