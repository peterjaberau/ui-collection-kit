import { isNonEmptyString } from '@sniptt/guards';
import { useRecoilCallback } from 'recoil';

import { findActivitiesOperationSignatureFactory } from '@twenty-modules/activities/graphql/operation-signatures/factories/findActivitiesOperationSignatureFactory';
import { useActivityTargetsForTargetableObjects } from '@twenty-modules/activities/hooks/useActivityTargetsForTargetableObjects';
import { ActivityTargetableObject } from '@twenty-modules/activities/types/ActivityTargetableEntity';
import { Note } from '@twenty-modules/activities/types/Note';
import { Task } from '@twenty-modules/activities/types/Task';
import { useObjectMetadataItems } from '@twenty-modules/object-metadata/hooks/useObjectMetadataItems';
import { CoreObjectNameSingular } from '@twenty-modules/object-metadata/types/CoreObjectNameSingular';
import { RecordGqlOperationFilter } from '@twenty-modules/object-record/graphql/types/RecordGqlOperationFilter';
import { RecordGqlOperationOrderBy } from '@twenty-modules/object-record/graphql/types/RecordGqlOperationOrderBy';
import { useFindManyRecords } from '@twenty-modules/object-record/hooks/useFindManyRecords';
import { recordStoreFamilyState } from '@twenty-modules/object-record/record-store/states/recordStoreFamilyState';
import { sortByAscString } from '@twenty-ui/front/utils/array/sortByAscString';

export const useActivities = <T extends Task | Note>({
  objectNameSingular,
  targetableObjects,
  activitiesFilters,
  activitiesOrderByVariables,
  skip,
}: {
  objectNameSingular: CoreObjectNameSingular;
  targetableObjects: ActivityTargetableObject[];
  activitiesFilters: RecordGqlOperationFilter;
  activitiesOrderByVariables: RecordGqlOperationOrderBy;
  skip?: boolean;
}) => {
  const { objectMetadataItems } = useObjectMetadataItems();

  const { activityTargets, loadingActivityTargets } =
    useActivityTargetsForTargetableObjects({
      objectNameSingular,
      targetableObjects,
      skip: skip,
    });

  const activityIds = [
    ...new Set(
      activityTargets
        ? [
            ...activityTargets
              .map(
                (activityTarget) =>
                  activityTarget.taskId ?? activityTarget.noteId,
              )
              .filter(isNonEmptyString),
          ].sort(sortByAscString)
        : [],
    ),
  ];

  const skipBecauseNoActivityTargetFound = activityIds.length === 0;

  const filter: RecordGqlOperationFilter = {
    id: {
      in: activityIds,
    },
    ...activitiesFilters,
  };

  const FIND_ACTIVITIES_OPERATION_SIGNATURE =
    findActivitiesOperationSignatureFactory({
      objectMetadataItems,
      objectNameSingular,
    });

  const { records: activities, loading: loadingActivities } =
    useFindManyRecords<Task | Note>({
      skip: skip || loadingActivityTargets || skipBecauseNoActivityTargetFound,
      objectNameSingular:
        FIND_ACTIVITIES_OPERATION_SIGNATURE.objectNameSingular,
      recordGqlFields: FIND_ACTIVITIES_OPERATION_SIGNATURE.fields,
      filter,
      orderBy: activitiesOrderByVariables,
      onCompleted: useRecoilCallback(
        ({ set }) =>
          (activities) => {
            for (const activity of activities) {
              set(recordStoreFamilyState(activity.id), activity);
            }
          },
        [],
      ),
    });

  return {
    activities: activities as T[],
    loading: loadingActivities || loadingActivityTargets,
  };
};
