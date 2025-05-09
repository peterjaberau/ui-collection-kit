import { Key } from 'ts-key-enum';

import { IconPicker } from '@twenty-modules/ui/input/components/IconPicker';
import { TextInputV2 } from '@twenty-modules/ui/input/components/TextInputV2';
import { DropdownMenuHeader } from '@twenty-modules/ui/layout/dropdown/components/DropdownMenuHeader/DropdownMenuHeader';
import { DropdownMenuHeaderLeftComponent } from '@twenty-modules/ui/layout/dropdown/components/DropdownMenuHeader/internal/DropdownMenuHeaderLeftComponent';
import { DropdownMenuItemsContainer } from '@twenty-modules/ui/layout/dropdown/components/DropdownMenuItemsContainer';
import { DropdownMenuSeparator } from '@twenty-modules/ui/layout/dropdown/components/DropdownMenuSeparator';
import { useScopedHotkeys } from '@twenty-modules/ui/utilities/hotkey/hooks/useScopedHotkeys';
import { useSetHotkeyScope } from '@twenty-modules/ui/utilities/hotkey/hooks/useSetHotkeyScope';
import { useRecoilComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentStateV2';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';
import { useSetRecoilComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useSetRecoilComponentStateV2';
import { ViewsHotkeyScope } from '@twenty-modules/views/types/ViewsHotkeyScope';
import { ViewPickerEditButton } from '@twenty-modules/views/view-picker/components/ViewPickerEditButton';
import { ViewPickerIconAndNameContainer } from '@twenty-modules/views/view-picker/components/ViewPickerIconAndNameContainer';
import { ViewPickerSaveButtonContainer } from '@twenty-modules/views/view-picker/components/ViewPickerSaveButtonContainer';
import { useUpdateViewFromCurrentState } from '@twenty-modules/views/view-picker/hooks/useUpdateViewFromCurrentState';
import { useViewPickerMode } from '@twenty-modules/views/view-picker/hooks/useViewPickerMode';
import { viewPickerInputNameComponentState } from '@twenty-modules/views/view-picker/states/viewPickerInputNameComponentState';
import { viewPickerIsDirtyComponentState } from '@twenty-modules/views/view-picker/states/viewPickerIsDirtyComponentState';
import { viewPickerIsPersistingComponentState } from '@twenty-modules/views/view-picker/states/viewPickerIsPersistingComponentState';
import { viewPickerSelectedIconComponentState } from '@twenty-modules/views/view-picker/states/viewPickerSelectedIconComponentState';
import { IconChevronLeft } from '@twenty-ui/display';

export const ViewPickerContentEditMode = () => {
  const { setViewPickerMode } = useViewPickerMode();

  const [viewPickerInputName, setViewPickerInputName] =
    useRecoilComponentStateV2(viewPickerInputNameComponentState);
  const [viewPickerSelectedIcon, setViewPickerSelectedIcon] =
    useRecoilComponentStateV2(viewPickerSelectedIconComponentState);

  const viewPickerIsPersisting = useRecoilComponentValueV2(
    viewPickerIsPersistingComponentState,
  );
  const setViewPickerIsDirty = useSetRecoilComponentStateV2(
    viewPickerIsDirtyComponentState,
  );

  const setHotkeyScope = useSetHotkeyScope();

  const { updateViewFromCurrentState } = useUpdateViewFromCurrentState();

  useScopedHotkeys(
    Key.Enter,
    async () => {
      if (viewPickerIsPersisting) {
        return;
      }

      await updateViewFromCurrentState();
    },
    ViewsHotkeyScope.ListDropdown,
  );

  const onIconChange = ({ iconKey }: { iconKey: string }) => {
    setViewPickerIsDirty(true);
    setViewPickerSelectedIcon(iconKey);
  };

  const handleClose = async () => {
    await updateViewFromCurrentState();

    setViewPickerMode('list');
  };

  return (
    <>
      <DropdownMenuHeader
        StartComponent={
          <DropdownMenuHeaderLeftComponent
            onClick={handleClose}
            Icon={IconChevronLeft}
          />
        }
      >
        Edit view
      </DropdownMenuHeader>
      <DropdownMenuSeparator />
      <DropdownMenuItemsContainer>
        <ViewPickerIconAndNameContainer>
          <IconPicker
            onChange={onIconChange}
            selectedIconKey={viewPickerSelectedIcon}
            onClose={() => setHotkeyScope(ViewsHotkeyScope.ListDropdown)}
          />
          <TextInputV2
            value={viewPickerInputName}
            onChange={(value) => {
              setViewPickerIsDirty(true);
              setViewPickerInputName(value);
            }}
            autoFocus
          />
        </ViewPickerIconAndNameContainer>
      </DropdownMenuItemsContainer>
      <DropdownMenuSeparator />
      <DropdownMenuItemsContainer scrollable={false}>
        <ViewPickerSaveButtonContainer>
          <ViewPickerEditButton />
        </ViewPickerSaveButtonContainer>
      </DropdownMenuItemsContainer>
    </>
  );
};
