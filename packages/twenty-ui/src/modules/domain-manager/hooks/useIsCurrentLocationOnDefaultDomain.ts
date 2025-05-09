import { isMultiWorkspaceEnabledState } from '@twenty-modules/client-config/states/isMultiWorkspaceEnabledState';
import { useRecoilValue } from 'recoil';
import { useReadDefaultDomainFromConfiguration } from '@twenty-modules/domain-manager/hooks/useReadDefaultDomainFromConfiguration';

export const useIsCurrentLocationOnDefaultDomain = () => {
  const isMultiWorkspaceEnabled = useRecoilValue(isMultiWorkspaceEnabledState);
  const { defaultDomain } = useReadDefaultDomainFromConfiguration();
  const isDefaultDomain = isMultiWorkspaceEnabled
    ? window.location.hostname === defaultDomain
    : true;

  return {
    isDefaultDomain,
  };
};
