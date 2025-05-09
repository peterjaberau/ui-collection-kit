import { useCallback } from 'react';

import { RecordFilter } from '@twenty-modules/object-record/record-filter/types/RecordFilter';
import { Dropdown } from '@twenty-modules/ui/layout/dropdown/components/Dropdown';
import { useDropdown } from '@twenty-modules/ui/layout/dropdown/hooks/useDropdown';
import { HotkeyScope } from '@twenty-modules/ui/utilities/hotkey/types/HotkeyScope';
import { EditableFilterChip } from '@twenty-modules/views/components/EditableFilterChip';

import { ObjectFilterOperandSelectAndInput } from '@twenty-modules/object-record/object-filter-dropdown/components/ObjectFilterOperandSelectAndInput';
import { useRemoveRecordFilter } from '@twenty-modules/object-record/record-filter/hooks/useRemoveRecordFilter';
import { isRecordFilterConsideredEmpty } from '@twenty-modules/object-record/record-filter/utils/isRecordFilterConsideredEmpty';
import { useSetEditableFilterChipDropdownStates } from '@twenty-modules/views/hooks/useSetEditableFilterChipDropdownStates';

type EditableFilterDropdownButtonProps = {
  recordFilter: RecordFilter;
  hotkeyScope: HotkeyScope;
};

export const EditableFilterDropdownButton = ({
  recordFilter,
  hotkeyScope,
}: EditableFilterDropdownButtonProps) => {
  const { closeDropdown } = useDropdown(recordFilter.id);

  const { removeRecordFilter } = useRemoveRecordFilter();

  const handleRemove = () => {
    closeDropdown();

    removeRecordFilter({ recordFilterId: recordFilter.id });
  };

  const handleDropdownClickOutside = useCallback(() => {
    const recordFilterIsEmpty = isRecordFilterConsideredEmpty(recordFilter);

    if (recordFilterIsEmpty) {
      removeRecordFilter({ recordFilterId: recordFilter.id });
    }
  }, [recordFilter, removeRecordFilter]);

  const { setEditableFilterChipDropdownStates } =
    useSetEditableFilterChipDropdownStates();

  const handleFilterChipClick = () => {
    setEditableFilterChipDropdownStates(recordFilter);
  };

  return (
    <>
      <Dropdown
        dropdownId={recordFilter.id}
        clickableComponent={
          <EditableFilterChip
            recordFilter={recordFilter}
            onRemove={handleRemove}
            onClick={handleFilterChipClick}
          />
        }
        dropdownComponents={
          <ObjectFilterOperandSelectAndInput
            filterDropdownId={recordFilter.id}
          />
        }
        dropdownHotkeyScope={hotkeyScope}
        dropdownOffset={{ y: 8, x: 0 }}
        dropdownPlacement="bottom-start"
        onClickOutside={handleDropdownClickOutside}
      />
    </>
  );
};
