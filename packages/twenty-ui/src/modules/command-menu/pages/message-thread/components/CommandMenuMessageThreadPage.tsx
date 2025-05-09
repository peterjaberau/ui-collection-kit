import styled from '@emotion/styled';
import { useEffect, useMemo } from 'react';

import { CustomResolverFetchMoreLoader } from '@twenty-modules/activities/components/CustomResolverFetchMoreLoader';
import { EmailLoader } from '@twenty-modules/activities/emails/components/EmailLoader';
import { EmailThreadHeader } from '@twenty-modules/activities/emails/components/EmailThreadHeader';
import { EmailThreadMessage } from '@twenty-modules/activities/emails/components/EmailThreadMessage';
import { CommandMenuMessageThreadIntermediaryMessages } from '@twenty-modules/command-menu/pages/message-thread/components/CommandMenuMessageThreadIntermediaryMessages';
import { useEmailThreadInCommandMenu } from '@twenty-modules/command-menu/pages/message-thread/hooks/useEmailThreadInCommandMenu';
import { messageThreadComponentState } from '@twenty-modules/command-menu/pages/message-thread/states/messageThreadComponentState';
import { useIsMobile } from '@twenty-modules/ui/utilities/responsive/hooks/useIsMobile';
import { useSetRecoilComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useSetRecoilComponentStateV2';
import { assertUnreachable } from '@twenty-modules/workflow/utils/assertUnreachable';
import { ConnectedAccountProvider } from '@ui-collection-kit/twenty-shared/src/types';
import { Button } from '@twenty-ui/input';
import { IconArrowBackUp } from '@twenty-ui/display';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const StyledContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 85%;
  overflow-y: auto;
`;

const StyledButtonContainer = styled.div<{ isMobile: boolean }>`
  background: ${({ theme }) => theme.background.secondary};
  border-top: 1px solid ${({ theme }) => theme.border.color.light};
  display: flex;
  justify-content: flex-end;
  height: ${({ isMobile }) => (isMobile ? '100px' : '50px')};
  padding: ${({ theme }) => theme.spacing(2)};
  width: 100%;
  box-sizing: border-box;
`;

export const CommandMenuMessageThreadPage = () => {
  const setMessageThread = useSetRecoilComponentStateV2(
    messageThreadComponentState,
  );

  const isMobile = useIsMobile();

  const {
    thread,
    messages,
    fetchMoreMessages,
    threadLoading,
    messageThreadExternalId,
    connectedAccountHandle,
    messageChannelLoading,
    connectedAccountProvider,
    lastMessageExternalId,
  } = useEmailThreadInCommandMenu();

  useEffect(() => {
    if (!messages[0]?.messageThread) {
      return;
    }
    setMessageThread(messages[0]?.messageThread);
  }, [messages, setMessageThread]);

  const messagesCount = messages.length;
  const is5OrMoreMessages = messagesCount >= 5;
  const firstMessages = messages.slice(
    0,
    is5OrMoreMessages ? 2 : messagesCount - 1,
  );
  const intermediaryMessages = is5OrMoreMessages
    ? messages.slice(2, messagesCount - 1)
    : [];
  const lastMessage = messages[messagesCount - 1];
  const subject = messages[0]?.subject;

  const canReply = useMemo(() => {
    return (
      connectedAccountHandle &&
      connectedAccountProvider &&
      lastMessage &&
      messageThreadExternalId != null
    );
  }, [
    connectedAccountHandle,
    connectedAccountProvider,
    lastMessage,
    messageThreadExternalId,
  ]);

  const handleReplyClick = () => {
    if (!canReply) {
      return;
    }

    let url: string;
    switch (connectedAccountProvider) {
      case ConnectedAccountProvider.MICROSOFT:
        url = `https://outlook.office.com/mail/deeplink?ItemID=${lastMessageExternalId}`;
        window.open(url, '_blank');
        break;
      case ConnectedAccountProvider.GOOGLE:
        url = `https://mail.google.com/mail/?authuser=${connectedAccountHandle}#all/${messageThreadExternalId}`;
        window.open(url, '_blank');
        break;
      case null:
        throw new Error('Account provider not provided');
      default:
        assertUnreachable(connectedAccountProvider);
    }
  };
  if (!thread || !messages.length) {
    return null;
  }
  return (
    <StyledWrapper>
      <StyledContainer>
        {threadLoading ? (
          <EmailLoader loadingText="Loading thread" />
        ) : (
          <>
            <EmailThreadHeader
              subject={subject}
              lastMessageSentAt={lastMessage.receivedAt}
            />
            {firstMessages.map((message) => (
              <EmailThreadMessage
                key={message.id}
                sender={message.sender}
                participants={message.messageParticipants}
                body={message.text}
                sentAt={message.receivedAt}
              />
            ))}
            <CommandMenuMessageThreadIntermediaryMessages
              messages={intermediaryMessages}
            />
            <EmailThreadMessage
              key={lastMessage.id}
              sender={lastMessage.sender}
              participants={lastMessage.messageParticipants}
              body={lastMessage.text}
              sentAt={lastMessage.receivedAt}
              isExpanded
            />
            <CustomResolverFetchMoreLoader
              loading={threadLoading}
              onLastRowVisible={fetchMoreMessages}
            />
          </>
        )}
      </StyledContainer>
      {canReply && !messageChannelLoading && (
        <StyledButtonContainer isMobile={isMobile}>
          <Button
            onClick={handleReplyClick}
            title="Reply"
            Icon={IconArrowBackUp}
            disabled={!canReply}
          />
        </StyledButtonContainer>
      )}
    </StyledWrapper>
  );
};
