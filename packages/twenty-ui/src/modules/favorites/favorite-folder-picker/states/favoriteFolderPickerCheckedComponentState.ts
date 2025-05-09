import { FavoriteFolderPickerInstanceContext } from '@twenty-modules/favorites/favorite-folder-picker/states/context/FavoriteFolderPickerInstanceContext';
import { createComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/utils/createComponentStateV2';

export const favoriteFolderPickerCheckedComponentState = createComponentStateV2<
  string[]
>({
  key: 'favoriteFolderPickerCheckedComponentState',
  defaultValue: [],
  componentInstanceContext: FavoriteFolderPickerInstanceContext,
});
