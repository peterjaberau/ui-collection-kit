import { useRecoilValue } from 'recoil';

import { Note } from '@twenty-modules/activities/types/Note';
import { NoteTarget } from '@twenty-modules/activities/types/NoteTarget';
import { Task } from '@twenty-modules/activities/types/Task';
import { TaskTarget } from '@twenty-modules/activities/types/TaskTarget';
import { getActivityTargetObjectRecords } from '@twenty-modules/activities/utils/getActivityTargetObjectRecords';
import { objectMetadataItemsState } from '@twenty-modules/object-metadata/states/objectMetadataItemsState';
import { recordStoreFamilyState } from '@twenty-modules/object-record/record-store/states/recordStoreFamilyState';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const useActivityTargetObjectRecords = (
  activityRecordId?: string,
  activityTargets?: NoteTarget[] | TaskTarget[],
) => {
  const objectMetadataItems = useRecoilValue(objectMetadataItemsState);

  const activity = useRecoilValue(
    recordStoreFamilyState(activityRecordId ?? ''),
  ) as Note | Task | null;

  if (!isDefined(activity) && !isDefined(activityTargets)) {
    return { activityTargetObjectRecords: [] };
  }

  const activityTargetObjectRecords = getActivityTargetObjectRecords({
    activityRecord: activity as Note | Task,
    objectMetadataItems,
    activityTargets,
  });

  return {
    activityTargetObjectRecords,
  };
};
