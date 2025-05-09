import styled from '@emotion/styled';

import { contextStoreCurrentViewIdComponentState } from '@twenty-modules/context-store/states/contextStoreCurrentViewIdComponentState';
import { Dropdown } from '@twenty-modules/ui/layout/dropdown/components/Dropdown';
import { DropdownMenuItemsContainer } from '@twenty-modules/ui/layout/dropdown/components/DropdownMenuItemsContainer';
import { useDropdown } from '@twenty-modules/ui/layout/dropdown/hooks/useDropdown';
import { HotkeyScope } from '@twenty-modules/ui/utilities/hotkey/types/HotkeyScope';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';
import { useSetRecoilComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useSetRecoilComponentStateV2';
import { UPDATE_VIEW_BUTTON_DROPDOWN_ID } from '@twenty-modules/views/constants/UpdateViewButtonDropdownId';
import { useViewFromQueryParams } from '@twenty-modules/views/hooks/internal/useViewFromQueryParams';
import { useAreViewFilterGroupsDifferentFromRecordFilterGroups } from '@twenty-modules/views/hooks/useAreViewFilterGroupsDifferentFromRecordFilterGroups';
import { useAreViewFiltersDifferentFromRecordFilters } from '@twenty-modules/views/hooks/useAreViewFiltersDifferentFromRecordFilters';
import { useAreViewSortsDifferentFromRecordSorts } from '@twenty-modules/views/hooks/useAreViewSortsDifferentFromRecordSorts';
import { useGetCurrentViewOnly } from '@twenty-modules/views/hooks/useGetCurrentViewOnly';
import { useSaveCurrentViewFiltersAndSorts } from '@twenty-modules/views/hooks/useSaveCurrentViewFiltersAndSorts';
import { VIEW_PICKER_DROPDOWN_ID } from '@twenty-modules/views/view-picker/constants/ViewPickerDropdownId';
import { useViewPickerMode } from '@twenty-modules/views/view-picker/hooks/useViewPickerMode';
import { viewPickerReferenceViewIdComponentState } from '@twenty-modules/views/view-picker/states/viewPickerReferenceViewIdComponentState';
import { t } from '@lingui/core/macro';
import { Button, ButtonGroup, IconButton } from '@twenty-ui/input';
import { IconChevronDown, IconPlus } from '@twenty-ui/display';
import { MenuItem } from '@twenty-ui/navigation';

const StyledContainer = styled.div`
  border-radius: ${({ theme }) => theme.border.radius.md};
  display: inline-flex;
  margin-right: ${({ theme }) => theme.spacing(2)};
  position: relative;
`;

export type UpdateViewButtonGroupProps = {
  hotkeyScope: HotkeyScope;
};

export const UpdateViewButtonGroup = ({
  hotkeyScope,
}: UpdateViewButtonGroupProps) => {
  const { saveCurrentViewFilterAndSorts } = useSaveCurrentViewFiltersAndSorts();

  const { setViewPickerMode } = useViewPickerMode();

  const currentViewId = useRecoilComponentValueV2(
    contextStoreCurrentViewIdComponentState,
  );

  const { closeDropdown: closeUpdateViewButtonDropdown } = useDropdown(
    UPDATE_VIEW_BUTTON_DROPDOWN_ID,
  );
  const { openDropdown: openViewPickerDropdown } = useDropdown(
    VIEW_PICKER_DROPDOWN_ID,
  );
  const { currentView } = useGetCurrentViewOnly();

  const setViewPickerReferenceViewId = useSetRecoilComponentStateV2(
    viewPickerReferenceViewIdComponentState,
  );

  const openViewPickerInCreateMode = () => {
    if (!currentViewId) {
      return;
    }

    openViewPickerDropdown();
    setViewPickerReferenceViewId(currentViewId);
    setViewPickerMode('create-from-current');

    closeUpdateViewButtonDropdown();
  };

  const handleCreateViewClick = () => {
    openViewPickerInCreateMode();
  };

  const handleSaveAsNewViewClick = () => {
    openViewPickerInCreateMode();
  };

  const handleUpdateViewClick = async () => {
    await saveCurrentViewFilterAndSorts();
  };

  const { hasFiltersQueryParams } = useViewFromQueryParams();

  const { viewFilterGroupsAreDifferentFromRecordFilterGroups } =
    useAreViewFilterGroupsDifferentFromRecordFilterGroups();

  const { viewFiltersAreDifferentFromRecordFilters } =
    useAreViewFiltersDifferentFromRecordFilters();

  const { viewSortsAreDifferentFromRecordSorts } =
    useAreViewSortsDifferentFromRecordSorts();

  const canShowButton =
    (viewFiltersAreDifferentFromRecordFilters ||
      viewSortsAreDifferentFromRecordSorts ||
      viewFilterGroupsAreDifferentFromRecordFilterGroups) &&
    !hasFiltersQueryParams;

  if (!canShowButton) {
    return <></>;
  }

  return (
    <StyledContainer>
      {currentView?.key !== 'INDEX' ? (
        <ButtonGroup size="small" accent="blue">
          <Button title="Update view" onClick={handleUpdateViewClick} />
          <Dropdown
            dropdownId={UPDATE_VIEW_BUTTON_DROPDOWN_ID}
            dropdownHotkeyScope={hotkeyScope}
            clickableComponent={
              <IconButton
                size="small"
                accent="blue"
                Icon={IconChevronDown}
                position="right"
              />
            }
            dropdownComponents={
              <DropdownMenuItemsContainer>
                <MenuItem
                  onClick={handleCreateViewClick}
                  LeftIcon={IconPlus}
                  text={t`Create view`}
                />
              </DropdownMenuItemsContainer>
            }
          />
        </ButtonGroup>
      ) : (
        <Button
          title={t`Save as new view`}
          onClick={handleSaveAsNewViewClick}
          accent="blue"
          size="small"
          variant="secondary"
        />
      )}
    </StyledContainer>
  );
};
