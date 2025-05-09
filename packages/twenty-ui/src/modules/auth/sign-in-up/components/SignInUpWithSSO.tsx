import { useSSO } from '@twenty-modules/auth/sign-in-up/hooks/useSSO';
import {
  SignInUpStep,
  signInUpStepState,
} from '@twenty-modules/auth/states/signInUpStepState';
import { workspaceAuthProvidersState } from '@twenty-modules/workspace/states/workspaceAuthProvidersState';
import { useTheme } from '@emotion/react';
import { useLingui } from '@lingui/react/macro';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';
import { HorizontalSeparator, IconLock } from '@twenty-ui/display';
import { MainButton } from '@twenty-ui/input';

export const SignInUpWithSSO = () => {
  const theme = useTheme();
  const { t } = useLingui();
  const setSignInUpStep = useSetRecoilState(signInUpStepState);
  const workspaceAuthProviders = useRecoilValue(workspaceAuthProvidersState);

  const signInUpStep = useRecoilValue(signInUpStepState);

  const { redirectToSSOLoginPage } = useSSO();

  const signInWithSSO = () => {
    if (
      isDefined(workspaceAuthProviders) &&
      workspaceAuthProviders.sso.length === 1
    ) {
      return redirectToSSOLoginPage(workspaceAuthProviders.sso[0].id);
    }

    setSignInUpStep(SignInUpStep.SSOIdentityProviderSelection);
  };

  return (
    <>
      <MainButton
        Icon={() => <IconLock size={theme.icon.size.md} />}
        title={t`Single sign-on (SSO)`}
        onClick={signInWithSSO}
        variant={signInUpStep === SignInUpStep.Init ? undefined : 'secondary'}
        fullWidth
      />
      <HorizontalSeparator visible={false} />
    </>
  );
};
