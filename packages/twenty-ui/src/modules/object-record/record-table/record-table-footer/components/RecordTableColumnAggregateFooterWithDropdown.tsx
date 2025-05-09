import { useCurrentContentId } from '@twenty-modules/dropdown/hooks/useCurrentContentId';
import { useRecordTableContextOrThrow } from '@twenty-modules/object-record/record-table/contexts/RecordTableContext';
import { RecordTableColumnAggregateFooterCellContext } from '@twenty-modules/object-record/record-table/record-table-footer/components/RecordTableColumnAggregateFooterCellContext';
import { RecordTableColumnAggregateFooterDropdownContent } from '@twenty-modules/object-record/record-table/record-table-footer/components/RecordTableColumnAggregateFooterDropdownContent';
import { RecordTableColumnAggregateFooterDropdownContext } from '@twenty-modules/object-record/record-table/record-table-footer/components/RecordTableColumnAggregateFooterDropdownContext';
import { RecordTableColumnAggregateFooterValueCell } from '@twenty-modules/object-record/record-table/record-table-footer/components/RecordTableColumnAggregateFooterValueCell';
import { RecordTableFooterAggregateContentId } from '@twenty-modules/object-record/record-table/record-table-footer/types/RecordTableFooterAggregateContentId';
import { Dropdown } from '@twenty-modules/ui/layout/dropdown/components/Dropdown';
import { useToggleScrollWrapper } from '@twenty-modules/ui/utilities/scroll/hooks/useToggleScrollWrapper';
import { useCallback, useContext } from 'react';

type RecordTableColumnFooterWithDropdownProps = {
  isFirstCell: boolean;
  currentRecordGroupId?: string;
};

export const RecordTableColumnFooterWithDropdown = ({
  currentRecordGroupId,
  isFirstCell,
}: RecordTableColumnFooterWithDropdownProps) => {
  const { currentContentId, handleContentChange, handleResetContent } =
    useCurrentContentId<RecordTableFooterAggregateContentId>();

  const { fieldMetadataId } = useContext(
    RecordTableColumnAggregateFooterCellContext,
  );

  const { objectMetadataItem } = useRecordTableContextOrThrow();

  const fieldMetadata = objectMetadataItem.fields.find(
    (field) => field.id === fieldMetadataId,
  );

  const { toggleScrollXWrapper, toggleScrollYWrapper } =
    useToggleScrollWrapper();

  const handleDropdownOpen = useCallback(() => {
    toggleScrollXWrapper(false);
    toggleScrollYWrapper(false);
  }, [toggleScrollXWrapper, toggleScrollYWrapper]);

  const handleDropdownClose = useCallback(() => {
    handleResetContent();
    toggleScrollXWrapper(true);
    toggleScrollYWrapper(true);
  }, [handleResetContent, toggleScrollXWrapper, toggleScrollYWrapper]);

  const dropdownId = currentRecordGroupId
    ? `${fieldMetadataId}-footer-${currentRecordGroupId}`
    : `${fieldMetadataId}-footer`;

  return (
    <Dropdown
      onOpen={handleDropdownOpen}
      onClose={handleDropdownClose}
      dropdownId={dropdownId}
      clickableComponent={
        <RecordTableColumnAggregateFooterValueCell
          dropdownId={dropdownId}
          isFirstCell={isFirstCell}
        />
      }
      dropdownComponents={
        <RecordTableColumnAggregateFooterDropdownContext.Provider
          value={{
            currentContentId,
            onContentChange: handleContentChange,
            resetContent: handleResetContent,
            dropdownId: dropdownId,
            fieldMetadataId: fieldMetadataId,
            fieldMetadataType: fieldMetadata?.type,
          }}
        >
          <RecordTableColumnAggregateFooterDropdownContent />
        </RecordTableColumnAggregateFooterDropdownContext.Provider>
      }
      dropdownOffset={{ x: -1 }}
      dropdownPlacement="bottom-start"
      dropdownHotkeyScope={{ scope: dropdownId }}
    />
  );
};
