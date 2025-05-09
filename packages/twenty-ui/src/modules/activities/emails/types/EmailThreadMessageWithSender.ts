import { EmailThreadMessage } from '@twenty-modules/activities/emails/types/EmailThreadMessage';
import { EmailThreadMessageParticipant } from '@twenty-modules/activities/emails/types/EmailThreadMessageParticipant';

export type EmailThreadMessageWithSender = EmailThreadMessage & {
  sender: EmailThreadMessageParticipant;
};
