import { useReadDefaultDomainFromConfiguration } from '@twenty-modules/domain-manager/hooks/useReadDefaultDomainFromConfiguration';
import { useRedirect } from '@twenty-modules/domain-manager/hooks/useRedirect';
import { useLastAuthenticatedWorkspaceDomain } from '@twenty-modules/domain-manager/hooks/useLastAuthenticatedWorkspaceDomain';

export const useRedirectToDefaultDomain = () => {
  const { defaultDomain } = useReadDefaultDomainFromConfiguration();
  const { setLastAuthenticateWorkspaceDomain } =
    useLastAuthenticatedWorkspaceDomain();

  const { redirect } = useRedirect();
  const redirectToDefaultDomain = () => {
    const url = new URL(window.location.href);
    if (url.hostname !== defaultDomain) {
      setLastAuthenticateWorkspaceDomain(null);
      url.hostname = defaultDomain;
      redirect(url.toString());
    }
  };

  return {
    redirectToDefaultDomain,
  };
};
