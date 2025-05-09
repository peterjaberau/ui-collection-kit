import { FavoriteFolderPickerInstanceContext } from '@twenty-modules/favorites/favorite-folder-picker/states/context/FavoriteFolderPickerInstanceContext';
import { favoriteFolderIdsPickerComponentState } from '@twenty-modules/favorites/favorite-folder-picker/states/favoriteFolderIdPickerComponentState';
import { favoriteFolderPickerComponentFamilyState } from '@twenty-modules/favorites/favorite-folder-picker/states/favoriteFolderPickerComponentFamilyState';
import { FavoriteFolder } from '@twenty-modules/favorites/types/FavoriteFolder';
import { createComponentSelectorV2 } from '@twenty-modules/ui/utilities/state/component-state/utils/createComponentSelectorV2';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const favoriteFoldersComponentSelector = createComponentSelectorV2<
  FavoriteFolder[]
>({
  key: 'favoriteFoldersComponentSelector',
  componentInstanceContext: FavoriteFolderPickerInstanceContext,
  get:
    ({ instanceId }) =>
    ({ get }) => {
      const folderIds = get(
        favoriteFolderIdsPickerComponentState.atomFamily({ instanceId }),
      );

      return folderIds
        .map((folderId: string) =>
          get(
            favoriteFolderPickerComponentFamilyState.atomFamily({
              instanceId,
              familyKey: folderId,
            }),
          ),
        )
        .filter((folder): folder is FavoriteFolder => isDefined(folder));
    },
});
