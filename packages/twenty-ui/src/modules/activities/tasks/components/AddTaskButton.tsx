import { isNonEmptyArray } from '@sniptt/guards';

import { useOpenCreateActivityDrawer } from '@twenty-modules/activities/hooks/useOpenCreateActivityDrawer';
import { ActivityTargetableObject } from '@twenty-modules/activities/types/ActivityTargetableEntity';
import { CoreObjectNameSingular } from '@twenty-modules/object-metadata/types/CoreObjectNameSingular';
import { useHasObjectReadOnlyPermission } from '@twenty-modules/settings/roles/hooks/useHasObjectReadOnlyPermission';
import { Button } from '@twenty-ui/input';
import { IconPlus } from '@twenty-ui/display';

export const AddTaskButton = ({
  activityTargetableObjects,
}: {
  activityTargetableObjects?: ActivityTargetableObject[];
}) => {
  const openCreateActivity = useOpenCreateActivityDrawer({
    activityObjectNameSingular: CoreObjectNameSingular.Task,
  });

  const hasObjectReadOnlyPermission = useHasObjectReadOnlyPermission();

  if (
    !isNonEmptyArray(activityTargetableObjects) ||
    hasObjectReadOnlyPermission
  ) {
    return null;
  }

  return (
    <Button
      Icon={IconPlus}
      size="small"
      variant="secondary"
      title="Add task"
      onClick={() =>
        openCreateActivity({
          targetableObjects: activityTargetableObjects,
        })
      }
    />
  );
};
