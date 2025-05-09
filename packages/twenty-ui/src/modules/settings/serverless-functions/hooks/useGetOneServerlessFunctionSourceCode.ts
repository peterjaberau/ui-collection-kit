import { useQuery } from '@apollo/client';
import { useApolloMetadataClient } from '@twenty-modules/object-metadata/hooks/useApolloMetadataClient';
import { FIND_ONE_SERVERLESS_FUNCTION_SOURCE_CODE } from '@twenty-modules/settings/serverless-functions/graphql/queries/findOneServerlessFunctionSourceCode';
import {
  FindOneServerlessFunctionSourceCodeQuery,
  FindOneServerlessFunctionSourceCodeQueryVariables,
} from '@twenty-ui/front/generated-metadata/graphql';

export const useGetOneServerlessFunctionSourceCode = ({
  id,
  version,
  onCompleted,
}: {
  id: string;
  version: string;
  onCompleted?: (data: FindOneServerlessFunctionSourceCodeQuery) => void;
}) => {
  const apolloMetadataClient = useApolloMetadataClient();
  const { data, loading } = useQuery<
    FindOneServerlessFunctionSourceCodeQuery,
    FindOneServerlessFunctionSourceCodeQueryVariables
  >(FIND_ONE_SERVERLESS_FUNCTION_SOURCE_CODE, {
    client: apolloMetadataClient ?? undefined,
    variables: {
      input: { id, version },
    },
    onCompleted,
    fetchPolicy: 'network-only',
  });
  return { code: data?.getServerlessFunctionSourceCode, loading };
};
