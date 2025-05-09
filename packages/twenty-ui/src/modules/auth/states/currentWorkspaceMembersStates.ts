import { CurrentWorkspaceMember } from '@twenty-modules/auth/states/currentWorkspaceMemberState';
import { createState } from '@twenty-ui/utilities';

export const currentWorkspaceMembersState = createState<
  CurrentWorkspaceMember[]
>({
  key: 'currentWorkspaceMembersState',
  defaultValue: [],
});
