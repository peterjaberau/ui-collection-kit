import { EmailThreadMessage } from '@twenty-modules/activities/emails/types/EmailThreadMessage';

export type EmailThread = {
  id: string;
  subject: string;
  messages: EmailThreadMessage[];
  __typename: 'EmailThread';
};
