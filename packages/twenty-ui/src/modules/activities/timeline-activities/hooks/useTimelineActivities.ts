import { useLinkedObjectsTitle } from '@twenty-modules/activities/timeline-activities/hooks/useLinkedObjectsTitle';
import { TimelineActivity } from '@twenty-modules/activities/timeline-activities/types/TimelineActivity';
import { ActivityTargetableObject } from '@twenty-modules/activities/types/ActivityTargetableEntity';
import { getActivityTargetObjectFieldIdName } from '@twenty-modules/activities/utils/getActivityTargetObjectFieldIdName';
import { useObjectMetadataItem } from '@twenty-modules/object-metadata/hooks/useObjectMetadataItem';
import { CoreObjectNameSingular } from '@twenty-modules/object-metadata/types/CoreObjectNameSingular';
import { generateDepthOneRecordGqlFields } from '@twenty-modules/object-record/graphql/utils/generateDepthOneRecordGqlFields';
import { useFindManyRecords } from '@twenty-modules/object-record/hooks/useFindManyRecords';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

// do we need to test this?
export const useTimelineActivities = (
  targetableObject: ActivityTargetableObject,
) => {
  const targetableObjectFieldIdName = getActivityTargetObjectFieldIdName({
    nameSingular: targetableObject.targetObjectNameSingular,
  });

  const { objectMetadataItem } = useObjectMetadataItem({
    objectNameSingular: CoreObjectNameSingular.TimelineActivity,
  });

  const {
    records: timelineActivities,
    loading: loadingTimelineActivities,
    fetchMoreRecords,
  } = useFindManyRecords<TimelineActivity>({
    objectNameSingular: CoreObjectNameSingular.TimelineActivity,
    filter: {
      [targetableObjectFieldIdName]: {
        eq: targetableObject.id,
      },
    },
    orderBy: [
      {
        createdAt: 'DescNullsFirst',
      },
    ],
    recordGqlFields: generateDepthOneRecordGqlFields({ objectMetadataItem }),
    fetchPolicy: 'cache-and-network',
  });

  const activityIds = timelineActivities
    .filter((timelineActivity) => timelineActivity.name.match(/note|task/i))
    .map((timelineActivity) => timelineActivity.linkedRecordId)
    .filter(isDefined);

  const { loading: loadingLinkedObjectsTitle } =
    useLinkedObjectsTitle(activityIds);

  const loading = loadingTimelineActivities || loadingLinkedObjectsTitle;

  return {
    timelineActivities,
    loading,
    fetchMoreRecords,
  };
};
