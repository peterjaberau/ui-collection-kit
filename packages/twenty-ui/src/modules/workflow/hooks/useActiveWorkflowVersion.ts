import { CoreObjectNameSingular } from '@twenty-modules/object-metadata/types/CoreObjectNameSingular';
import { useFindManyRecords } from '@twenty-modules/object-record/hooks/useFindManyRecords';
import { Workflow, WorkflowVersion } from '@twenty-modules/workflow/types/Workflow';

export const useActiveWorkflowVersion = (workflowId: string) => {
  const { records: workflowVersions, loading } = useFindManyRecords<
    WorkflowVersion & {
      workflow: Omit<Workflow, 'versions'> & {
        versions: Array<{ __typename: string }>;
      };
    }
  >({
    objectNameSingular: CoreObjectNameSingular.WorkflowVersion,
    filter: {
      workflowId: {
        eq: workflowId,
      },
      status: {
        eq: 'ACTIVE',
      },
    },
    recordGqlFields: {
      id: true,
      name: true,
      createdAt: true,
      updatedAt: true,
      workflowId: true,
      trigger: true,
      steps: true,
      status: true,
      workflow: {
        id: true,
        name: true,
        statuses: true,
        versions: {
          totalCount: true,
        },
      },
    },
  });

  return {
    workflowVersion: workflowVersions?.[0],
    loading,
  };
};
