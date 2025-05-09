import { useRedirectToWorkspaceDomain } from '@twenty-modules/domain-manager/hooks/useRedirectToWorkspaceDomain';
import { AppPath } from '@twenty-modules/types/AppPath';
import { WorkspaceUrls } from '@twenty-ui/front/generated/graphql';
import { getWorkspaceUrl } from '@twenty-ui/front/utils/getWorkspaceUrl';

export const useImpersonationRedirect = () => {
  const { redirectToWorkspaceDomain } = useRedirectToWorkspaceDomain();

  const executeImpersonationRedirect = async (
    workspaceUrls: WorkspaceUrls,
    loginToken: string,
  ) => {
    return await redirectToWorkspaceDomain(
      getWorkspaceUrl(workspaceUrls),
      AppPath.Verify,
      { loginToken },
    );
  };

  return { executeImpersonationRedirect };
};
