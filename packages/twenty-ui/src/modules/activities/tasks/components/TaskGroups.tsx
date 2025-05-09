import styled from '@emotion/styled';

import { SkeletonLoader } from '@twenty-modules/activities/components/SkeletonLoader';
import { useOpenCreateActivityDrawer } from '@twenty-modules/activities/hooks/useOpenCreateActivityDrawer';
import { useTasks } from '@twenty-modules/activities/tasks/hooks/useTasks';
import { ActivityTargetableObject } from '@twenty-modules/activities/types/ActivityTargetableEntity';
import { Task } from '@twenty-modules/activities/types/Task';
import { CoreObjectNameSingular } from '@twenty-modules/object-metadata/types/CoreObjectNameSingular';
import { useHasObjectReadOnlyPermission } from '@twenty-modules/settings/roles/hooks/useHasObjectReadOnlyPermission';
import { activeTabIdComponentState } from '@twenty-modules/ui/layout/tab/states/activeTabIdComponentState';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';
import groupBy from 'lodash.groupby';
import { AddTaskButton } from './AddTaskButton';
import { TaskList } from './TaskList';
import {
  AnimatedPlaceholder,
  AnimatedPlaceholderEmptyContainer,
  AnimatedPlaceholderEmptySubTitle,
  AnimatedPlaceholderEmptyTextContainer,
  AnimatedPlaceholderEmptyTitle,
  EMPTY_PLACEHOLDER_TRANSITION_PROPS,
} from '@twenty-ui/layout';
import { Button } from '@twenty-ui/input';
import { IconPlus } from '@twenty-ui/display';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

type TaskGroupsProps = {
  filterDropdownId?: string;
  targetableObjects?: ActivityTargetableObject[];
};

export const TaskGroups = ({ targetableObjects }: TaskGroupsProps) => {
  const { tasks, tasksLoading } = useTasks({
    targetableObjects: targetableObjects ?? [],
  });

  const hasObjectReadOnlyPermission = useHasObjectReadOnlyPermission();

  const openCreateActivity = useOpenCreateActivityDrawer({
    activityObjectNameSingular: CoreObjectNameSingular.Task,
  });

  const activeTabId = useRecoilComponentValueV2(activeTabIdComponentState);

  const isLoading =
    (activeTabId !== 'done' && tasksLoading) ||
    (activeTabId === 'done' && tasksLoading);

  const isTasksEmpty =
    (activeTabId !== 'done' && tasks?.length === 0) ||
    (activeTabId === 'done' && tasks?.length === 0);

  if (isLoading && isTasksEmpty) {
    return <SkeletonLoader />;
  }

  if (isTasksEmpty) {
    return (
      <AnimatedPlaceholderEmptyContainer
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...EMPTY_PLACEHOLDER_TRANSITION_PROPS}
      >
        <AnimatedPlaceholder type="noTask" />
        <AnimatedPlaceholderEmptyTextContainer>
          <AnimatedPlaceholderEmptyTitle>
            Mission accomplished!
          </AnimatedPlaceholderEmptyTitle>
          <AnimatedPlaceholderEmptySubTitle>
            All tasks addressed. Maintain the momentum.
          </AnimatedPlaceholderEmptySubTitle>
        </AnimatedPlaceholderEmptyTextContainer>
        {!hasObjectReadOnlyPermission && (
          <Button
            Icon={IconPlus}
            title="New task"
            variant={'secondary'}
            onClick={() =>
              openCreateActivity({
                targetableObjects: targetableObjects ?? [],
              })
            }
          />
        )}
      </AnimatedPlaceholderEmptyContainer>
    );
  }

  const sortedTasksByStatus = Object.entries(
    groupBy(tasks, ({ status }) => status),
  ).sort(([statusA], [statusB]) => statusB.localeCompare(statusA));

  const hasTodoStatus = sortedTasksByStatus.some(
    ([status]) => status === 'TODO',
  );

  return (
    <StyledContainer>
      {sortedTasksByStatus.map(([status, tasksByStatus]: [string, Task[]]) => (
        <TaskList
          key={status}
          title={status}
          tasks={tasksByStatus}
          button={
            (status === 'TODO' || !hasTodoStatus) && (
              <AddTaskButton activityTargetableObjects={targetableObjects} />
            )
          }
        />
      ))}
    </StyledContainer>
  );
};
