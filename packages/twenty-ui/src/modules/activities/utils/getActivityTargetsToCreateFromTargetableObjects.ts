import { v4 } from 'uuid';

import { ActivityTargetableObject } from '@twenty-modules/activities/types/ActivityTargetableEntity';
import { Note } from '@twenty-modules/activities/types/Note';
import { NoteTarget } from '@twenty-modules/activities/types/NoteTarget';
import { Task } from '@twenty-modules/activities/types/Task';
import { TaskTarget } from '@twenty-modules/activities/types/TaskTarget';
import { getActivityTargetObjectFieldIdName } from '@twenty-modules/activities/utils/getActivityTargetObjectFieldIdName';
import { ObjectRecord } from '@twenty-modules/object-record/types/ObjectRecord';

export const makeActivityTargetsToCreateFromTargetableObjects = ({
  targetableObjects,
  activity,
  targetObjectRecords,
}: {
  targetableObjects: ActivityTargetableObject[];
  activity: Task | Note;
  targetObjectRecords: ObjectRecord[];
}): Partial<NoteTarget | TaskTarget>[] => {
  const activityTargetsToCreate = targetableObjects.map((targetableObject) => {
    const targetableObjectFieldIdName = getActivityTargetObjectFieldIdName({
      nameSingular: targetableObject.targetObjectNameSingular,
    });

    const relatedObjectRecord = targetObjectRecords.find(
      (record) => record.id === targetableObject.id,
    );

    const activityTarget = {
      [targetableObject.targetObjectNameSingular]: relatedObjectRecord,
      [targetableObjectFieldIdName]: targetableObject.id,
      activity,
      activityId: activity.id,
      id: v4(),
      updatedAt: new Date().toISOString(),
      createdAt: new Date().toISOString(),
    } as Partial<NoteTarget | TaskTarget>;

    return activityTarget;
  });

  return activityTargetsToCreate;
};
