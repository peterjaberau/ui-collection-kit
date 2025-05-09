import { CoreObjectNameSingular } from '@twenty-modules/object-metadata/types/CoreObjectNameSingular';
import { useFindManyRecordsQuery } from '@twenty-modules/object-record/hooks/useFindManyRecordsQuery';
import { useApolloClient } from '@apollo/client';
import {
  CreateDraftFromWorkflowVersionInput,
  useCreateDraftFromWorkflowVersionMutation,
} from '@twenty-ui/front/generated/graphql';

export const useCreateDraftFromWorkflowVersion = () => {
  const apolloClient = useApolloClient();

  const [mutate] = useCreateDraftFromWorkflowVersionMutation({
    client: apolloClient,
  });

  const { findManyRecordsQuery: findManyWorkflowsQuery } =
    useFindManyRecordsQuery({
      objectNameSingular: CoreObjectNameSingular.Workflow,
      recordGqlFields: {
        id: true,
        name: true,
        statuses: true,
        lastPublishedVersionId: true,
        versions: true,
      },
    });

  const createDraftFromWorkflowVersion = async (
    input: CreateDraftFromWorkflowVersionInput,
  ) => {
    const result = await mutate({
      variables: { input },
      awaitRefetchQueries: true,
      refetchQueries: [
        {
          query: findManyWorkflowsQuery,
          variables: {
            id: input.workflowId,
          },
        },
      ],
    });

    return result?.data?.createDraftFromWorkflowVersion.id;
  };

  return {
    createDraftFromWorkflowVersion,
  };
};
