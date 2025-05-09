import { useObjectMetadataItem } from '@twenty-modules/object-metadata/hooks/useObjectMetadataItem';
import { CoreObjectNameSingular } from '@twenty-modules/object-metadata/types/CoreObjectNameSingular';
import { ObjectMetadataItem } from '@twenty-modules/object-metadata/types/ObjectMetadataItem';
import { generateDepthOneRecordGqlFields } from '@twenty-modules/object-record/graphql/utils/generateDepthOneRecordGqlFields';
import { useFindManyRecords } from '@twenty-modules/object-record/hooks/useFindManyRecords';
import { Workflow, WorkflowVersion } from '@twenty-modules/workflow/types/Workflow';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const useActiveWorkflowVersionsWithManualTrigger = ({
  objectMetadataItem,
  skip,
}: {
  objectMetadataItem?: ObjectMetadataItem;
  skip?: boolean;
}) => {
  const filters = [
    {
      status: {
        eq: 'ACTIVE',
      },
    },
    {
      trigger: {
        like: `%"type": "MANUAL"%`,
      },
    },
  ];

  if (isDefined(objectMetadataItem)) {
    filters.push({
      trigger: {
        like: `%"objectType": "${objectMetadataItem.nameSingular}"%`,
      },
    });
  }

  const { objectMetadataItem: workflowVersionObjectMetadataItem } =
    useObjectMetadataItem({
      objectNameSingular: CoreObjectNameSingular.WorkflowVersion,
    });

  const { records } = useFindManyRecords<
    WorkflowVersion & { workflow: Workflow }
  >({
    objectNameSingular: CoreObjectNameSingular.WorkflowVersion,
    filter: {
      and: filters,
    },
    recordGqlFields: {
      ...generateDepthOneRecordGqlFields({
        objectMetadataItem: workflowVersionObjectMetadataItem,
      }),
      workflow: true,
    },
    skip,
  });

  // TODO: refactor when we can use 'not like' in the RawJson filter
  if (!isDefined(objectMetadataItem)) {
    return {
      records: records.filter(
        (record) =>
          record.status === 'ACTIVE' &&
          record.trigger?.type === 'MANUAL' &&
          !isDefined(record.trigger?.settings.objectType),
      ),
    };
  }

  return { records: records.filter((record) => isDefined(record.workflow)) };
};
