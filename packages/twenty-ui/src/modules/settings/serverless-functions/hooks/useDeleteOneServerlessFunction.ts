import { useApolloMetadataClient } from '@twenty-modules/object-metadata/hooks/useApolloMetadataClient';
import { DELETE_ONE_SERVERLESS_FUNCTION } from '@twenty-modules/settings/serverless-functions/graphql/mutations/deleteOneServerlessFunction';
import { FIND_ONE_SERVERLESS_FUNCTION_SOURCE_CODE } from '@twenty-modules/settings/serverless-functions/graphql/queries/findOneServerlessFunctionSourceCode';
import { useMutation } from '@apollo/client';
import { getOperationName } from '@apollo/client/utilities';
import {
  DeleteOneServerlessFunctionMutation,
  DeleteOneServerlessFunctionMutationVariables,
  ServerlessFunctionIdInput,
} from '@twenty-ui/front/generated-metadata/graphql';

export const useDeleteOneServerlessFunction = () => {
  const apolloMetadataClient = useApolloMetadataClient();
  const [mutate] = useMutation<
    DeleteOneServerlessFunctionMutation,
    DeleteOneServerlessFunctionMutationVariables
  >(DELETE_ONE_SERVERLESS_FUNCTION, {
    client: apolloMetadataClient,
  });

  const deleteOneServerlessFunction = async (
    input: ServerlessFunctionIdInput,
  ) => {
    return await mutate({
      variables: {
        input,
      },
      awaitRefetchQueries: true,
      refetchQueries: [
        getOperationName(FIND_ONE_SERVERLESS_FUNCTION_SOURCE_CODE) ?? '',
      ],
    });
  };

  return { deleteOneServerlessFunction };
};
