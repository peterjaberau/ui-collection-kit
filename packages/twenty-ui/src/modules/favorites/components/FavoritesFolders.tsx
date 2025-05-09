import { CurrentWorkspaceMemberFavorites } from '@twenty-modules/favorites/components/CurrentWorkspaceMemberFavorites';
import { FavoriteFolderHotkeyScope } from '@twenty-modules/favorites/constants/FavoriteFolderRightIconDropdownHotkeyScope';
import { useCreateFavoriteFolder } from '@twenty-modules/favorites/hooks/useCreateFavoriteFolder';
import { useFavoritesByFolder } from '@twenty-modules/favorites/hooks/useFavoritesByFolder';
import { isFavoriteFolderCreatingState } from '@twenty-modules/favorites/states/isFavoriteFolderCreatingState';
import { NavigationDrawerAnimatedCollapseWrapper } from '@twenty-modules/ui/navigation/navigation-drawer/components/NavigationDrawerAnimatedCollapseWrapper';
import { NavigationDrawerInput } from '@twenty-modules/ui/navigation/navigation-drawer/components/NavigationDrawerInput';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { IconFolder } from '@twenty-ui/display';

type FavoriteFoldersProps = {
  isNavigationSectionOpen: boolean;
};

export const FavoriteFolders = ({
  isNavigationSectionOpen,
}: FavoriteFoldersProps) => {
  const [newFolderName, setNewFolderName] = useState('');

  const { favoritesByFolder } = useFavoritesByFolder();
  const { createNewFavoriteFolder } = useCreateFavoriteFolder();

  const [isFavoriteFolderCreating, setIsFavoriteFolderCreating] =
    useRecoilState(isFavoriteFolderCreatingState);

  const handleFavoriteFolderNameChange = (value: string) => {
    setNewFolderName(value);
  };

  const handleSubmitFavoriteFolderCreation = async (value: string) => {
    if (value === '') return;

    setIsFavoriteFolderCreating(false);
    setNewFolderName('');
    await createNewFavoriteFolder(value);
    return true;
  };

  const handleClickOutside = async (
    _event: MouseEvent | TouchEvent,
    value: string,
  ) => {
    if (!value) {
      setIsFavoriteFolderCreating(false);
      return;
    }

    setIsFavoriteFolderCreating(false);
    setNewFolderName('');
    await createNewFavoriteFolder(value);
  };

  const handleCancelFavoriteFolderCreation = () => {
    setNewFolderName('');
    setIsFavoriteFolderCreating(false);
  };

  if (!isNavigationSectionOpen) {
    return null;
  }

  return (
    <>
      {isFavoriteFolderCreating && (
        <NavigationDrawerAnimatedCollapseWrapper>
          <NavigationDrawerInput
            Icon={IconFolder}
            value={newFolderName}
            onChange={handleFavoriteFolderNameChange}
            onSubmit={handleSubmitFavoriteFolderCreation}
            onCancel={handleCancelFavoriteFolderCreation}
            onClickOutside={handleClickOutside}
            hotkeyScope={
              FavoriteFolderHotkeyScope.FavoriteFolderNavigationInput
            }
          />
        </NavigationDrawerAnimatedCollapseWrapper>
      )}
      {favoritesByFolder.map((folder) => (
        <CurrentWorkspaceMemberFavorites
          key={folder.folderId}
          folder={folder}
          isGroup={favoritesByFolder.length > 1}
        />
      ))}
    </>
  );
};
