import { FAVORITE_DROPPABLE_IDS } from '@twenty-modules/favorites/constants/FavoriteDroppableIds';
import { FavoriteDroppableId } from '@twenty-modules/favorites/types/FavoriteDroppableId';

export const createFolderHeaderDroppableId = (
  folderId: string,
): FavoriteDroppableId =>
  `${FAVORITE_DROPPABLE_IDS.FOLDER_HEADER_PREFIX}${folderId}`;
