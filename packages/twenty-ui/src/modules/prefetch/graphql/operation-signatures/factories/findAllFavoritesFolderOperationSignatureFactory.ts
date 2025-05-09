import { CoreObjectNameSingular } from '@twenty-modules/object-metadata/types/CoreObjectNameSingular';
import { RecordGqlOperationSignatureFactory } from '@twenty-modules/object-record/graphql/types/RecordGqlOperationSignatureFactory';

export const findAllFavoritesFolderOperationSignatureFactory: RecordGqlOperationSignatureFactory =
  () => ({
    objectNameSingular: CoreObjectNameSingular.FavoriteFolder,
    variables: {},
    fields: {
      id: true,
      position: true,
      createdAt: true,
      updatedAt: true,
      deletedAt: true,
      name: true,
      icon: true,
    },
  });
