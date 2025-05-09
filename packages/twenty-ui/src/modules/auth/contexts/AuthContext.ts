import { CurrentWorkspaceMember } from '@twenty-modules/auth/states/currentWorkspaceMemberState';
import { createContext } from 'react';

export type AuthContextType = {
  currentWorkspaceMembers: CurrentWorkspaceMember[];
};

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType,
);
