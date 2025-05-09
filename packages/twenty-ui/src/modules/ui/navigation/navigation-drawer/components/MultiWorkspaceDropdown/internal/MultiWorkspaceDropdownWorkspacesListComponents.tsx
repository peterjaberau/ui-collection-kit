import { currentWorkspaceState } from '@twenty-modules/auth/states/currentWorkspaceState';
import { Workspaces, workspacesState } from '@twenty-modules/auth/states/workspaces';
import { useBuildWorkspaceUrl } from '@twenty-modules/domain-manager/hooks/useBuildWorkspaceUrl';
import { useRedirectToWorkspaceDomain } from '@twenty-modules/domain-manager/hooks/useRedirectToWorkspaceDomain';
import { DropdownMenuHeader } from '@twenty-modules/ui/layout/dropdown/components/DropdownMenuHeader/DropdownMenuHeader';
import { DropdownMenuHeaderLeftComponent } from '@twenty-modules/ui/layout/dropdown/components/DropdownMenuHeader/internal/DropdownMenuHeaderLeftComponent';
import { DropdownMenuItemsContainer } from '@twenty-modules/ui/layout/dropdown/components/DropdownMenuItemsContainer';
import { DropdownMenuSearchInput } from '@twenty-modules/ui/layout/dropdown/components/DropdownMenuSearchInput';
import { DropdownMenuSeparator } from '@twenty-modules/ui/layout/dropdown/components/DropdownMenuSeparator';
import { DEFAULT_WORKSPACE_LOGO } from '@twenty-modules/ui/navigation/navigation-drawer/constants/DefaultWorkspaceLogo';
import { multiWorkspaceDropdownState } from '@twenty-modules/ui/navigation/navigation-drawer/states/multiWorkspaceDropdownState';
import { useLingui } from '@lingui/react/macro';
import { useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { Avatar, IconChevronLeft } from '@twenty-ui/display';
import { MenuItemSelectAvatar, UndecoratedLink } from '@twenty-ui/navigation';
import { getWorkspaceUrl } from '@twenty-ui/front/utils/getWorkspaceUrl';

export const MultiWorkspaceDropdownWorkspacesListComponents = () => {
  const currentWorkspace = useRecoilValue(currentWorkspaceState);
  const workspaces = useRecoilValue(workspacesState);
  const { redirectToWorkspaceDomain } = useRedirectToWorkspaceDomain();
  const { buildWorkspaceUrl } = useBuildWorkspaceUrl();
  const { t } = useLingui();

  const handleChange = async (workspace: Workspaces[0]) => {
    await redirectToWorkspaceDomain(getWorkspaceUrl(workspace.workspaceUrls));
  };
  const setMultiWorkspaceDropdownState = useSetRecoilState(
    multiWorkspaceDropdownState,
  );
  const [searchValue, setSearchValue] = useState('');

  return (
    <DropdownMenuItemsContainer>
      <DropdownMenuHeader
        StartComponent={
          <DropdownMenuHeaderLeftComponent
            onClick={() => setMultiWorkspaceDropdownState('default')}
            Icon={IconChevronLeft}
          />
        }
      >
        {t`Other workspaces`}
      </DropdownMenuHeader>
      <DropdownMenuSearchInput
        placeholder={t`Search`}
        autoFocus
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
      />
      <DropdownMenuSeparator />
      {workspaces
        .filter(
          (workspace) =>
            workspace.id !== currentWorkspace?.id &&
            workspace.displayName
              ?.toLowerCase()
              .includes(searchValue.toLowerCase()),
        )
        .map((workspace) => (
          <UndecoratedLink
            key={workspace.id}
            to={buildWorkspaceUrl(getWorkspaceUrl(workspace.workspaceUrls))}
            onClick={(event) => {
              event?.preventDefault();
              handleChange(workspace);
            }}
          >
            <MenuItemSelectAvatar
              text={workspace.displayName ?? '(No name)'}
              avatar={
                <Avatar
                  placeholder={workspace.displayName || ''}
                  avatarUrl={workspace.logo ?? DEFAULT_WORKSPACE_LOGO}
                />
              }
              selected={currentWorkspace?.id === workspace.id}
            />
          </UndecoratedLink>
        ))}
    </DropdownMenuItemsContainer>
  );
};
