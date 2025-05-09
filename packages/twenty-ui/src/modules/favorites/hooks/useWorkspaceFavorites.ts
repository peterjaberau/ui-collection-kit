import { sortFavorites } from '@twenty-modules/favorites/utils/sortFavorites';
import { useFilteredObjectMetadataItems } from '@twenty-modules/object-metadata/hooks/useFilteredObjectMetadataItems';
import { useGetObjectRecordIdentifierByNameSingular } from '@twenty-modules/object-metadata/hooks/useGetObjectRecordIdentifierByNameSingular';
import { useObjectMetadataItem } from '@twenty-modules/object-metadata/hooks/useObjectMetadataItem';
import { objectMetadataItemsState } from '@twenty-modules/object-metadata/states/objectMetadataItemsState';
import { CoreObjectNameSingular } from '@twenty-modules/object-metadata/types/CoreObjectNameSingular';
import { prefetchViewsState } from '@twenty-modules/prefetch/states/prefetchViewsState';
import { useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import { FieldMetadataType } from '@twenty-ui/front/generated-metadata/graphql';
import { usePrefetchedFavoritesData } from './usePrefetchedFavoritesData';

export const useWorkspaceFavorites = () => {
  const { workspaceFavorites } = usePrefetchedFavoritesData();
  const prefetchViews = useRecoilValue(prefetchViewsState);
  const objectMetadataItems = useRecoilValue(objectMetadataItemsState);
  const { objectMetadataItem: favoriteObjectMetadataItem } =
    useObjectMetadataItem({
      objectNameSingular: CoreObjectNameSingular.Favorite,
    });
  const getObjectRecordIdentifierByNameSingular =
    useGetObjectRecordIdentifierByNameSingular();

  const favoriteRelationFieldMetadataItems = useMemo(
    () =>
      favoriteObjectMetadataItem.fields.filter(
        (fieldMetadataItem) =>
          fieldMetadataItem.type === FieldMetadataType.RELATION &&
          fieldMetadataItem.name !== 'forWorkspaceMember' &&
          fieldMetadataItem.name !== 'favoriteFolder',
      ),
    [favoriteObjectMetadataItem.fields],
  );

  const sortedWorkspaceFavorites = useMemo(
    () =>
      sortFavorites(
        workspaceFavorites.filter((favorite) => favorite.viewId),
        favoriteRelationFieldMetadataItems,
        getObjectRecordIdentifierByNameSingular,
        false,
        prefetchViews,
        objectMetadataItems,
      ),
    [
      workspaceFavorites,
      favoriteRelationFieldMetadataItems,
      getObjectRecordIdentifierByNameSingular,
      prefetchViews,
      objectMetadataItems,
    ],
  );

  const workspaceFavoriteIds = new Set(
    sortedWorkspaceFavorites.map((favorite) => favorite.recordId),
  );

  const favoriteViewObjectMetadataIds = new Set(
    prefetchViews.reduce<string[]>((acc, view) => {
      if (workspaceFavoriteIds.has(view.id)) {
        acc.push(view.objectMetadataId);
      }
      return acc;
    }, []),
  );

  const { activeObjectMetadataItems } = useFilteredObjectMetadataItems();

  const activeObjectMetadataItemsInWorkspaceFavorites =
    activeObjectMetadataItems.filter((item) =>
      favoriteViewObjectMetadataIds.has(item.id),
    );

  return {
    workspaceFavorites: sortedWorkspaceFavorites,
    workspaceFavoritesObjectMetadataItems:
      activeObjectMetadataItemsInWorkspaceFavorites,
  };
};
