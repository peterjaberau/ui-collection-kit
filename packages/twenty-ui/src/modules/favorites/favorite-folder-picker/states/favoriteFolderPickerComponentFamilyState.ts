import { FavoriteFolderPickerInstanceContext } from '@twenty-modules/favorites/favorite-folder-picker/states/context/FavoriteFolderPickerInstanceContext';
import { FavoriteFolder } from '@twenty-modules/favorites/types/FavoriteFolder';
import { createComponentFamilyStateV2 } from '@twenty-modules/ui/utilities/state/component-state/utils/createComponentFamilyStateV2';

export const favoriteFolderPickerComponentFamilyState =
  createComponentFamilyStateV2<FavoriteFolder | undefined, string>({
    key: 'favoriteFolderPickerComponentFamilyState',
    defaultValue: undefined,
    componentInstanceContext: FavoriteFolderPickerInstanceContext,
  });
