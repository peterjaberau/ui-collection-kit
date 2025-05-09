import { domainConfigurationState } from '@twenty-modules/domain-manager/states/domainConfigurationState';
import { isMultiWorkspaceEnabledState } from '@twenty-modules/client-config/states/isMultiWorkspaceEnabledState';
import { useRecoilValue } from 'recoil';

export const useReadDefaultDomainFromConfiguration = () => {
  const domainConfiguration = useRecoilValue(domainConfigurationState);
  const isMultiWorkspaceEnabled = useRecoilValue(isMultiWorkspaceEnabledState);

  const defaultDomain = isMultiWorkspaceEnabled
    ? `${domainConfiguration.defaultSubdomain}.${domainConfiguration.frontDomain}`
    : domainConfiguration.frontDomain;

  return {
    defaultDomain,
  };
};
