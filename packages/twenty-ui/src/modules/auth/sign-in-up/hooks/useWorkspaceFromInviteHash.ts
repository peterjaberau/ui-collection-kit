import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { currentWorkspaceState } from '@twenty-modules/auth/states/currentWorkspaceState';

import { SnackBarVariant } from '@twenty-modules/ui/feedback/snack-bar-manager/components/SnackBar';
import { useSnackBar } from '@twenty-modules/ui/feedback/snack-bar-manager/hooks/useSnackBar';

import { AppPath } from '@twenty-modules/types/AppPath';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';
import { useGetWorkspaceFromInviteHashQuery } from '@twenty-ui/front/generated/graphql';
import { useNavigateApp } from '@twenty-ui/front/hooks/useNavigateApp';

export const useWorkspaceFromInviteHash = () => {
  const { enqueueSnackBar } = useSnackBar();
  const navigate = useNavigateApp();
  const workspaceInviteHash = useParams().workspaceInviteHash;
  const currentWorkspace = useRecoilValue(currentWorkspaceState);
  const [initiallyLoggedIn] = useState(isDefined(currentWorkspace));

  const { data: workspaceFromInviteHash, loading } =
    useGetWorkspaceFromInviteHashQuery({
      skip: !workspaceInviteHash,
      variables: { inviteHash: workspaceInviteHash || '' },
      onError: (error) => {
        enqueueSnackBar(error.message, {
          variant: SnackBarVariant.Error,
        });
        navigate(AppPath.Index);
      },
      onCompleted: (data) => {
        if (
          isDefined(currentWorkspace) &&
          data?.findWorkspaceFromInviteHash &&
          currentWorkspace.id === data.findWorkspaceFromInviteHash.id
        ) {
          initiallyLoggedIn &&
            enqueueSnackBar(
              `You already belong to ${data?.findWorkspaceFromInviteHash?.displayName} workspace`,
              {
                variant: SnackBarVariant.Info,
              },
            );
          navigate(AppPath.Index);
        }
      },
    });
  return {
    workspace: workspaceFromInviteHash?.findWorkspaceFromInviteHash,
    workspaceInviteHash,
    loading,
  };
};
