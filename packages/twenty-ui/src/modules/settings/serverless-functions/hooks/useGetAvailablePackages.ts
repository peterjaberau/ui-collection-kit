import { useApolloMetadataClient } from '@twenty-modules/object-metadata/hooks/useApolloMetadataClient';
import { useQuery } from '@apollo/client';
import { FIND_MANY_AVAILABLE_PACKAGES } from '@twenty-modules/settings/serverless-functions/graphql/queries/findManyAvailablePackages';
import {
  FindManyAvailablePackagesQuery,
  FindManyAvailablePackagesQueryVariables,
  ServerlessFunctionIdInput,
} from '@twenty-ui/front/generated-metadata/graphql';

export const useGetAvailablePackages = (input: ServerlessFunctionIdInput) => {
  const apolloMetadataClient = useApolloMetadataClient();
  const { data } = useQuery<
    FindManyAvailablePackagesQuery,
    FindManyAvailablePackagesQueryVariables
  >(FIND_MANY_AVAILABLE_PACKAGES, {
    client: apolloMetadataClient ?? undefined,
    variables: {
      input,
    },
  });
  return {
    availablePackages: data?.getAvailablePackages || null,
  };
};
