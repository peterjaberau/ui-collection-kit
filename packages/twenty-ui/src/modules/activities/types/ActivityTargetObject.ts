import { NoteTarget } from '@twenty-modules/activities/types/NoteTarget';
import { TaskTarget } from '@twenty-modules/activities/types/TaskTarget';
import { ObjectMetadataItem } from '@twenty-modules/object-metadata/types/ObjectMetadataItem';
import { ObjectRecord } from '@twenty-modules/object-record/types/ObjectRecord';

export type ActivityTargetWithTargetRecord = {
  targetObjectMetadataItem: ObjectMetadataItem;
  activityTarget: NoteTarget | TaskTarget;
  targetObject: ObjectRecord;
};
