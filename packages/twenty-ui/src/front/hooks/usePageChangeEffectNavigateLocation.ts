import { useIsLogged } from '@twenty-modules/auth/hooks/useIsLogged';
import { useDefaultHomePagePath } from '@twenty-modules/navigation/hooks/useDefaultHomePagePath';
import { objectMetadataItemsState } from '@twenty-modules/object-metadata/states/objectMetadataItemsState';
import { useOnboardingStatus } from '@twenty-modules/onboarding/hooks/useOnboardingStatus';
import { AppPath } from '@twenty-modules/types/AppPath';
import { SettingsPath } from '@twenty-modules/types/SettingsPath';
import { useIsWorkspaceActivationStatusEqualsTo } from '@twenty-modules/workspace/hooks/useIsWorkspaceActivationStatusEqualsTo';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';
import { WorkspaceActivationStatus } from '@ui-collection-kit/twenty-shared/src/workspace';
import { OnboardingStatus } from '@twenty-ui/front/generated/graphql';
import { useIsMatchingLocation } from '@twenty-ui/front/hooks/useIsMatchingLocation';

export const usePageChangeEffectNavigateLocation = () => {
  const { isMatchingLocation } = useIsMatchingLocation();
  const isLoggedIn = useIsLogged();
  const onboardingStatus = useOnboardingStatus();
  const isWorkspaceSuspended = useIsWorkspaceActivationStatusEqualsTo(
    WorkspaceActivationStatus.SUSPENDED,
  );
  const { defaultHomePagePath } = useDefaultHomePagePath();

  const someMatchingLocationOf = (appPaths: AppPath[]): boolean =>
    appPaths.some((appPath) => isMatchingLocation(appPath));
  const onGoingUserCreationPaths = [
    AppPath.Invite,
    AppPath.SignInUp,
    AppPath.VerifyEmail,
    AppPath.Verify,
  ];
  const onboardingPaths = [
    AppPath.CreateWorkspace,
    AppPath.CreateProfile,
    AppPath.SyncEmails,
    AppPath.InviteTeam,
    AppPath.PlanRequired,
    AppPath.PlanRequiredSuccess,
  ];

  const objectNamePlural = useParams().objectNamePlural ?? '';
  const objectMetadataItems = useRecoilValue(objectMetadataItemsState);
  const objectMetadataItem = objectMetadataItems.find(
    (objectMetadataItem) => objectMetadataItem.namePlural === objectNamePlural,
  );

  if (
    !isLoggedIn &&
    !someMatchingLocationOf([
      ...onGoingUserCreationPaths,
      AppPath.ResetPassword,
    ])
  ) {
    return AppPath.SignInUp;
  }

  if (
    onboardingStatus === OnboardingStatus.PLAN_REQUIRED &&
    !someMatchingLocationOf([AppPath.PlanRequired, AppPath.PlanRequiredSuccess])
  ) {
    return AppPath.PlanRequired;
  }

  if (isWorkspaceSuspended && !isMatchingLocation(AppPath.SettingsCatchAll)) {
    return `${AppPath.SettingsCatchAll.replace('/*', '')}/${
      SettingsPath.Billing
    }`;
  }

  if (
    onboardingStatus === OnboardingStatus.WORKSPACE_ACTIVATION &&
    !someMatchingLocationOf([
      AppPath.CreateWorkspace,
      AppPath.PlanRequiredSuccess,
    ])
  ) {
    return AppPath.CreateWorkspace;
  }

  if (
    onboardingStatus === OnboardingStatus.PROFILE_CREATION &&
    !isMatchingLocation(AppPath.CreateProfile)
  ) {
    return AppPath.CreateProfile;
  }

  if (
    onboardingStatus === OnboardingStatus.SYNC_EMAIL &&
    !isMatchingLocation(AppPath.SyncEmails)
  ) {
    return AppPath.SyncEmails;
  }

  if (
    onboardingStatus === OnboardingStatus.INVITE_TEAM &&
    !isMatchingLocation(AppPath.InviteTeam)
  ) {
    return AppPath.InviteTeam;
  }

  if (
    onboardingStatus === OnboardingStatus.COMPLETED &&
    someMatchingLocationOf([...onboardingPaths, ...onGoingUserCreationPaths]) &&
    !isMatchingLocation(AppPath.ResetPassword) &&
    isLoggedIn
  ) {
    return defaultHomePagePath;
  }

  if (isMatchingLocation(AppPath.Index) && isLoggedIn) {
    return defaultHomePagePath;
  }

  if (
    isMatchingLocation(AppPath.RecordIndexPage) &&
    !isDefined(objectMetadataItem)
  ) {
    return AppPath.NotFound;
  }

  return;
};
