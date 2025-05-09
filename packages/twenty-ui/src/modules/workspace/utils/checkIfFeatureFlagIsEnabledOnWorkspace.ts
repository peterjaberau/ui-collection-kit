import { CurrentWorkspace } from '@twenty-modules/auth/states/currentWorkspaceState';
import { FeatureFlagKey } from '@twenty-ui/front/generated-metadata/graphql';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const checkIfFeatureFlagIsEnabledOnWorkspace = (
  featureKey: FeatureFlagKey | null | undefined,
  workspace: CurrentWorkspace | null | undefined,
) => {
  if (
    !isDefined(featureKey) ||
    !isDefined(workspace) ||
    !isDefined(workspace.featureFlags)
  ) {
    return false;
  }

  const featureFlag = workspace.featureFlags.find(
    (flag) => flag.key === featureKey,
  );

  return featureFlag?.value === true;
};
