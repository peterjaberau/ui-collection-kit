import { ActivityTargetableObject } from '@twenty-modules/activities/types/ActivityTargetableEntity';
import { getActivityTargetObjectFieldIdName } from '@twenty-modules/activities/utils/getActivityTargetObjectFieldIdName';

export const getActivityTargetsFilter = ({
  targetableObjects,
}: {
  targetableObjects: ActivityTargetableObject[];
}) => {
  const findManyActivitiyTargetsQueryFilter = Object.fromEntries(
    targetableObjects.map((targetableObject) => {
      const targetObjectFieldName = getActivityTargetObjectFieldIdName({
        nameSingular: targetableObject.targetObjectNameSingular,
      });

      return [
        targetObjectFieldName,
        {
          eq: targetableObject.id,
        },
      ];
    }),
  );

  return findManyActivitiyTargetsQueryFilter;
};
