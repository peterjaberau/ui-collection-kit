import { useSignInWithGoogle } from '@twenty-modules/auth/sign-in-up/hooks/useSignInWithGoogle';
import {
  SignInUpStep,
  signInUpStepState,
} from '@twenty-modules/auth/states/signInUpStepState';
import { useTheme } from '@emotion/react';
import { useLingui } from '@lingui/react/macro';
import { memo } from 'react';
import { useRecoilValue } from 'recoil';
import { HorizontalSeparator, IconGoogle } from '@twenty-ui/display';
import { MainButton } from '@twenty-ui/input';

const GoogleIcon = memo(() => {
  const theme = useTheme();
  return <IconGoogle size={theme.icon.size.md} />;
});

export const SignInUpWithGoogle = () => {
  const { t } = useLingui();
  const signInUpStep = useRecoilValue(signInUpStepState);
  const { signInWithGoogle } = useSignInWithGoogle();

  return (
    <>
      <MainButton
        Icon={GoogleIcon}
        title={t`Continue with Google`}
        onClick={signInWithGoogle}
        variant={signInUpStep === SignInUpStep.Init ? undefined : 'secondary'}
        fullWidth
      />
      <HorizontalSeparator visible={false} />
    </>
  );
};
