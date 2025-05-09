import { FavoriteFolderPickerInstanceContext } from '@twenty-modules/favorites/favorite-folder-picker/states/context/FavoriteFolderPickerInstanceContext';
import { createComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/utils/createComponentStateV2';

export const favoriteFolderIdsPickerComponentState = createComponentStateV2<
  string[]
>({
  key: 'favoriteFolderIdsPickerComponentState',
  defaultValue: [],
  componentInstanceContext: FavoriteFolderPickerInstanceContext,
});
