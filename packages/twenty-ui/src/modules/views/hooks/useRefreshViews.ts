import { useObjectMetadataItems } from '@twenty-modules/object-metadata/hooks/useObjectMetadataItems';
import { CoreObjectNameSingular } from '@twenty-modules/object-metadata/types/CoreObjectNameSingular';
import { useLazyFindManyRecords } from '@twenty-modules/object-record/hooks/useLazyFindManyRecords';
import { findAllViewsOperationSignatureFactory } from '@twenty-modules/prefetch/graphql/operation-signatures/factories/findAllViewsOperationSignatureFactory';

export const useRefreshCachedViews = () => {
  const { objectMetadataItems } = useObjectMetadataItems();

  const findAllViewsOperationSignature = findAllViewsOperationSignatureFactory({
    objectMetadataItem: objectMetadataItems.find(
      (item) => item.nameSingular === CoreObjectNameSingular.View,
    ),
  });

  const { findManyRecords: refreshCachedViews } = useLazyFindManyRecords({
    objectNameSingular: CoreObjectNameSingular.View,
    filter: findAllViewsOperationSignature.variables.filter,
    recordGqlFields: findAllViewsOperationSignature.fields,
    fetchPolicy: 'network-only',
  });

  return {
    refreshCachedViews,
  };
};
