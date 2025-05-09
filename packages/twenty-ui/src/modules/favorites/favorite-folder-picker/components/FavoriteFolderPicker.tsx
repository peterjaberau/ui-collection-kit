import { FavoriteFolderPickerFooter } from '@twenty-modules/favorites/favorite-folder-picker/components/FavoriteFolderPickerFooter';
import { FavoriteFolderPickerList } from '@twenty-modules/favorites/favorite-folder-picker/components/FavoriteFolderPickerList';
import { FavoriteFolderPickerSearchInput } from '@twenty-modules/favorites/favorite-folder-picker/components/FavoriteFolderPickerSearchInput';
import { useFavoriteFolderPicker } from '@twenty-modules/favorites/favorite-folder-picker/hooks/useFavoriteFolderPicker';
import { FavoriteFolderPickerInstanceContext } from '@twenty-modules/favorites/favorite-folder-picker/states/context/FavoriteFolderPickerInstanceContext';
import { favoriteFolderSearchFilterComponentState } from '@twenty-modules/favorites/favorite-folder-picker/states/favoriteFoldersSearchFilterComponentState';
import { isFavoriteFolderCreatingState } from '@twenty-modules/favorites/states/isFavoriteFolderCreatingState';
import { ObjectRecord } from '@twenty-modules/object-record/types/ObjectRecord';
import { DropdownMenu } from '@twenty-modules/ui/layout/dropdown/components/DropdownMenu';
import { DropdownMenuItemsContainer } from '@twenty-modules/ui/layout/dropdown/components/DropdownMenuItemsContainer';
import { DropdownMenuSeparator } from '@twenty-modules/ui/layout/dropdown/components/DropdownMenuSeparator';
import { useScopedHotkeys } from '@twenty-modules/ui/utilities/hotkey/hooks/useScopedHotkeys';
import { useAvailableComponentInstanceIdOrThrow } from '@twenty-modules/ui/utilities/state/component-state/hooks/useAvailableComponentInstanceIdOrThrow';
import { useRecoilComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentStateV2';

import { useRecoilState } from 'recoil';
import { Key } from 'ts-key-enum';

type FavoriteFolderPickerProps = {
  onSubmit?: () => void;
  record?: ObjectRecord;
  objectNameSingular: string;
  dropdownId: string;
};

const NO_FOLDER_ID = 'no-folder';

export const FavoriteFolderPicker = ({
  onSubmit,
  record,
  objectNameSingular,
  dropdownId,
}: FavoriteFolderPickerProps) => {
  const [isFavoriteFolderCreating, setIsFavoriteFolderCreating] =
    useRecoilState(isFavoriteFolderCreatingState);

  const instanceId = useAvailableComponentInstanceIdOrThrow(
    FavoriteFolderPickerInstanceContext,
  );

  const { favoriteFolders, toggleFolderSelection } = useFavoriteFolderPicker({
    record,
    objectNameSingular,
  });

  const [favoriteFoldersSearchFilter] = useRecoilComponentStateV2(
    favoriteFolderSearchFilterComponentState,
  );

  const filteredFolders = favoriteFolders.filter((folder) =>
    folder.name
      .toLowerCase()
      .includes(favoriteFoldersSearchFilter.toLowerCase()),
  );

  const showNoFolderOption =
    !favoriteFoldersSearchFilter ||
    'no folder'.includes(favoriteFoldersSearchFilter.toLowerCase());

  useScopedHotkeys(
    Key.Escape,
    () => {
      if (isFavoriteFolderCreating) {
        setIsFavoriteFolderCreating(false);
        return;
      }
      onSubmit?.();
    },
    instanceId,
    [onSubmit, isFavoriteFolderCreating],
  );

  useScopedHotkeys(
    Key.Enter,
    () => {
      if (filteredFolders.length === 1 && !showNoFolderOption) {
        toggleFolderSelection(filteredFolders[0].id);
        onSubmit?.();
        return;
      }

      if (showNoFolderOption && filteredFolders.length === 0) {
        toggleFolderSelection(NO_FOLDER_ID);
        onSubmit?.();
        return;
      }
    },
    instanceId,
    [filteredFolders, showNoFolderOption, toggleFolderSelection, onSubmit],
  );

  return (
    <DropdownMenu data-select-disable>
      <FavoriteFolderPickerSearchInput />
      <DropdownMenuSeparator />
      <DropdownMenuItemsContainer hasMaxHeight>
        <FavoriteFolderPickerList
          folders={favoriteFolders}
          toggleFolderSelection={toggleFolderSelection}
        />
      </DropdownMenuItemsContainer>
      <DropdownMenuSeparator />
      <FavoriteFolderPickerFooter dropdownId={dropdownId} />
    </DropdownMenu>
  );
};
