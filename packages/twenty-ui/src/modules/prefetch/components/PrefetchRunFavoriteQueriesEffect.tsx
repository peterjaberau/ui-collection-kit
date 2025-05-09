import { useEffect } from 'react';
import { useRecoilCallback, useRecoilValue, useSetRecoilState } from 'recoil';

import { currentWorkspaceState } from '@twenty-modules/auth/states/currentWorkspaceState';
import { Favorite } from '@twenty-modules/favorites/types/Favorite';
import { FavoriteFolder } from '@twenty-modules/favorites/types/FavoriteFolder';
import { useIsSettingsPage } from '@twenty-modules/navigation/hooks/useIsSettingsPage';
import { useObjectMetadataItems } from '@twenty-modules/object-metadata/hooks/useObjectMetadataItems';
import { CoreObjectNameSingular } from '@twenty-modules/object-metadata/types/CoreObjectNameSingular';
import { useFindManyRecords } from '@twenty-modules/object-record/hooks/useFindManyRecords';
import { findAllFavoritesFolderOperationSignatureFactory } from '@twenty-modules/prefetch/graphql/operation-signatures/factories/findAllFavoritesFolderOperationSignatureFactory';
import { findAllFavoritesOperationSignatureFactory } from '@twenty-modules/prefetch/graphql/operation-signatures/factories/findAllFavoritesOperationSignatureFactory';
import { prefetchFavoriteFoldersState } from '@twenty-modules/prefetch/states/prefetchFavoriteFoldersState';
import { prefetchFavoritesState } from '@twenty-modules/prefetch/states/prefetchFavoritesState';
import { prefetchIsLoadedFamilyState } from '@twenty-modules/prefetch/states/prefetchIsLoadedFamilyState';
import { PrefetchKey } from '@twenty-modules/prefetch/types/PrefetchKey';
import { useShowAuthModal } from '@twenty-modules/ui/layout/hooks/useShowAuthModal';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';
import { WorkspaceActivationStatus } from '@ui-collection-kit/twenty-shared/src/workspace';
import { isDeeplyEqual } from '@twenty-ui/front/utils/isDeeplyEqual';

export const PrefetchRunFavoriteQueriesEffect = () => {
  const showAuthModal = useShowAuthModal();
  const isSettingsPage = useIsSettingsPage();
  const currentWorkspace = useRecoilValue(currentWorkspaceState);
  const isWorkspaceActive =
    currentWorkspace?.activationStatus === WorkspaceActivationStatus.ACTIVE;

  const { objectMetadataItems } = useObjectMetadataItems();

  const setIsPrefetchFavoritesLoaded = useSetRecoilState(
    prefetchIsLoadedFamilyState(PrefetchKey.AllFavorites),
  );

  const setIsPrefetchFavoritesFoldersLoaded = useSetRecoilState(
    prefetchIsLoadedFamilyState(PrefetchKey.AllFavoritesFolders),
  );

  const findAllFavoritesOperationSignature =
    findAllFavoritesOperationSignatureFactory({
      objectMetadataItem: objectMetadataItems.find(
        (item) => item.nameSingular === CoreObjectNameSingular.Favorite,
      ),
    });

  const findAllFavoriteFoldersOperationSignature =
    findAllFavoritesFolderOperationSignatureFactory({
      objectMetadataItem: objectMetadataItems.find(
        (item) => item.nameSingular === CoreObjectNameSingular.FavoriteFolder,
      ),
    });

  const { records: favorites } = useFindManyRecords({
    objectNameSingular: CoreObjectNameSingular.Favorite,
    filter: findAllFavoritesOperationSignature.variables.filter,
    recordGqlFields: findAllFavoritesOperationSignature.fields,
    skip: showAuthModal || isSettingsPage || !isWorkspaceActive,
  });

  const { records: favoriteFolders } = useFindManyRecords({
    objectNameSingular: CoreObjectNameSingular.FavoriteFolder,
    filter: findAllFavoriteFoldersOperationSignature.variables.filter,
    recordGqlFields: findAllFavoriteFoldersOperationSignature.fields,
    skip: showAuthModal || isSettingsPage || !isWorkspaceActive,
  });

  const setPrefetchFavoritesState = useRecoilCallback(
    ({ set, snapshot }) =>
      (favorites: Favorite[]) => {
        const existingFavorites = snapshot
          .getLoadable(prefetchFavoritesState)
          .getValue();

        if (!isDeeplyEqual(existingFavorites, favorites)) {
          set(prefetchFavoritesState, favorites);
        }
      },
    [],
  );

  const setPrefetchFavoriteFoldersState = useRecoilCallback(
    ({ set, snapshot }) =>
      (favoriteFolders: FavoriteFolder[]) => {
        const existingFavoriteFolders = snapshot
          .getLoadable(prefetchFavoriteFoldersState)
          .getValue();

        if (!isDeeplyEqual(existingFavoriteFolders, favoriteFolders)) {
          set(prefetchFavoriteFoldersState, favoriteFolders);
        }
      },
    [],
  );

  useEffect(() => {
    if (isDefined(favorites)) {
      setPrefetchFavoritesState(favorites as Favorite[]);
      setIsPrefetchFavoritesLoaded(true);
    }
  }, [favorites, setPrefetchFavoritesState, setIsPrefetchFavoritesLoaded]);

  useEffect(() => {
    if (isDefined(favoriteFolders)) {
      setPrefetchFavoriteFoldersState(favoriteFolders as FavoriteFolder[]);
      setIsPrefetchFavoritesFoldersLoaded(true);
    }
  }, [
    favoriteFolders,
    setPrefetchFavoriteFoldersState,
    setIsPrefetchFavoritesFoldersLoaded,
  ]);

  return <></>;
};
