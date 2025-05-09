import { isMultiWorkspaceEnabledState } from '@twenty-modules/client-config/states/isMultiWorkspaceEnabledState';
import { useReadDefaultDomainFromConfiguration } from '@twenty-modules/domain-manager/hooks/useReadDefaultDomainFromConfiguration';
import { domainConfigurationState } from '@twenty-modules/domain-manager/states/domainConfigurationState';
import { useRecoilValue } from 'recoil';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const useIsCurrentLocationOnAWorkspace = () => {
  const { defaultDomain } = useReadDefaultDomainFromConfiguration();

  const isMultiWorkspaceEnabled = useRecoilValue(isMultiWorkspaceEnabledState);
  const domainConfiguration = useRecoilValue(domainConfigurationState);

  if (
    isMultiWorkspaceEnabled &&
    (!isDefined(domainConfiguration.frontDomain) ||
      !isDefined(domainConfiguration.defaultSubdomain))
  ) {
    throw new Error('frontDomain and defaultSubdomain are required');
  }

  const isOnAWorkspace =
    isMultiWorkspaceEnabled && window.location.hostname !== defaultDomain;

  return {
    isOnAWorkspace,
  };
};
