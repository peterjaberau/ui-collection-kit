import { TimelineActivity } from '@twenty-modules/activities/timeline-activities/types/TimelineActivity';
import { CurrentWorkspaceMember } from '@twenty-modules/auth/states/currentWorkspaceMemberState';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const getTimelineActivityAuthorFullName = (
  event: TimelineActivity,
  currentWorkspaceMember: CurrentWorkspaceMember,
) => {
  if (isDefined(event.workspaceMember)) {
    return currentWorkspaceMember.id === event.workspaceMember.id
      ? 'You'
      : `${event.workspaceMember?.name.firstName} ${event.workspaceMember?.name.lastName}`;
  }
  return 'Twenty';
};
