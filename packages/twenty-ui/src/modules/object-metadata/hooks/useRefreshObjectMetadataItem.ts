import { FIND_MANY_OBJECT_METADATA_ITEMS } from '@twenty-modules/object-metadata/graphql/queries';
import { useApolloMetadataClient } from '@twenty-modules/object-metadata/hooks/useApolloMetadataClient';
import { isAppWaitingForFreshObjectMetadataState } from '@twenty-modules/object-metadata/states/isAppWaitingForFreshObjectMetadataState';
import { objectMetadataItemsState } from '@twenty-modules/object-metadata/states/objectMetadataItemsState';
import { ObjectMetadataItem } from '@twenty-modules/object-metadata/types/ObjectMetadataItem';
import { mapPaginatedObjectMetadataItemsToObjectMetadataItems } from '@twenty-modules/object-metadata/utils/mapPaginatedObjectMetadataItemsToObjectMetadataItems';
import { useRecoilCallback } from 'recoil';
import { ObjectMetadataItemsQuery } from '@twenty-ui/front/generated-metadata/graphql';
import { isDeeplyEqual } from '@twenty-ui/front/utils/isDeeplyEqual';

type FetchPolicy = 'network-only' | 'cache-first';

export const useRefreshObjectMetadataItems = (
  fetchPolicy: FetchPolicy = 'cache-first',
) => {
  const client = useApolloMetadataClient();

  const refreshObjectMetadataItems = async () => {
    const result = await client.query<ObjectMetadataItemsQuery>({
      query: FIND_MANY_OBJECT_METADATA_ITEMS,
      variables: {},
      fetchPolicy,
    });

    const objectMetadataItems =
      mapPaginatedObjectMetadataItemsToObjectMetadataItems({
        pagedObjectMetadataItems: result.data,
      });

    replaceObjectMetadataItemIfDifferent(objectMetadataItems);

    return objectMetadataItems;
  };

  const replaceObjectMetadataItemIfDifferent = useRecoilCallback(
    ({ set, snapshot }) =>
      (toSetObjectMetadataItems: ObjectMetadataItem[]) => {
        if (
          !isDeeplyEqual(
            snapshot.getLoadable(objectMetadataItemsState).getValue(),
            toSetObjectMetadataItems,
          ) &&
          toSetObjectMetadataItems.length > 0
        ) {
          set(objectMetadataItemsState, toSetObjectMetadataItems);
          set(isAppWaitingForFreshObjectMetadataState, false);
        }
      },
    [],
  );

  return {
    refreshObjectMetadataItems,
  };
};
