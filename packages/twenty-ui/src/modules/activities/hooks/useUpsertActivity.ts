import { useRecoilState, useRecoilValue } from 'recoil';

import { useCreateActivityInDB } from '@twenty-modules/activities/hooks/useCreateActivityInDB';
import { useRefreshShowPageFindManyActivitiesQueries } from '@twenty-modules/activities/hooks/useRefreshShowPageFindManyActivitiesQueries';
import { isActivityInCreateModeState } from '@twenty-modules/activities/states/isActivityInCreateModeState';
import { isUpsertingActivityInDBState } from '@twenty-modules/activities/states/isCreatingActivityInDBState';
import { objectShowPageTargetableObjectState } from '@twenty-modules/activities/timeline-activities/states/objectShowPageTargetableObjectIdState';
import { Note } from '@twenty-modules/activities/types/Note';
import { Task } from '@twenty-modules/activities/types/Task';
import { CoreObjectNameSingular } from '@twenty-modules/object-metadata/types/CoreObjectNameSingular';
import { useUpdateOneRecord } from '@twenty-modules/object-record/hooks/useUpdateOneRecord';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const useUpsertActivity = ({
  activityObjectNameSingular,
}: {
  activityObjectNameSingular:
    | CoreObjectNameSingular.Task
    | CoreObjectNameSingular.Note;
}) => {
  const [isActivityInCreateMode] = useRecoilState(isActivityInCreateModeState);

  const { updateOneRecord: updateOneActivity } = useUpdateOneRecord<
    Task | Note
  >({
    objectNameSingular: activityObjectNameSingular,
  });

  const { createActivityInDB } = useCreateActivityInDB({
    activityObjectNameSingular,
  });

  const [, setIsUpsertingActivityInDB] = useRecoilState(
    isUpsertingActivityInDBState,
  );

  const objectShowPageTargetableObject = useRecoilValue(
    objectShowPageTargetableObjectState,
  );

  const { refreshShowPageFindManyActivitiesQueries } =
    useRefreshShowPageFindManyActivitiesQueries({
      activityObjectNameSingular,
    });

  const upsertActivity = async ({
    activity,
    input,
  }: {
    activity: Task | Note;
    input: Partial<Task | Note>;
  }) => {
    setIsUpsertingActivityInDB(true);
    if (isActivityInCreateMode) {
      const activityToCreate: Partial<Task | Note> = {
        ...activity,
        ...input,
      };

      if (isDefined(objectShowPageTargetableObject)) {
        refreshShowPageFindManyActivitiesQueries();
      }

      await createActivityInDB(activityToCreate);
    } else {
      await updateOneActivity?.({
        idToUpdate: activity.id,
        updateOneRecordInput: input,
      });
    }

    setIsUpsertingActivityInDB(false);
  };

  return {
    upsertActivity,
  };
};
