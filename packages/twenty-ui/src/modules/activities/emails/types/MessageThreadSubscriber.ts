import { WorkspaceMember } from '@twenty-modules/workspace-member/types/WorkspaceMember';

export type MessageThreadSubscriber = {
  __typename: 'MessageThreadSubscriber';
  id: string;
  workspaceMember: WorkspaceMember;
};
