import { useCallback, useState } from 'react';
import { SubmitHandler, UseFormReturn } from 'react-hook-form';
import { useParams, useSearchParams } from 'react-router-dom';

import { Form } from '@twenty-modules/auth/sign-in-up/hooks/useSignInUpForm';
import { signInUpModeState } from '@twenty-modules/auth/states/signInUpModeState';
import {
  SignInUpStep,
  signInUpStepState,
} from '@twenty-modules/auth/states/signInUpStepState';
import { SignInUpMode } from '@twenty-modules/auth/types/signInUpMode';
import { useReadCaptchaToken } from '@twenty-modules/captcha/hooks/useReadCaptchaToken';
import { useRequestFreshCaptchaToken } from '@twenty-modules/captcha/hooks/useRequestFreshCaptchaToken';
import { AppPath } from '@twenty-modules/types/AppPath';
import { SnackBarVariant } from '@twenty-modules/ui/feedback/snack-bar-manager/components/SnackBar';
import { useSnackBar } from '@twenty-modules/ui/feedback/snack-bar-manager/hooks/useSnackBar';
import { useRecoilState } from 'recoil';
import { useIsMatchingLocation } from '@twenty-ui/front/hooks/useIsMatchingLocation';
import { useAuth } from '../../hooks/useAuth';

export const useSignInUp = (form: UseFormReturn<Form>) => {
  const { enqueueSnackBar } = useSnackBar();

  const [signInUpStep, setSignInUpStep] = useRecoilState(signInUpStepState);
  const [signInUpMode, setSignInUpMode] = useRecoilState(signInUpModeState);

  const { isMatchingLocation } = useIsMatchingLocation();

  const workspaceInviteHash = useParams().workspaceInviteHash;
  const [searchParams] = useSearchParams();
  const workspacePersonalInviteToken =
    searchParams.get('inviteToken') ?? undefined;

  const [isInviteMode] = useState(() => isMatchingLocation(AppPath.Invite));

  const {
    signInWithCredentials,
    signUpWithCredentials,
    checkUserExists: { checkUserExistsQuery },
  } = useAuth();

  const { requestFreshCaptchaToken } = useRequestFreshCaptchaToken();
  const { readCaptchaToken } = useReadCaptchaToken();

  const continueWithEmail = useCallback(() => {
    requestFreshCaptchaToken();
    setSignInUpStep(SignInUpStep.Email);
  }, [requestFreshCaptchaToken, setSignInUpStep]);

  const continueWithCredentials = useCallback(async () => {
    const token = await readCaptchaToken();
    if (!form.getValues('email')) {
      return;
    }
    checkUserExistsQuery({
      variables: {
        email: form.getValues('email').toLowerCase().trim(),
        captchaToken: token,
      },
      onError: (error) => {
        enqueueSnackBar(`${error.message}`, {
          variant: SnackBarVariant.Error,
        });
      },
      onCompleted: (data) => {
        requestFreshCaptchaToken();
        if (data?.checkUserExists.exists) {
          setSignInUpMode(SignInUpMode.SignIn);
        } else {
          setSignInUpMode(SignInUpMode.SignUp);
        }
        setSignInUpStep(SignInUpStep.Password);
      },
    });
  }, [
    readCaptchaToken,
    form,
    checkUserExistsQuery,
    enqueueSnackBar,
    requestFreshCaptchaToken,
    setSignInUpStep,
    setSignInUpMode,
  ]);

  const submitCredentials: SubmitHandler<Form> = useCallback(
    async (data) => {
      const token = await readCaptchaToken();
      try {
        if (!data.email || !data.password) {
          throw new Error('Email and password are required');
        }

        if (signInUpMode === SignInUpMode.SignIn && !isInviteMode) {
          await signInWithCredentials(
            data.email.toLowerCase().trim(),
            data.password,
            token,
          );
        } else {
          await signUpWithCredentials(
            data.email.toLowerCase().trim(),
            data.password,
            workspaceInviteHash,
            workspacePersonalInviteToken,
            token,
          );
        }
      } catch (err: any) {
        enqueueSnackBar(err?.message, {
          variant: SnackBarVariant.Error,
        });
        requestFreshCaptchaToken();
      }
    },
    [
      readCaptchaToken,
      signInUpMode,
      isInviteMode,
      signInWithCredentials,
      signUpWithCredentials,
      workspaceInviteHash,
      workspacePersonalInviteToken,
      enqueueSnackBar,
      requestFreshCaptchaToken,
    ],
  );

  return {
    isInviteMode,
    signInUpStep,
    signInUpMode,
    continueWithCredentials,
    continueWithEmail,
    submitCredentials,
  };
};
