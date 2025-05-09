import { SettingsPath } from '@twenty-modules/types/SettingsPath';
import { SnackBarVariant } from '@twenty-modules/ui/feedback/snack-bar-manager/components/SnackBar';
import { useSnackBar } from '@twenty-modules/ui/feedback/snack-bar-manager/hooks/useSnackBar';
import { useState } from 'react';
import {
  BillingPlanKey,
  SubscriptionInterval,
} from '@twenty-ui/front/generated-metadata/graphql';
import { useCheckoutSessionMutation } from '@twenty-ui/front/generated/graphql';
import { getSettingsPath } from '@twenty-ui/front/utils/navigation/getSettingsPath';
import { useRedirect } from '@twenty-modules/domain-manager/hooks/useRedirect';

export const useHandleCheckoutSession = ({
  recurringInterval,
  plan,
  requirePaymentMethod,
}: {
  recurringInterval: SubscriptionInterval;
  plan: BillingPlanKey;
  requirePaymentMethod: boolean;
}) => {
  const { redirect } = useRedirect();

  const { enqueueSnackBar } = useSnackBar();

  const [checkoutSession] = useCheckoutSessionMutation();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCheckoutSession = async () => {
    setIsSubmitting(true);
    const { data } = await checkoutSession({
      variables: {
        recurringInterval,
        successUrlPath: getSettingsPath(SettingsPath.Billing),
        plan,
        requirePaymentMethod,
      },
    });
    setIsSubmitting(false);
    if (!data?.checkoutSession.url) {
      enqueueSnackBar(
        'Checkout session error. Please retry or contact Twenty team',
        {
          variant: SnackBarVariant.Error,
        },
      );
      return;
    }
    redirect(data.checkoutSession.url);
  };
  return { isSubmitting, handleCheckoutSession };
};
