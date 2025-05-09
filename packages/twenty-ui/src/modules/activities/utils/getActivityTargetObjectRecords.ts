import { ActivityTargetWithTargetRecord } from '@twenty-modules/activities/types/ActivityTargetObject';
import { Note } from '@twenty-modules/activities/types/Note';
import { NoteTarget } from '@twenty-modules/activities/types/NoteTarget';
import { Task } from '@twenty-modules/activities/types/Task';
import { TaskTarget } from '@twenty-modules/activities/types/TaskTarget';
import { CoreObjectNameSingular } from '@twenty-modules/object-metadata/types/CoreObjectNameSingular';
import { ObjectMetadataItem } from '@twenty-modules/object-metadata/types/ObjectMetadataItem';
import { ObjectRecord } from '@twenty-modules/object-record/types/ObjectRecord';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

type GetActivityTargetObjectRecordsProps = {
  activityRecord: Note | Task;
  objectMetadataItems: ObjectMetadataItem[];
  activityTargets?: NoteTarget[] | TaskTarget[];
};

export const getActivityTargetObjectRecords = ({
  activityRecord,
  objectMetadataItems,
  activityTargets,
}: GetActivityTargetObjectRecordsProps) => {
  if (!isDefined(activityRecord) && !isDefined(activityTargets)) {
    return [];
  }

  const targets = activityTargets
    ? activityTargets
    : activityRecord &&
        'noteTargets' in activityRecord &&
        activityRecord.noteTargets
      ? activityRecord.noteTargets
      : activityRecord &&
          'taskTargets' in activityRecord &&
          activityRecord.taskTargets
        ? activityRecord.taskTargets
        : [];

  const activityTargetObjectRecords = targets
    .map<ActivityTargetWithTargetRecord | undefined>((activityTarget) => {
      if (!isDefined(activityTarget)) {
        throw new Error(`Cannot find activity target`);
      }

      const correspondingObjectMetadataItem = objectMetadataItems.find(
        (objectMetadataItem) =>
          isDefined(activityTarget[objectMetadataItem.nameSingular]) &&
          ![CoreObjectNameSingular.Note, CoreObjectNameSingular.Task].includes(
            objectMetadataItem.nameSingular as CoreObjectNameSingular,
          ),
      );

      if (!correspondingObjectMetadataItem) {
        return undefined;
      }

      const targetObjectRecord = activityTarget[
        correspondingObjectMetadataItem.nameSingular
      ] as ObjectRecord | undefined;

      if (!isDefined(targetObjectRecord)) {
        throw new Error(
          `Cannot find target object record of type ${correspondingObjectMetadataItem.nameSingular}, make sure the request for activities eagerly loads for the target objects on activity target relation.`,
        );
      }

      return {
        activityTarget,
        targetObject: targetObjectRecord,
        targetObjectMetadataItem: correspondingObjectMetadataItem,
      };
    })
    .filter(isDefined);

  return activityTargetObjectRecords;
};
