import { ApolloClient } from '@apollo/client';

import { CurrentWorkspaceMember } from '@twenty-modules/auth/states/currentWorkspaceMemberState';

export interface ApolloManager<TCacheShape> {
  getClient(): ApolloClient<TCacheShape>;
  updateWorkspaceMember(workspaceMember: CurrentWorkspaceMember | null): void;
}
