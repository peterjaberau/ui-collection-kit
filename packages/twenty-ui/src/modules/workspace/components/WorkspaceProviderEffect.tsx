import { useRecoilValue } from 'recoil';

import { isMultiWorkspaceEnabledState } from '@twenty-modules/client-config/states/isMultiWorkspaceEnabledState';
import { useReadWorkspaceUrlFromCurrentLocation } from '@twenty-modules/domain-manager/hooks/useReadWorkspaceUrlFromCurrentLocation';
import { useRedirectToWorkspaceDomain } from '@twenty-modules/domain-manager/hooks/useRedirectToWorkspaceDomain';
import { lastAuthenticatedWorkspaceDomainState } from '@twenty-modules/domain-manager/states/lastAuthenticatedWorkspaceDomainState';
import { useEffect } from 'react';

import { useInitializeQueryParamState } from '@twenty-modules/app/hooks/useInitializeQueryParamState';
import { useGetPublicWorkspaceDataByDomain } from '@twenty-modules/domain-manager/hooks/useGetPublicWorkspaceDataByDomain';
import { useIsCurrentLocationOnDefaultDomain } from '@twenty-modules/domain-manager/hooks/useIsCurrentLocationOnDefaultDomain';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';
import { WorkspaceUrls } from '@twenty-ui/front/generated/graphql';
import { getWorkspaceUrl } from '@twenty-ui/front/utils/getWorkspaceUrl';

export const WorkspaceProviderEffect = () => {
  const { data: getPublicWorkspaceData } = useGetPublicWorkspaceDataByDomain();

  const lastAuthenticatedWorkspaceDomain = useRecoilValue(
    lastAuthenticatedWorkspaceDomainState,
  );

  const { redirectToWorkspaceDomain } = useRedirectToWorkspaceDomain();
  const { isDefaultDomain } = useIsCurrentLocationOnDefaultDomain();

  const { currentLocationHostname } = useReadWorkspaceUrlFromCurrentLocation();

  const isMultiWorkspaceEnabled = useRecoilValue(isMultiWorkspaceEnabledState);

  const getHostnamesFromWorkspaceUrls = (workspaceUrls: WorkspaceUrls) => {
    return {
      customUrlHostname: workspaceUrls.customUrl
        ? new URL(workspaceUrls.customUrl).hostname
        : undefined,
      subdomainUrlHostname: new URL(workspaceUrls.subdomainUrl).hostname,
    };
  };

  const { initializeQueryParamState } = useInitializeQueryParamState();

  useEffect(() => {
    const hostnames = getPublicWorkspaceData
      ? getHostnamesFromWorkspaceUrls(getPublicWorkspaceData?.workspaceUrls)
      : null;
    if (
      isMultiWorkspaceEnabled &&
      isDefined(getPublicWorkspaceData) &&
      currentLocationHostname !== hostnames?.customUrlHostname &&
      currentLocationHostname !== hostnames?.subdomainUrlHostname
    ) {
      redirectToWorkspaceDomain(
        getWorkspaceUrl(getPublicWorkspaceData.workspaceUrls),
      );
    }
  }, [
    isMultiWorkspaceEnabled,
    redirectToWorkspaceDomain,
    getPublicWorkspaceData,
    currentLocationHostname,
  ]);

  useEffect(() => {
    if (
      isMultiWorkspaceEnabled &&
      isDefaultDomain &&
      isDefined(lastAuthenticatedWorkspaceDomain) &&
      'workspaceUrl' in lastAuthenticatedWorkspaceDomain &&
      isDefined(lastAuthenticatedWorkspaceDomain?.workspaceUrl)
    ) {
      initializeQueryParamState();
      redirectToWorkspaceDomain(lastAuthenticatedWorkspaceDomain.workspaceUrl);
    }
  }, [
    isMultiWorkspaceEnabled,
    isDefaultDomain,
    lastAuthenticatedWorkspaceDomain,
    redirectToWorkspaceDomain,
    initializeQueryParamState,
  ]);

  return <></>;
};
