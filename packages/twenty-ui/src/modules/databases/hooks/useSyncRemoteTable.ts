import { useApolloClient, useMutation } from '@apollo/client';
import { useCallback } from 'react';

import { SYNC_REMOTE_TABLE } from '@twenty-modules/databases/graphql/mutations/syncRemoteTable';
import { modifyRemoteTableFromCache } from '@twenty-modules/databases/utils/modifyRemoteTableFromCache';
import { useApolloMetadataClient } from '@twenty-modules/object-metadata/hooks/useApolloMetadataClient';
import { useFindManyObjectMetadataItems } from '@twenty-modules/object-metadata/hooks/useFindManyObjectMetadataItems';
import { CoreObjectNameSingular } from '@twenty-modules/object-metadata/types/CoreObjectNameSingular';
import { useFindManyRecordsQuery } from '@twenty-modules/object-record/hooks/useFindManyRecordsQuery';
import {
  RemoteTableInput,
  SyncRemoteTableMutation,
  SyncRemoteTableMutationVariables,
} from '@twenty-ui/front/generated-metadata/graphql';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const useSyncRemoteTable = () => {
  const apolloMetadataClient = useApolloMetadataClient();
  const apolloClient = useApolloClient();

  const { refetch: refetchObjectMetadataItems } =
    useFindManyObjectMetadataItems();

  const { findManyRecordsQuery: findManyViewsQuery } = useFindManyRecordsQuery({
    objectNameSingular: CoreObjectNameSingular.View,
  });
  const [mutate] = useMutation<
    SyncRemoteTableMutation,
    SyncRemoteTableMutationVariables
  >(SYNC_REMOTE_TABLE, {
    client: apolloMetadataClient,
  });

  const syncRemoteTable = useCallback(
    async (input: RemoteTableInput) => {
      const remoteTable = await mutate({
        variables: {
          input,
        },
        update: (cache, { data }) => {
          if (isDefined(data)) {
            modifyRemoteTableFromCache({
              cache: cache,
              remoteTableName: input.name,
              fieldModifiers: {
                status: () => data.syncRemoteTable.status,
              },
            });
          }
        },
      });

      await refetchObjectMetadataItems();
      await apolloClient.query({
        query: findManyViewsQuery,
        fetchPolicy: 'network-only',
      });

      return remoteTable;
    },
    [apolloClient, findManyViewsQuery, mutate, refetchObjectMetadataItems],
  );

  return {
    syncRemoteTable,
  };
};
