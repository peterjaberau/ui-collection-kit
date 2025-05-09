import { DROPDOWN_OFFSET_Y } from '@twenty-modules/dropdown/constants/DropdownOffsetY';
import { useCurrentContentId } from '@twenty-modules/dropdown/hooks/useCurrentContentId';
import { ObjectMetadataItem } from '@twenty-modules/object-metadata/types/ObjectMetadataItem';
import { ObjectOptionsDropdownContent } from '@twenty-modules/object-record/object-options-dropdown/components/ObjectOptionsDropdownContent';
import { OBJECT_OPTIONS_DROPDOWN_ID } from '@twenty-modules/object-record/object-options-dropdown/constants/ObjectOptionsDropdownId';
import { ObjectOptionsDropdownContext } from '@twenty-modules/object-record/object-options-dropdown/states/contexts/ObjectOptionsDropdownContext';
import { ObjectOptionsContentId } from '@twenty-modules/object-record/object-options-dropdown/types/ObjectOptionsContentId';
import { TableOptionsHotkeyScope } from '@twenty-modules/object-record/record-table/types/TableOptionsHotkeyScope';
import { Dropdown } from '@twenty-modules/ui/layout/dropdown/components/Dropdown';
import { StyledHeaderDropdownButton } from '@twenty-modules/ui/layout/dropdown/components/StyledHeaderDropdownButton';
import { useDropdown } from '@twenty-modules/ui/layout/dropdown/hooks/useDropdown';
import { ViewType } from '@twenty-modules/views/types/ViewType';
import { Trans } from '@lingui/react/macro';

type ObjectOptionsDropdownProps = {
  viewType: ViewType;
  objectMetadataItem: ObjectMetadataItem;
  recordIndexId: string;
};

export const ObjectOptionsDropdown = ({
  recordIndexId,
  objectMetadataItem,
  viewType,
}: ObjectOptionsDropdownProps) => {
  const { currentContentId, handleContentChange, handleResetContent } =
    useCurrentContentId<ObjectOptionsContentId>();

  const { isDropdownOpen } = useDropdown(OBJECT_OPTIONS_DROPDOWN_ID);

  return (
    <Dropdown
      dropdownId={OBJECT_OPTIONS_DROPDOWN_ID}
      dropdownHotkeyScope={{ scope: TableOptionsHotkeyScope.Dropdown }}
      dropdownOffset={{ y: DROPDOWN_OFFSET_Y }}
      clickableComponent={
        <StyledHeaderDropdownButton isUnfolded={isDropdownOpen}>
          <Trans>Options</Trans>
        </StyledHeaderDropdownButton>
      }
      onClose={handleResetContent}
      dropdownComponents={
        <ObjectOptionsDropdownContext.Provider
          value={{
            viewType,
            objectMetadataItem,
            recordIndexId,
            currentContentId,
            onContentChange: handleContentChange,
            resetContent: handleResetContent,
            dropdownId: OBJECT_OPTIONS_DROPDOWN_ID,
          }}
        >
          <ObjectOptionsDropdownContent />
        </ObjectOptionsDropdownContext.Provider>
      }
    />
  );
};
