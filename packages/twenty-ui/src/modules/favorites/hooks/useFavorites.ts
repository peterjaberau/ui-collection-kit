import { favoriteViewsWithMinimalDataSelector } from '@twenty-modules/favorites/states/selectors/favoriteViewsWithMinimalDataSelector';
import { sortFavorites } from '@twenty-modules/favorites/utils/sortFavorites';
import { useGetObjectRecordIdentifierByNameSingular } from '@twenty-modules/object-metadata/hooks/useGetObjectRecordIdentifierByNameSingular';
import { useObjectMetadataItem } from '@twenty-modules/object-metadata/hooks/useObjectMetadataItem';
import { objectMetadataItemsState } from '@twenty-modules/object-metadata/states/objectMetadataItemsState';
import { CoreObjectNameSingular } from '@twenty-modules/object-metadata/types/CoreObjectNameSingular';
import { useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import { FieldMetadataType } from '@twenty-ui/front/generated-metadata/graphql';
import { usePrefetchedFavoritesData } from './usePrefetchedFavoritesData';

export const useFavorites = () => {
  const { favorites } = usePrefetchedFavoritesData();
  const favoriteViewsWithMinimalData = useRecoilValue(
    favoriteViewsWithMinimalDataSelector,
  );
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

  const sortedFavorites = useMemo(
    () =>
      sortFavorites(
        favorites,
        favoriteRelationFieldMetadataItems,
        getObjectRecordIdentifierByNameSingular,
        true,
        favoriteViewsWithMinimalData,
        objectMetadataItems,
      ),
    [
      favorites,
      favoriteRelationFieldMetadataItems,
      getObjectRecordIdentifierByNameSingular,
      favoriteViewsWithMinimalData,
      objectMetadataItems,
    ],
  );

  return { sortedFavorites };
};
