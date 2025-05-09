import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';
import { WorkspaceMember } from '@twenty-ui/front/generated/graphql';

export type TimelineActivity = {
  id: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  workspaceMemberId: string;
  workspaceMember: WorkspaceMember;
  properties: any;
  name: string;
  linkedRecordCachedName: string;
  linkedRecordId: string | null;
  linkedObjectMetadataId: string | null;
  __typename: 'TimelineActivity';
} & Record<string, any>;

export type TimelineActivityWithRecord = TimelineActivity & {
  linkedRecordId: string;
  linkedObjectMetadataId: string;
};

export const isTimelineActivityWithLinkedRecord = (
  timelineActivity: TimelineActivity,
): timelineActivity is TimelineActivityWithRecord =>
  isDefined(timelineActivity.linkedObjectMetadataId) &&
  isDefined(timelineActivity.linkedRecordId);
