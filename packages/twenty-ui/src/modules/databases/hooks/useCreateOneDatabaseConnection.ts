import { useMutation } from '@apollo/client';

import { CREATE_ONE_DATABASE_CONNECTION } from '@twenty-modules/databases/graphql/mutations/createOneDatabaseConnection';
import { GET_MANY_DATABASE_CONNECTIONS } from '@twenty-modules/databases/graphql/queries/findManyDatabaseConnections';
import { useApolloMetadataClient } from '@twenty-modules/object-metadata/hooks/useApolloMetadataClient';
import {
  CreateRemoteServerInput,
  CreateServerMutation,
  CreateServerMutationVariables,
} from '@twenty-ui/front/generated-metadata/graphql';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const useCreateOneDatabaseConnection = () => {
  const apolloMetadataClient = useApolloMetadataClient();

  const [mutate] = useMutation<
    CreateServerMutation,
    CreateServerMutationVariables
  >(CREATE_ONE_DATABASE_CONNECTION, {
    client: apolloMetadataClient,
  });

  const createOneDatabaseConnection = async (
    input: CreateRemoteServerInput,
  ) => {
    return await mutate({
      variables: {
        input,
      },
      update: (cache, { data }) => {
        const createdRemoteServer = data?.createOneRemoteServer;
        if (!createdRemoteServer) return;

        const getManyDatabaseConnectionsQuery = {
          query: GET_MANY_DATABASE_CONNECTIONS,
          variables: {
            input: { foreignDataWrapperType: input.foreignDataWrapperType },
          },
        };

        if (isDefined(cache.readQuery(getManyDatabaseConnectionsQuery))) {
          cache.updateQuery(getManyDatabaseConnectionsQuery, (cachedQuery) => ({
            findManyRemoteServersByType: [
              ...cachedQuery.findManyRemoteServersByType,
              createdRemoteServer,
            ],
          }));

          return;
        }
      },
    });
  };

  return {
    createOneDatabaseConnection,
  };
};
