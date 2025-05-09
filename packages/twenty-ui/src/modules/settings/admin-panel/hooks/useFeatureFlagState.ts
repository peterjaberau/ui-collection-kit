import { userLookupResultState } from '@twenty-modules/settings/admin-panel/states/userLookupResultState';
import { useRecoilState } from 'recoil';
import { FeatureFlagKey } from '@twenty-ui/front/generated/graphql';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const useFeatureFlagState = () => {
  const [userLookupResult, setUserLookupResult] = useRecoilState(
    userLookupResultState,
  );

  const updateFeatureFlagState = (
    workspaceId: string,
    featureFlag: FeatureFlagKey,
    value: boolean,
  ) => {
    if (!isDefined(userLookupResult)) return;

    setUserLookupResult({
      ...userLookupResult,
      workspaces: userLookupResult.workspaces.map((workspace) =>
        workspace.id === workspaceId
          ? {
              ...workspace,
              featureFlags: workspace.featureFlags.map((flag) =>
                flag.key === featureFlag ? { ...flag, value } : flag,
              ),
            }
          : workspace,
      ),
    });
  };

  return {
    updateFeatureFlagState,
  };
};
