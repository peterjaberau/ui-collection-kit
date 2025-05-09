import React from 'react';
import { useRecoilValue } from 'recoil';

import { AuthContext } from '@twenty-modules/auth/contexts/AuthContext';
import { currentWorkspaceMembersState } from '@twenty-modules/auth/states/currentWorkspaceMembersStates';

export const AuthProvider = ({ children }: React.PropsWithChildren) => {
  const currentWorkspaceMembers = useRecoilValue(currentWorkspaceMembersState);

  return (
    <AuthContext.Provider value={{ currentWorkspaceMembers }}>
      {children}
    </AuthContext.Provider>
  );
};
