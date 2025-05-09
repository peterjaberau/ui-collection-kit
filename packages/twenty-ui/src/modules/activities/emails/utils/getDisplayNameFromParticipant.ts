import { isNonEmptyString } from '@sniptt/guards';

import { EmailThreadMessageParticipant } from '@twenty-modules/activities/emails/types/EmailThreadMessageParticipant';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const getDisplayNameFromParticipant = ({
  participant,
  shouldUseFullName = false,
}: {
  participant: EmailThreadMessageParticipant;
  shouldUseFullName?: boolean;
}) => {
  if (isDefined(participant.person)) {
    return (
      `${participant.person?.name?.firstName}` +
      (shouldUseFullName ? ` ${participant.person?.name?.lastName}` : '')
    );
  }

  if (isDefined(participant.workspaceMember)) {
    return (
      participant.workspaceMember?.name?.firstName +
      (shouldUseFullName
        ? ` ${participant.workspaceMember?.name?.lastName}`
        : '')
    );
  }

  if (isNonEmptyString(participant.displayName)) {
    return participant.displayName;
  }

  if (isNonEmptyString(participant.handle)) {
    return participant.handle;
  }

  return 'Unknown';
};
