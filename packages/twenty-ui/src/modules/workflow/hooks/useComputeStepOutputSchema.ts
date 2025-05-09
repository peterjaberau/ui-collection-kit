import { COMPUTE_STEP_OUTPUT_SCHEMA } from '@twenty-modules/workflow/graphql/mutations/computeStepOutputSchema';
import { useApolloClient, useMutation } from '@apollo/client';
import {
  ComputeStepOutputSchemaInput,
  ComputeStepOutputSchemaMutation,
  ComputeStepOutputSchemaMutationVariables,
} from '@twenty-ui/front/generated/graphql';

export const useComputeStepOutputSchema = () => {
  const apolloClient = useApolloClient();
  const [mutate] = useMutation<
    ComputeStepOutputSchemaMutation,
    ComputeStepOutputSchemaMutationVariables
  >(COMPUTE_STEP_OUTPUT_SCHEMA, {
    client: apolloClient,
  });

  const computeStepOutputSchema = async (
    input: ComputeStepOutputSchemaInput,
  ) => {
    return await mutate({ variables: { input } });
  };

  return { computeStepOutputSchema };
};
