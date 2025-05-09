import { isMultiWorkspaceEnabledState } from '@twenty-modules/client-config/states/isMultiWorkspaceEnabledState';
import { useBuildSearchParamsFromUrlSyncedStates } from '@twenty-modules/domain-manager/hooks/useBuildSearchParamsFromUrlSyncedStates';
import { useBuildWorkspaceUrl } from '@twenty-modules/domain-manager/hooks/useBuildWorkspaceUrl';
import { useRedirect } from '@twenty-modules/domain-manager/hooks/useRedirect';
import { useRecoilValue } from 'recoil';

export const useRedirectToWorkspaceDomain = () => {
  const isMultiWorkspaceEnabled = useRecoilValue(isMultiWorkspaceEnabledState);
  const { buildWorkspaceUrl } = useBuildWorkspaceUrl();
  const { redirect } = useRedirect();

  const { buildSearchParamsFromUrlSyncedStates } =
    useBuildSearchParamsFromUrlSyncedStates();

  const redirectToWorkspaceDomain = async (
    baseUrl: string,
    pathname?: string,
    searchParams?: Record<string, string | boolean>,
    target?: string,
  ) => {
    if (!isMultiWorkspaceEnabled) return;
    redirect(
      buildWorkspaceUrl(baseUrl, pathname, {
        ...searchParams,
        ...(await buildSearchParamsFromUrlSyncedStates()),
      }),
      target,
    );
  };

  return {
    redirectToWorkspaceDomain,
  };
};
