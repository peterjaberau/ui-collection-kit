import { EmailThreadMessageParticipant } from '@twenty-modules/activities/emails/types/EmailThreadMessageParticipant';
import { MessageThread } from '@twenty-modules/activities/emails/types/MessageThread';

export type EmailThreadMessage = {
  id: string;
  text: string;
  receivedAt: string;
  subject: string;
  messageThreadId: string;
  messageParticipants: EmailThreadMessageParticipant[];
  messageThread: MessageThread;
  __typename: 'EmailThreadMessage';
};
