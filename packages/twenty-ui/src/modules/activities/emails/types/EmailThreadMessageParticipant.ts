import { EmailParticipantRole } from '@twenty-modules/activities/emails/types/EmailParticipantRole';
import { Person } from '@twenty-modules/people/types/Person';
import { WorkspaceMember } from '@twenty-modules/workspace-member/types/WorkspaceMember';

export type EmailThreadMessageParticipant = {
  id: string;
  displayName: string;
  handle: string;
  role: EmailParticipantRole;
  messageId: string;
  person: Person;
  workspaceMember: WorkspaceMember;
  __typename: 'EmailThreadMessageParticipant';
};
