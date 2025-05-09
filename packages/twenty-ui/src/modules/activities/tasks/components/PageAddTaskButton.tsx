import { useOpenCreateActivityDrawer } from '@twenty-modules/activities/hooks/useOpenCreateActivityDrawer';
import { CoreObjectNameSingular } from '@twenty-modules/object-metadata/types/CoreObjectNameSingular';
import { PageAddButton } from '@twenty-modules/ui/layout/page/components/PageAddButton';

export const PageAddTaskButton = () => {
  const openCreateActivity = useOpenCreateActivityDrawer({
    activityObjectNameSingular: CoreObjectNameSingular.Task,
  });

  // TODO: fetch workspace member from filter here

  const handleClick = () => {
    openCreateActivity({
      targetableObjects: [],
    });
  };

  return <PageAddButton onClick={handleClick} />;
};
