import { CoreObjectNameSingular } from '@twenty-modules/object-metadata/types/CoreObjectNameSingular';
import { RecordGqlOperationSignatureFactory } from '@twenty-modules/object-record/graphql/types/RecordGqlOperationSignatureFactory';
import { findAllFavoritesFolderOperationSignatureFactory } from '@twenty-modules/prefetch/graphql/operation-signatures/factories/findAllFavoritesFolderOperationSignatureFactory';
import { findAllFavoritesOperationSignatureFactory } from '@twenty-modules/prefetch/graphql/operation-signatures/factories/findAllFavoritesOperationSignatureFactory';
import { PrefetchKey } from '@twenty-modules/prefetch/types/PrefetchKey';

export const PREFETCH_CONFIG: Record<
  PrefetchKey,
  {
    objectNameSingular: CoreObjectNameSingular;
    operationSignatureFactory: RecordGqlOperationSignatureFactory;
  }
> = {
  ALL_FAVORITES: {
    objectNameSingular: CoreObjectNameSingular.Favorite,
    operationSignatureFactory: findAllFavoritesOperationSignatureFactory,
  },
  ALL_FAVORITES_FOLDERS: {
    objectNameSingular: CoreObjectNameSingular.FavoriteFolder,
    operationSignatureFactory: findAllFavoritesFolderOperationSignatureFactory,
  },
};
