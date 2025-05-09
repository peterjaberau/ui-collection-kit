import { Person } from '@twenty-modules/people/types/Person';
import { WorkspaceMember } from '@twenty-ui/front/generated-metadata/graphql';

export type CalendarEventParticipant = {
  id: string;
  handle: string;
  isOrganizer: boolean;
  displayName: string;
  person?: Person;
  workspaceMember?: WorkspaceMember;
  responseStatus: 'ACCEPTED' | 'DECLINED' | 'NEEDS_ACTION' | 'TENTATIVE';
};
