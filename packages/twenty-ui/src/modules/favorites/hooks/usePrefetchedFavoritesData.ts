import { currentWorkspaceMemberState } from '@twenty-modules/auth/states/currentWorkspaceMemberState';
import { Favorite } from '@twenty-modules/favorites/types/Favorite';
import { prefetchFavoritesState } from '@twenty-modules/prefetch/states/prefetchFavoritesState';
import { useRecoilValue } from 'recoil';

type PrefetchedFavoritesData = {
  favorites: Favorite[];
  workspaceFavorites: Favorite[];
  currentWorkspaceMemberId: string | undefined;
};

export const usePrefetchedFavoritesData = (): PrefetchedFavoritesData => {
  const currentWorkspaceMember = useRecoilValue(currentWorkspaceMemberState);
  const currentWorkspaceMemberId = currentWorkspaceMember?.id;
  const prefetchFavorites = useRecoilValue(prefetchFavoritesState);

  const favorites = prefetchFavorites.filter(
    (favorite) => favorite.forWorkspaceMemberId === currentWorkspaceMemberId,
  );

  const workspaceFavorites = prefetchFavorites.filter(
    (favorite) => favorite.forWorkspaceMemberId === null,
  );

  return {
    favorites,
    workspaceFavorites,
    currentWorkspaceMemberId,
  };
};
