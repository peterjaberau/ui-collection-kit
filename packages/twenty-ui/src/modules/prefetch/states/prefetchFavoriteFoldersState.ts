import { FavoriteFolder } from '@twenty-modules/favorites/types/FavoriteFolder';
import { createState } from '@twenty-ui/utilities';

export const prefetchFavoriteFoldersState = createState<FavoriteFolder[]>({
  key: 'prefetchFavoriteFoldersState',
  defaultValue: [],
});
