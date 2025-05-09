import { Action } from '@twenty-modules/action-menu/actions/components/Action';
import { useSelectedRecordIdOrThrow } from '@twenty-modules/action-menu/actions/record-actions/single-record/hooks/useSelectedRecordIdOrThrow';
import { useDeleteFavorite } from '@twenty-modules/favorites/hooks/useDeleteFavorite';
import { useFavorites } from '@twenty-modules/favorites/hooks/useFavorites';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const RemoveFromFavoritesSingleRecordAction = () => {
  const recordId = useSelectedRecordIdOrThrow();

  const { sortedFavorites: favorites } = useFavorites();

  const { deleteFavorite } = useDeleteFavorite();

  const foundFavorite = favorites?.find(
    (favorite) => favorite.recordId === recordId,
  );

  const handleClick = () => {
    if (!isDefined(foundFavorite)) {
      return;
    }

    deleteFavorite(foundFavorite.id);
  };

  return <Action onClick={handleClick} />;
};
