import { currentUserState } from '@twenty-modules/auth/states/currentUserState';
import { currentWorkspaceState } from '@twenty-modules/auth/states/currentWorkspaceState';
import { canManageFeatureFlagsState } from '@twenty-modules/client-config/states/canManageFeatureFlagsState';
import { SettingsAdminTableCard } from '@twenty-modules/settings/admin-panel/components/SettingsAdminTableCard';
import { useFeatureFlagState } from '@twenty-modules/settings/admin-panel/hooks/useFeatureFlagState';
import { useImpersonationAuth } from '@twenty-modules/settings/admin-panel/hooks/useImpersonationAuth';
import { useImpersonationRedirect } from '@twenty-modules/settings/admin-panel/hooks/useImpersonationRedirect';
import { userLookupResultState } from '@twenty-modules/settings/admin-panel/states/userLookupResultState';
import { WorkspaceInfo } from '@twenty-modules/settings/admin-panel/types/WorkspaceInfo';
import { SnackBarVariant } from '@twenty-modules/ui/feedback/snack-bar-manager/components/SnackBar';
import { useSnackBar } from '@twenty-modules/ui/feedback/snack-bar-manager/hooks/useSnackBar';
import { Table } from '@twenty-modules/ui/layout/table/components/Table';
import { TableBody } from '@twenty-modules/ui/layout/table/components/TableBody';
import { TableCell } from '@twenty-modules/ui/layout/table/components/TableCell';
import { TableHeader } from '@twenty-modules/ui/layout/table/components/TableHeader';
import { TableRow } from '@twenty-modules/ui/layout/table/components/TableRow';
import { DEFAULT_WORKSPACE_LOGO } from '@twenty-modules/ui/navigation/navigation-drawer/constants/DefaultWorkspaceLogo';
import styled from '@emotion/styled';
import { useLingui } from '@lingui/react/macro';
import { isNonEmptyString } from '@sniptt/guards';
import { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { REACT_APP_SERVER_BASE_URL } from '@twenty-ui/front/config';
import {
  FeatureFlagKey,
  useImpersonateMutation,
  useUpdateWorkspaceFeatureFlagMutation,
} from '@twenty-ui/front/generated/graphql';
import { getImageAbsoluteURI, isDefined } from '@ui-collection-kit/twenty-shared/src/utils';
import { AvatarChip } from '@twenty-ui/components';
import { Button, Toggle } from '@twenty-ui/input';
import {
  H2Title,
  IconEyeShare,
  IconHome,
  IconId,
  IconUser,
} from '@twenty-ui/display';
import { Section } from '@twenty-ui/layout';

type SettingsAdminWorkspaceContentProps = {
  activeWorkspace: WorkspaceInfo | undefined;
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};
  margin-top: ${({ theme }) => theme.spacing(6)};
`;

const StyledButtonContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing(3)};
`;

export const SettingsAdminWorkspaceContent = ({
  activeWorkspace,
}: SettingsAdminWorkspaceContentProps) => {
  const canManageFeatureFlags = useRecoilValue(canManageFeatureFlagsState);
  const { enqueueSnackBar } = useSnackBar();
  const [currentUser] = useRecoilState(currentUserState);
  const currentWorkspace = useRecoilValue(currentWorkspaceState);

  const [updateFeatureFlag] = useUpdateWorkspaceFeatureFlagMutation();
  const [isImpersonateLoading, setIsImpersonationLoading] = useState(false);
  const { executeImpersonationAuth } = useImpersonationAuth();
  const { executeImpersonationRedirect } = useImpersonationRedirect();
  const [impersonate] = useImpersonateMutation();

  const { updateFeatureFlagState } = useFeatureFlagState();
  const userLookupResult = useRecoilValue(userLookupResultState);

  const { t } = useLingui();

  const handleImpersonate = async (workspaceId: string) => {
    if (!userLookupResult?.user.id) {
      enqueueSnackBar(t`Please search for a user first`, {
        variant: SnackBarVariant.Error,
      });
      return;
    }

    setIsImpersonationLoading(true);

    await impersonate({
      variables: { userId: userLookupResult.user.id, workspaceId },
      onCompleted: async (data) => {
        const { loginToken, workspace } = data.impersonate;
        const isCurrentWorkspace = workspace.id === currentWorkspace?.id;
        if (isCurrentWorkspace) {
          await executeImpersonationAuth(loginToken.token);
          return;
        }

        return executeImpersonationRedirect(
          workspace.workspaceUrls,
          loginToken.token,
        );
      },
      onError: (error) => {
        enqueueSnackBar(`Failed to impersonate user. ${error.message}`, {
          variant: SnackBarVariant.Error,
        });
      },
    }).finally(() => {
      setIsImpersonationLoading(false);
    });
  };

  const handleFeatureFlagUpdate = async (
    workspaceId: string,
    featureFlag: FeatureFlagKey,
    value: boolean,
  ) => {
    const previousValue = userLookupResult?.workspaces
      .find((workspace) => workspace.id === workspaceId)
      ?.featureFlags.find((flag) => flag.key === featureFlag)?.value;

    updateFeatureFlagState(workspaceId, featureFlag, value);
    await updateFeatureFlag({
      variables: {
        workspaceId,
        featureFlag,
        value,
      },

      onError: (error) => {
        if (isDefined(previousValue)) {
          updateFeatureFlagState(workspaceId, featureFlag, previousValue);
        }
        enqueueSnackBar(`Failed to update feature flag. ${error.message}`, {
          variant: SnackBarVariant.Error,
        });
      },
    });
  };

  const workspaceInfoItems = [
    {
      Icon: IconHome,
      label: t`Name`,
      value: (
        <AvatarChip
          name={activeWorkspace?.name ?? ''}
          avatarUrl={
            getImageAbsoluteURI({
              imageUrl: isNonEmptyString(activeWorkspace?.logo)
                ? activeWorkspace?.logo
                : DEFAULT_WORKSPACE_LOGO,
              baseUrl: REACT_APP_SERVER_BASE_URL,
            }) ?? ''
          }
        />
      ),
    },
    {
      Icon: IconId,
      label: t`ID`,
      value: activeWorkspace?.id,
    },
    {
      Icon: IconUser,
      label: t`Members`,
      value: activeWorkspace?.totalUsers,
    },
  ];

  if (!activeWorkspace) return null;

  return (
    <StyledContainer>
      <Section>
        <H2Title
          title={t`Workspace Info`}
          description={t`About this workspace`}
        />
        <SettingsAdminTableCard
          items={workspaceInfoItems}
          gridAutoColumns="1fr 4fr"
        />
        <StyledButtonContainer>
          {currentUser?.canImpersonate && (
            <Button
              Icon={IconEyeShare}
              variant="primary"
              accent="default"
              title={t`Impersonate`}
              onClick={() => handleImpersonate(activeWorkspace.id)}
              disabled={
                isImpersonateLoading ||
                activeWorkspace.allowImpersonation === false
              }
              dataTestId="impersonate-button"
            />
          )}
        </StyledButtonContainer>
      </Section>
      {canManageFeatureFlags && (
        <Table>
          <TableBody>
            <TableRow
              gridAutoColumns="1fr 100px"
              mobileGridAutoColumns="1fr 80px"
            >
              <TableHeader>{t`Feature Flag`}</TableHeader>
              <TableHeader align="right">{t`Status`}</TableHeader>
            </TableRow>

            {activeWorkspace.featureFlags.map((flag) => (
              <TableRow
                gridAutoColumns="1fr 100px"
                mobileGridAutoColumns="1fr 80px"
                key={flag.key}
              >
                <TableCell>{flag.key}</TableCell>
                <TableCell align="right">
                  <Toggle
                    value={flag.value}
                    onChange={(newValue) =>
                      handleFeatureFlagUpdate(
                        activeWorkspace.id,
                        flag.key,
                        newValue,
                      )
                    }
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </StyledContainer>
  );
};
