import { useSignInUp } from '@twenty-modules/auth/sign-in-up/hooks/useSignInUp';
import { useSignInUpForm } from '@twenty-modules/auth/sign-in-up/hooks/useSignInUpForm';
import { SignInUpStep } from '@twenty-modules/auth/states/signInUpStepState';
import { workspacePublicDataState } from '@twenty-modules/auth/states/workspacePublicDataState';
import { useRecoilValue } from 'recoil';

import { Logo } from '@twenty-modules/auth/components/Logo';
import { Title } from '@twenty-modules/auth/components/Title';
import { EmailVerificationSent } from '@twenty-modules/auth/sign-in-up/components/EmailVerificationSent';
import { FooterNote } from '@twenty-modules/auth/sign-in-up/components/FooterNote';
import { SignInUpGlobalScopeForm } from '@twenty-modules/auth/sign-in-up/components/SignInUpGlobalScopeForm';
import { SignInUpSSOIdentityProviderSelection } from '@twenty-modules/auth/sign-in-up/components/SignInUpSSOIdentityProviderSelection';
import { SignInUpWorkspaceScopeForm } from '@twenty-modules/auth/sign-in-up/components/SignInUpWorkspaceScopeForm';
import { SignInUpWorkspaceScopeFormEffect } from '@twenty-modules/auth/sign-in-up/components/SignInUpWorkspaceScopeFormEffect';
import { isMultiWorkspaceEnabledState } from '@twenty-modules/client-config/states/isMultiWorkspaceEnabledState';
import { useGetPublicWorkspaceDataByDomain } from '@twenty-modules/domain-manager/hooks/useGetPublicWorkspaceDataByDomain';
import { useIsCurrentLocationOnAWorkspace } from '@twenty-modules/domain-manager/hooks/useIsCurrentLocationOnAWorkspace';
import { useIsCurrentLocationOnDefaultDomain } from '@twenty-modules/domain-manager/hooks/useIsCurrentLocationOnDefaultDomain';
import { DEFAULT_WORKSPACE_NAME } from '@twenty-modules/ui/navigation/navigation-drawer/constants/DefaultWorkspaceName';
import { useMemo } from 'react';

import { useWorkspaceFromInviteHash } from '@twenty-modules/auth/sign-in-up/hooks/useWorkspaceFromInviteHash';
import { Modal } from '@twenty-modules/ui/layout/modal/components/Modal';
import { useLingui } from '@lingui/react/macro';
import { useSearchParams } from 'react-router-dom';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';
import { AnimatedEaseIn } from '@twenty-ui//utilities';
import { PublicWorkspaceDataOutput } from '@twenty-ui/front/generated/graphql';

const StandardContent = ({
  workspacePublicData,
  signInUpForm,
  signInUpStep,
  title,
}: {
  workspacePublicData: PublicWorkspaceDataOutput | null;
  signInUpForm: JSX.Element | null;
  signInUpStep: SignInUpStep;
  title: string;
}) => {
  return (
    <Modal.Content isVerticalCentered isHorizontalCentered>
      <AnimatedEaseIn>
        <Logo secondaryLogo={workspacePublicData?.logo} />
      </AnimatedEaseIn>
      <Title animate>{title}</Title>
      {signInUpForm}
      {signInUpStep !== SignInUpStep.Password && <FooterNote />}
    </Modal.Content>
  );
};

export const SignInUp = () => {
  const { t } = useLingui();

  const { form } = useSignInUpForm();
  const { signInUpStep } = useSignInUp(form);
  const { isDefaultDomain } = useIsCurrentLocationOnDefaultDomain();
  const { isOnAWorkspace } = useIsCurrentLocationOnAWorkspace();
  const workspacePublicData = useRecoilValue(workspacePublicDataState);
  const { loading } = useGetPublicWorkspaceDataByDomain();
  const isMultiWorkspaceEnabled = useRecoilValue(isMultiWorkspaceEnabledState);
  const { workspaceInviteHash, workspace: workspaceFromInviteHash } =
    useWorkspaceFromInviteHash();

  const [searchParams] = useSearchParams();
  const title = useMemo(() => {
    if (isDefined(workspaceInviteHash)) {
      return `Join ${workspaceFromInviteHash?.displayName ?? ''} team`;
    }
    const workspaceName = !isDefined(workspacePublicData?.displayName)
      ? DEFAULT_WORKSPACE_NAME
      : workspacePublicData?.displayName === ''
        ? t`Your Workspace`
        : workspacePublicData?.displayName;

    return t`Welcome to ${workspaceName}`;
  }, [
    workspaceFromInviteHash?.displayName,
    workspaceInviteHash,
    workspacePublicData?.displayName,
    t,
  ]);

  const signInUpForm = useMemo(() => {
    if (loading) return null;

    if (isDefaultDomain && isMultiWorkspaceEnabled) {
      return <SignInUpGlobalScopeForm />;
    }

    if (
      (!isMultiWorkspaceEnabled ||
        (isMultiWorkspaceEnabled && isOnAWorkspace)) &&
      signInUpStep === SignInUpStep.SSOIdentityProviderSelection
    ) {
      return <SignInUpSSOIdentityProviderSelection />;
    }

    if (
      isDefined(workspacePublicData) &&
      (!isMultiWorkspaceEnabled || isOnAWorkspace)
    ) {
      return (
        <>
          <SignInUpWorkspaceScopeFormEffect />
          <SignInUpWorkspaceScopeForm />
        </>
      );
    }

    return <SignInUpGlobalScopeForm />;
  }, [
    isDefaultDomain,
    isMultiWorkspaceEnabled,
    isOnAWorkspace,
    loading,
    signInUpStep,
    workspacePublicData,
  ]);

  if (signInUpStep === SignInUpStep.EmailVerification) {
    return (
      <Modal.Content isVerticalCentered isHorizontalCentered>
        <EmailVerificationSent email={searchParams.get('email')} />
      </Modal.Content>
    );
  }

  return (
    <StandardContent
      workspacePublicData={workspacePublicData}
      signInUpForm={signInUpForm}
      signInUpStep={signInUpStep}
      title={title}
    />
  );
};
