import { isGoogleCalendarEnabledState } from '@twenty-modules/client-config/states/isGoogleCalendarEnabledState';
import { isGoogleMessagingEnabledState } from '@twenty-modules/client-config/states/isGoogleMessagingEnabledState';
import { isMicrosoftCalendarEnabledState } from '@twenty-modules/client-config/states/isMicrosoftCalendarEnabledState';
import { isMicrosoftMessagingEnabledState } from '@twenty-modules/client-config/states/isMicrosoftMessagingEnabledState';
import { useTriggerApisOAuth } from '@twenty-modules/settings/accounts/hooks/useTriggerApiOAuth';
import styled from '@emotion/styled';
import { useLingui } from '@lingui/react/macro';
import { useRecoilValue } from 'recoil';
import { ConnectedAccountProvider } from '@ui-collection-kit/twenty-shared/src/types';
import { Button } from '@twenty-ui/input';
import { Card, CardContent, CardHeader } from '@twenty-ui/layout';
import { IconGoogle, IconMicrosoft } from '@twenty-ui/display';

const StyledHeader = styled(CardHeader)`
  align-items: center;
  display: flex;
  height: ${({ theme }) => theme.spacing(6)};
`;

const StyledBody = styled(CardContent)`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(2)};
`;

type SettingsAccountsListEmptyStateCardProps = {
  label?: string;
};

export const SettingsAccountsListEmptyStateCard = ({
  label,
}: SettingsAccountsListEmptyStateCardProps) => {
  const { triggerApisOAuth } = useTriggerApisOAuth();

  const { t } = useLingui();

  const isGoogleMessagingEnabled = useRecoilValue(
    isGoogleMessagingEnabledState,
  );
  const isMicrosoftMessagingEnabled = useRecoilValue(
    isMicrosoftMessagingEnabledState,
  );

  const isGoogleCalendarEnabled = useRecoilValue(isGoogleCalendarEnabledState);

  const isMicrosoftCalendarEnabled = useRecoilValue(
    isMicrosoftCalendarEnabledState,
  );

  return (
    <Card>
      <StyledHeader>{label || t`No connected account`}</StyledHeader>
      <StyledBody>
        {(isGoogleMessagingEnabled || isGoogleCalendarEnabled) && (
          <Button
            Icon={IconGoogle}
            title={t`Connect with Google`}
            variant="secondary"
            onClick={() => triggerApisOAuth(ConnectedAccountProvider.GOOGLE)}
          />
        )}

        {(isMicrosoftMessagingEnabled || isMicrosoftCalendarEnabled) && (
          <Button
            Icon={IconMicrosoft}
            title={t`Connect with Microsoft`}
            variant="secondary"
            onClick={() => triggerApisOAuth(ConnectedAccountProvider.MICROSOFT)}
          />
        )}
      </StyledBody>
    </Card>
  );
};
