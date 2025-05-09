import { Key } from 'ts-key-enum';

import { useDropdown } from '@twenty-modules/dropdown/hooks/useDropdown';
import {
  RecordBoardColumnHeaderAggregateDropdownContext,
  RecordBoardColumnHeaderAggregateDropdownContextValue,
} from '@twenty-modules/object-record/record-board/record-board-column/components/RecordBoardColumnHeaderAggregateDropdownContext';

import { TableOptionsHotkeyScope } from '@twenty-modules/object-record/record-table/types/TableOptionsHotkeyScope';
import { DropdownMenuItemsContainer } from '@twenty-modules/ui/layout/dropdown/components/DropdownMenuItemsContainer';
import { useScopedHotkeys } from '@twenty-modules/ui/utilities/hotkey/hooks/useScopedHotkeys';
import { useLingui } from '@lingui/react/macro';
import { MenuItem } from '@twenty-ui/navigation';

export const RecordBoardColumnHeaderAggregateDropdownMenuContent = () => {
  const { t } = useLingui();

  const { onContentChange, closeDropdown } =
    useDropdown<RecordBoardColumnHeaderAggregateDropdownContextValue>({
      context: RecordBoardColumnHeaderAggregateDropdownContext,
    });

  useScopedHotkeys(
    [Key.Escape],
    () => {
      closeDropdown();
    },
    TableOptionsHotkeyScope.Dropdown,
  );

  return (
    <>
      <DropdownMenuItemsContainer>
        <MenuItem
          onClick={() => {
            onContentChange('countAggregateOperationsOptions');
          }}
          text={t`Count`}
          hasSubMenu
        />
        <MenuItem
          onClick={() => {
            onContentChange('percentAggregateOperationsOptions');
          }}
          text={t`Percent`}
          hasSubMenu
        />
        <MenuItem
          onClick={() => {
            onContentChange('datesAggregateOperationOptions');
          }}
          text={t`Date`}
          hasSubMenu
        />
        <MenuItem
          onClick={() => {
            onContentChange('moreAggregateOperationOptions');
          }}
          text={t`More options`}
          hasSubMenu
        />
      </DropdownMenuItemsContainer>
    </>
  );
};
