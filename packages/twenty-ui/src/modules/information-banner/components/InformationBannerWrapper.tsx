import { InformationBannerBillingSubscriptionPaused } from '@twenty-modules/information-banner/components/billing/InformationBannerBillingSubscriptionPaused';
import { InformationBannerEndTrialPeriod } from '@twenty-modules/information-banner/components/billing/InformationBannerEndTrialPeriod';
import { InformationBannerFailPaymentInfo } from '@twenty-modules/information-banner/components/billing/InformationBannerFailPaymentInfo';
import { InformationBannerNoBillingSubscription } from '@twenty-modules/information-banner/components/billing/InformationBannerNoBillingSubscription';
import { InformationBannerReconnectAccountEmailAliases } from '@twenty-modules/information-banner/components/reconnect-account/InformationBannerReconnectAccountEmailAliases';
import { InformationBannerReconnectAccountInsufficientPermissions } from '@twenty-modules/information-banner/components/reconnect-account/InformationBannerReconnectAccountInsufficientPermissions';
import { useIsSomeMeteredProductCapReached } from '@twenty-modules/workspace/hooks/useIsSomeMeteredProductCapReached';
import { useIsWorkspaceActivationStatusEqualsTo } from '@twenty-modules/workspace/hooks/useIsWorkspaceActivationStatusEqualsTo';
import { useSubscriptionStatus } from '@twenty-modules/workspace/hooks/useSubscriptionStatus';
import styled from '@emotion/styled';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';
import { WorkspaceActivationStatus } from '@ui-collection-kit/twenty-shared/src/workspace';
import { SubscriptionStatus } from '@twenty-ui/front/generated-metadata/graphql';

const StyledInformationBannerWrapper = styled.div`
  height: 40px;
  position: relative;

  &:empty {
    height: 0;
  }
`;

export const InformationBannerWrapper = () => {
  const subscriptionStatus = useSubscriptionStatus();
  const isWorkspaceSuspended = useIsWorkspaceActivationStatusEqualsTo(
    WorkspaceActivationStatus.SUSPENDED,
  );
  const isSomeMeteredProductCapReached = useIsSomeMeteredProductCapReached();

  const displayBillingSubscriptionPausedBanner =
    isWorkspaceSuspended && subscriptionStatus === SubscriptionStatus.Paused;

  const displayBillingSubscriptionCanceledBanner =
    isWorkspaceSuspended && !isDefined(subscriptionStatus);

  const displayFailPaymentInfoBanner =
    subscriptionStatus === SubscriptionStatus.PastDue ||
    subscriptionStatus === SubscriptionStatus.Unpaid;

  const displayEndTrialPeriodBanner =
    isSomeMeteredProductCapReached &&
    subscriptionStatus === SubscriptionStatus.Trialing;

  return (
    <StyledInformationBannerWrapper>
      <InformationBannerReconnectAccountInsufficientPermissions />
      <InformationBannerReconnectAccountEmailAliases />
      {displayBillingSubscriptionPausedBanner && (
        <InformationBannerBillingSubscriptionPaused /> // TODO: remove this once paused subscriptions are deprecated
      )}
      {displayBillingSubscriptionCanceledBanner && (
        <InformationBannerNoBillingSubscription />
      )}
      {displayFailPaymentInfoBanner && <InformationBannerFailPaymentInfo />}
      {displayEndTrialPeriodBanner && <InformationBannerEndTrialPeriod />}
    </StyledInformationBannerWrapper>
  );
};
