import styled from '@emotion/styled';

import { ParticipantChip } from '@twenty-modules/activities/components/ParticipantChip';
import { EmailThreadMessageParticipant } from '@twenty-modules/activities/emails/types/EmailThreadMessageParticipant';
import { beautifyPastDateRelativeToNow } from '@twenty-ui/front/utils/date-utils';

const StyledEmailThreadMessageSender = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledThreadMessageSentAt = styled.div`
  align-items: flex-end;
  display: flex;
  color: ${({ theme }) => theme.font.color.tertiary};
  font-size: ${({ theme }) => theme.font.size.sm};
`;

type EmailThreadMessageSenderProps = {
  sender: EmailThreadMessageParticipant;
  sentAt: string;
};

export const EmailThreadMessageSender = ({
  sender,
  sentAt,
}: EmailThreadMessageSenderProps) => {
  return (
    <StyledEmailThreadMessageSender>
      <ParticipantChip participant={sender} variant="bold" />
      <StyledThreadMessageSentAt>
        {beautifyPastDateRelativeToNow(sentAt)}
      </StyledThreadMessageSentAt>
    </StyledEmailThreadMessageSender>
  );
};
