import { CoreObjectNameSingular } from '@twenty-modules/object-metadata/types/CoreObjectNameSingular';
import { ObjectMetadataItem } from '@twenty-modules/object-metadata/types/ObjectMetadataItem';
import { RecordGqlOperationSignatureFactory } from '@twenty-modules/object-record/graphql/types/RecordGqlOperationSignatureFactory';
import { generateDepthOneRecordGqlFields } from '@twenty-modules/object-record/graphql/utils/generateDepthOneRecordGqlFields';

export const findAllFavoritesOperationSignatureFactory: RecordGqlOperationSignatureFactory =
  ({ objectMetadataItem }: { objectMetadataItem: ObjectMetadataItem }) => ({
    objectNameSingular: CoreObjectNameSingular.Favorite,
    variables: {},
    fields: {
      ...generateDepthOneRecordGqlFields({
        objectMetadataItem,
      }),
    },
  });
