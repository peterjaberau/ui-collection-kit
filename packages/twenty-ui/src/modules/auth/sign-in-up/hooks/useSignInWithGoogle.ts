import { useParams, useSearchParams } from 'react-router-dom';

import { useAuth } from '@twenty-modules/auth/hooks/useAuth';
import { BillingCheckoutSession } from '@twenty-modules/auth/types/billingCheckoutSession.type';

export const useSignInWithGoogle = () => {
  const workspaceInviteHash = useParams().workspaceInviteHash;
  const [searchParams] = useSearchParams();
  const workspacePersonalInviteToken =
    searchParams.get('inviteToken') ?? undefined;
  const billingCheckoutSession = {
    plan: 'PRO',
    interval: 'Month',
    requirePaymentMethod: true,
  } as BillingCheckoutSession;

  const { signInWithGoogle } = useAuth();
  return {
    signInWithGoogle: () =>
      signInWithGoogle({
        workspaceInviteHash,
        workspacePersonalInviteToken,
        billingCheckoutSession,
      }),
  };
};
