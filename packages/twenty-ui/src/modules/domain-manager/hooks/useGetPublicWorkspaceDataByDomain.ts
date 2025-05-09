import { workspacePublicDataState } from '@twenty-modules/auth/states/workspacePublicDataState';
import { isMultiWorkspaceEnabledState } from '@twenty-modules/client-config/states/isMultiWorkspaceEnabledState';
import { useIsCurrentLocationOnDefaultDomain } from '@twenty-modules/domain-manager/hooks/useIsCurrentLocationOnDefaultDomain';
import { useRedirectToDefaultDomain } from '@twenty-modules/domain-manager/hooks/useRedirectToDefaultDomain';
import { workspaceAuthProvidersState } from '@twenty-modules/workspace/states/workspaceAuthProvidersState';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useGetPublicWorkspaceDataByDomainQuery } from '@twenty-ui/front/generated/graphql';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const useGetPublicWorkspaceDataByDomain = () => {
  const { isDefaultDomain } = useIsCurrentLocationOnDefaultDomain();
  const isMultiWorkspaceEnabled = useRecoilValue(isMultiWorkspaceEnabledState);
  const setWorkspaceAuthProviders = useSetRecoilState(
    workspaceAuthProvidersState,
  );
  const workspacePublicData = useRecoilValue(workspacePublicDataState);
  const { redirectToDefaultDomain } = useRedirectToDefaultDomain();
  const setWorkspacePublicDataState = useSetRecoilState(
    workspacePublicDataState,
  );

  const { loading, data, error } = useGetPublicWorkspaceDataByDomainQuery({
    skip:
      (isMultiWorkspaceEnabled && isDefaultDomain) ||
      isDefined(workspacePublicData),
    onCompleted: (data) => {
      setWorkspaceAuthProviders(
        data.getPublicWorkspaceDataByDomain.authProviders,
      );
      setWorkspacePublicDataState(data.getPublicWorkspaceDataByDomain);
    },
    onError: (error) => {
      // eslint-disable-next-line no-console
      console.error(error);
      redirectToDefaultDomain();
    },
  });

  return {
    loading,
    data: data?.getPublicWorkspaceDataByDomain,
    error,
  };
};
