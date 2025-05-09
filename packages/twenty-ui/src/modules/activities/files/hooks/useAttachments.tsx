import { Attachment } from '@twenty-modules/activities/files/types/Attachment';
import { ActivityTargetableObject } from '@twenty-modules/activities/types/ActivityTargetableEntity';
import { getActivityTargetObjectFieldIdName } from '@twenty-modules/activities/utils/getActivityTargetObjectFieldIdName';
import { CoreObjectNameSingular } from '@twenty-modules/object-metadata/types/CoreObjectNameSingular';
import { useFindManyRecords } from '@twenty-modules/object-record/hooks/useFindManyRecords';

export const useAttachments = (targetableObject: ActivityTargetableObject) => {
  const targetableObjectFieldIdName = getActivityTargetObjectFieldIdName({
    nameSingular: targetableObject.targetObjectNameSingular,
  });

  const { records: attachments, loading } = useFindManyRecords<Attachment>({
    objectNameSingular: CoreObjectNameSingular.Attachment,
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
  });

  return {
    attachments,
    loading,
  };
};
