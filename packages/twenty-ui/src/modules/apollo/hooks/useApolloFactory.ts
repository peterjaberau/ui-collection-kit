import { InMemoryCache, NormalizedCacheObject } from '@apollo/client';
import { useMemo, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

import { currentUserState } from '@twenty-modules/auth/states/currentUserState';
import { currentWorkspaceMemberState } from '@twenty-modules/auth/states/currentWorkspaceMemberState';
import { currentWorkspaceState } from '@twenty-modules/auth/states/currentWorkspaceState';
import { previousUrlState } from '@twenty-modules/auth/states/previousUrlState';
import { tokenPairState } from '@twenty-modules/auth/states/tokenPairState';
import { workspacesState } from '@twenty-modules/auth/states/workspaces';
import { isDebugModeState } from '@twenty-modules/client-config/states/isDebugModeState';
import { REACT_APP_SERVER_BASE_URL } from '@twenty-ui/front/config';
import { useIsMatchingLocation } from '@twenty-ui/front/hooks/useIsMatchingLocation';
import { useUpdateEffect } from '@twenty-ui/front/hooks/useUpdateEffect';

import { currentUserWorkspaceState } from '@twenty-modules/auth/states/currentUserWorkspaceState';
import { AppPath } from '@twenty-modules/types/AppPath';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';
import { ApolloFactory, Options } from '../services/apollo.factory';

export const useApolloFactory = (options: Partial<Options<any>> = {}) => {
  // eslint-disable-next-line @nx/workspace-no-state-useref
  const apolloRef = useRef<ApolloFactory<NormalizedCacheObject> | null>(null);
  const [isDebugMode] = useRecoilState(isDebugModeState);

  const navigate = useNavigate();
  const { isMatchingLocation } = useIsMatchingLocation();
  const setTokenPair = useSetRecoilState(tokenPairState);
  const [currentWorkspace, setCurrentWorkspace] = useRecoilState(
    currentWorkspaceState,
  );
  const currentWorkspaceMember = useRecoilValue(currentWorkspaceMemberState);
  const setCurrentUser = useSetRecoilState(currentUserState);
  const setCurrentWorkspaceMember = useSetRecoilState(
    currentWorkspaceMemberState,
  );
  const setCurrentUserWorkspace = useSetRecoilState(currentUserWorkspaceState);

  const setWorkspaces = useSetRecoilState(workspacesState);
  const [, setPreviousUrl] = useRecoilState(previousUrlState);
  const location = useLocation();

  const apolloClient = useMemo(() => {
    apolloRef.current = new ApolloFactory({
      uri: `${REACT_APP_SERVER_BASE_URL}/graphql`,
      cache: new InMemoryCache({
        typePolicies: {
          RemoteTable: {
            keyFields: ['name'],
          },
        },
      }),
      headers: {
        ...(currentWorkspace?.metadataVersion && {
          'X-Schema-Version': `${currentWorkspace.metadataVersion}`,
        }),
      },
      defaultOptions: {
        watchQuery: {
          fetchPolicy: 'cache-and-network',
        },
      },
      connectToDevTools: isDebugMode,
      currentWorkspaceMember: currentWorkspaceMember,
      onTokenPairChange: (tokenPair) => {
        setTokenPair(tokenPair);
      },
      onUnauthenticatedError: () => {
        setTokenPair(null);
        setCurrentUser(null);
        setCurrentWorkspaceMember(null);
        setCurrentWorkspace(null);
        setCurrentUserWorkspace(null);
        setWorkspaces([]);
        if (
          !isMatchingLocation(AppPath.Verify) &&
          !isMatchingLocation(AppPath.SignInUp) &&
          !isMatchingLocation(AppPath.Invite) &&
          !isMatchingLocation(AppPath.ResetPassword)
        ) {
          setPreviousUrl(`${location.pathname}${location.search}`);
          navigate(AppPath.SignInUp);
        }
      },
      extraLinks: [],
      isDebugMode,
      // Override options
      ...options,
    });

    return apolloRef.current.getClient();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    setTokenPair,
    setCurrentUser,
    setCurrentWorkspaceMember,
    setCurrentWorkspace,
    setWorkspaces,
    isDebugMode,
    currentWorkspace?.metadataVersion,
    setPreviousUrl,
  ]);

  useUpdateEffect(() => {
    if (isDefined(apolloRef.current)) {
      apolloRef.current.updateWorkspaceMember(currentWorkspaceMember);
    }
  }, [currentWorkspaceMember]);

  return apolloClient;
};
