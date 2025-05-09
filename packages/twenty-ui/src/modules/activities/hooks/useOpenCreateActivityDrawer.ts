import { useSetRecoilState } from 'recoil';

import { activityTargetableEntityArrayState } from '@twenty-modules/activities/states/activityTargetableEntityArrayState';
import { CoreObjectNameSingular } from '@twenty-modules/object-metadata/types/CoreObjectNameSingular';
import { viewableRecordIdState } from '@twenty-modules/object-record/record-right-drawer/states/viewableRecordIdState';
import { viewableRecordNameSingularState } from '@twenty-modules/object-record/record-right-drawer/states/viewableRecordNameSingularState';
import { WorkspaceMember } from '@twenty-modules/workspace-member/types/WorkspaceMember';

import { isUpsertingActivityInDBState } from '@twenty-modules/activities/states/isCreatingActivityInDBState';
import { ActivityTargetableObject } from '@twenty-modules/activities/types/ActivityTargetableEntity';
import { Note } from '@twenty-modules/activities/types/Note';
import { NoteTarget } from '@twenty-modules/activities/types/NoteTarget';
import { Task } from '@twenty-modules/activities/types/Task';
import { TaskTarget } from '@twenty-modules/activities/types/TaskTarget';
import { useOpenRecordInCommandMenu } from '@twenty-modules/command-menu/hooks/useOpenRecordInCommandMenu';
import { useCreateOneRecord } from '@twenty-modules/object-record/hooks/useCreateOneRecord';

export const useOpenCreateActivityDrawer = ({
  activityObjectNameSingular,
}: {
  activityObjectNameSingular:
    | CoreObjectNameSingular.Note
    | CoreObjectNameSingular.Task;
}) => {
  const { createOneRecord: createOneActivity } = useCreateOneRecord<
    (Task | Note) & { position: 'first' | 'last' }
  >({
    objectNameSingular: activityObjectNameSingular,
  });

  const { createOneRecord: createOneActivityTarget } = useCreateOneRecord<
    TaskTarget | NoteTarget
  >({
    objectNameSingular:
      activityObjectNameSingular === CoreObjectNameSingular.Task
        ? CoreObjectNameSingular.TaskTarget
        : CoreObjectNameSingular.NoteTarget,
    shouldMatchRootQueryFilter: true,
  });

  const setActivityTargetableEntityArray = useSetRecoilState(
    activityTargetableEntityArrayState,
  );
  const setViewableRecordId = useSetRecoilState(viewableRecordIdState);
  const setViewableRecordNameSingular = useSetRecoilState(
    viewableRecordNameSingularState,
  );

  const setIsUpsertingActivityInDB = useSetRecoilState(
    isUpsertingActivityInDBState,
  );

  const { openRecordInCommandMenu } = useOpenRecordInCommandMenu();

  const openCreateActivityDrawer = async ({
    targetableObjects,
    customAssignee,
  }: {
    targetableObjects: ActivityTargetableObject[];
    customAssignee?: WorkspaceMember;
  }) => {
    setViewableRecordId(null);
    setViewableRecordNameSingular(activityObjectNameSingular);

    const activity = await createOneActivity({
      ...(activityObjectNameSingular === CoreObjectNameSingular.Task
        ? {
            assigneeId: customAssignee?.id,
          }
        : {}),
      position: 'last',
    });

    if (targetableObjects.length > 0) {
      const targetableObjectRelationIdName = `${targetableObjects[0].targetObjectNameSingular}Id`;

      await createOneActivityTarget({
        ...(activityObjectNameSingular === CoreObjectNameSingular.Task
          ? {
              taskId: activity.id,
            }
          : {
              noteId: activity.id,
            }),
        [targetableObjectRelationIdName]: targetableObjects[0].id,
      });

      setActivityTargetableEntityArray(targetableObjects);
    } else {
      await createOneActivityTarget({
        ...(activityObjectNameSingular === CoreObjectNameSingular.Task
          ? {
              taskId: activity.id,
            }
          : {
              noteId: activity.id,
            }),
      });

      setActivityTargetableEntityArray([]);
    }

    openRecordInCommandMenu({
      recordId: activity.id,
      objectNameSingular: activityObjectNameSingular,
      isNewRecord: true,
    });

    setViewableRecordId(activity.id);

    setIsUpsertingActivityInDB(false);
  };

  return openCreateActivityDrawer;
};
