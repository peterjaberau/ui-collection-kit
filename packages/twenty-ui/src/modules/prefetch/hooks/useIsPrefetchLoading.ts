import { prefetchIsLoadedFamilyState } from '@twenty-modules/prefetch/states/prefetchIsLoadedFamilyState';
import { PrefetchKey } from '@twenty-modules/prefetch/types/PrefetchKey';
import { useIsWorkspaceActivationStatusEqualsTo } from '@twenty-modules/workspace/hooks/useIsWorkspaceActivationStatusEqualsTo';
import { useRecoilValue } from 'recoil';
import { WorkspaceActivationStatus } from '@ui-collection-kit/twenty-shared/src/workspace';

export const useIsPrefetchLoading = () => {
  const isWorkspaceActive = useIsWorkspaceActivationStatusEqualsTo(
    WorkspaceActivationStatus.ACTIVE,
  );
  const isFavoriteFoldersPrefetched = useRecoilValue(
    prefetchIsLoadedFamilyState(PrefetchKey.AllFavoritesFolders),
  );

  const areFavoritesPrefetched = useRecoilValue(
    prefetchIsLoadedFamilyState(PrefetchKey.AllFavorites),
  );

  return (
    isWorkspaceActive &&
    (!areFavoritesPrefetched || !isFavoriteFoldersPrefetched)
  );
};
