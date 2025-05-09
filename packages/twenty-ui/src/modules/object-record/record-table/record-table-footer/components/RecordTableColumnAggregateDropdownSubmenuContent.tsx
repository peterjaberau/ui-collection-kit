import { RecordTableColumnAggregateFooterAggregateOperationMenuItems } from '@twenty-modules/object-record/record-table/record-table-footer/components/RecordTableColumnAggregateFooterAggregateOperationMenuItems';
import { RecordTableColumnAggregateFooterDropdownContext } from '@twenty-modules/object-record/record-table/record-table-footer/components/RecordTableColumnAggregateFooterDropdownContext';
import { ExtendedAggregateOperations } from '@twenty-modules/object-record/record-table/types/ExtendedAggregateOperations';
import { TableOptionsHotkeyScope } from '@twenty-modules/object-record/record-table/types/TableOptionsHotkeyScope';
import { DropdownMenuHeader } from '@twenty-modules/ui/layout/dropdown/components/DropdownMenuHeader/DropdownMenuHeader';
import { DropdownMenuItemsContainer } from '@twenty-modules/ui/layout/dropdown/components/DropdownMenuItemsContainer';
import { useDropdown } from '@twenty-modules/ui/layout/dropdown/hooks/useDropdown';
import { useScopedHotkeys } from '@twenty-modules/ui/utilities/hotkey/hooks/useScopedHotkeys';
import { useContext } from 'react';
import { Key } from 'ts-key-enum';
import { DropdownMenuHeaderLeftComponent } from '@twenty-modules/ui/layout/dropdown/components/DropdownMenuHeader/internal/DropdownMenuHeaderLeftComponent';
import { IconChevronLeft } from '@twenty-ui/display';

export const RecordTableColumnAggregateFooterDropdownSubmenuContent = ({
  aggregateOperations,
  title,
}: {
  aggregateOperations: ExtendedAggregateOperations[];
  title: string;
}) => {
  const { dropdownId, resetContent } = useContext(
    RecordTableColumnAggregateFooterDropdownContext,
  );
  const { closeDropdown } = useDropdown(dropdownId);

  useScopedHotkeys(
    [Key.Escape],
    () => {
      resetContent();
      closeDropdown();
    },
    TableOptionsHotkeyScope.Dropdown,
  );
  return (
    <>
      <DropdownMenuHeader
        StartComponent={
          <DropdownMenuHeaderLeftComponent
            onClick={resetContent}
            Icon={IconChevronLeft}
          />
        }
      >
        {title}
      </DropdownMenuHeader>
      <DropdownMenuItemsContainer>
        <RecordTableColumnAggregateFooterAggregateOperationMenuItems
          aggregateOperations={aggregateOperations}
        />
      </DropdownMenuItemsContainer>
    </>
  );
};
