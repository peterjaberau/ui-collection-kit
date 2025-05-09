import { MessageThreadSubscriber } from '@twenty-modules/activities/emails/types/MessageThreadSubscriber';

export type MessageThread = {
  id: string;
  subscribers?: MessageThreadSubscriber[];
};
