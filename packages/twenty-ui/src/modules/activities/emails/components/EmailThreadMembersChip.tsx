import { MessageThreadSubscribersDropdownButton } from '@twenty-modules/activities/emails/components/MessageThreadSubscribersDropdownButton';
import { MessageThread } from '@twenty-modules/activities/emails/types/MessageThread';

export const EmailThreadMembersChip = ({
  messageThread,
}: {
  messageThread: MessageThread;
}) => {
  const subscribers = messageThread.subscribers ?? [];

  return (
    <MessageThreadSubscribersDropdownButton
      messageThreadSubscribers={subscribers}
    />
  );
};
