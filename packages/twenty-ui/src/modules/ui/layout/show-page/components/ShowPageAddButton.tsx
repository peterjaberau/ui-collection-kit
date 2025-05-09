import styled from '@emotion/styled';

import { useOpenCreateActivityDrawer } from '@twenty-modules/activities/hooks/useOpenCreateActivityDrawer';
import { ActivityTargetableObject } from '@twenty-modules/activities/types/ActivityTargetableEntity';
import { PageHotkeyScope } from '@twenty-modules/types/PageHotkeyScope';
import { DropdownMenuItemsContainer } from '@twenty-modules/ui/layout/dropdown/components/DropdownMenuItemsContainer';
import { useDropdown } from '@twenty-modules/ui/layout/dropdown/hooks/useDropdown';
import { SHOW_PAGE_ADD_BUTTON_DROPDOWN_ID } from '@twenty-modules/ui/layout/show-page/constants/ShowPageAddButtonDropdownId';

import { CoreObjectNameSingular } from '@twenty-modules/object-metadata/types/CoreObjectNameSingular';
import { isWorkflowSubObjectMetadata } from '@twenty-modules/object-metadata/utils/isWorkflowSubObjectMetadata';
import { useHasObjectReadOnlyPermission } from '@twenty-modules/settings/roles/hooks/useHasObjectReadOnlyPermission';
import { Dropdown } from '../../dropdown/components/Dropdown';
import { Button } from '@twenty-ui/input';
import { IconCheckbox, IconNotes, IconPlus } from '@twenty-ui/display';
import { MenuItem } from '@twenty-ui/navigation';

const StyledContainer = styled.div`
  z-index: 1;
`;

export const ShowPageAddButton = ({
  activityTargetObject,
}: {
  activityTargetObject: ActivityTargetableObject;
}) => {
  const { closeDropdown } = useDropdown(SHOW_PAGE_ADD_BUTTON_DROPDOWN_ID);

  const openNote = useOpenCreateActivityDrawer({
    activityObjectNameSingular: CoreObjectNameSingular.Note,
  });
  const openTask = useOpenCreateActivityDrawer({
    activityObjectNameSingular: CoreObjectNameSingular.Task,
  });

  const hasObjectReadOnlyPermission = useHasObjectReadOnlyPermission();

  const handleSelect = (objectNameSingular: CoreObjectNameSingular) => {
    if (objectNameSingular === CoreObjectNameSingular.Note) {
      openNote({
        targetableObjects: [activityTargetObject],
      });
    } else if (objectNameSingular === CoreObjectNameSingular.Task) {
      openTask({
        targetableObjects: [activityTargetObject],
      });
    }

    closeDropdown();
  };

  if (
    activityTargetObject.targetObjectNameSingular ===
      CoreObjectNameSingular.Task ||
    activityTargetObject.targetObjectNameSingular ===
      CoreObjectNameSingular.Note ||
    isWorkflowSubObjectMetadata(activityTargetObject.targetObjectNameSingular)
  ) {
    return;
  }

  if (hasObjectReadOnlyPermission) {
    return null;
  }

  return (
    <StyledContainer>
      <Dropdown
        dropdownId={SHOW_PAGE_ADD_BUTTON_DROPDOWN_ID}
        clickableComponent={
          <Button
            Icon={IconPlus}
            dataTestId="add-button"
            size="small"
            variant="secondary"
            accent="default"
            title="New note/task"
            ariaLabel="New note/task"
          />
        }
        dropdownComponents={
          <DropdownMenuItemsContainer>
            <MenuItem
              onClick={() => handleSelect(CoreObjectNameSingular.Note)}
              accent="default"
              LeftIcon={IconNotes}
              text="Note"
            />
            <MenuItem
              onClick={() => handleSelect(CoreObjectNameSingular.Task)}
              accent="default"
              LeftIcon={IconCheckbox}
              text="Task"
            />
          </DropdownMenuItemsContainer>
        }
        dropdownHotkeyScope={{ scope: PageHotkeyScope.ShowPage }}
      />
    </StyledContainer>
  );
};
