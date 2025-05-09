/* @license Enterprise */

import { Link } from 'react-router-dom';

import { SettingsPath } from '@twenty-modules/types/SettingsPath';

import { currentWorkspaceState } from '@twenty-modules/auth/states/currentWorkspaceState';
import { SettingsCard } from '@twenty-modules/settings/components/SettingsCard';
import { SettingsSSOIdentitiesProvidersListCardWrapper } from '@twenty-modules/settings/security/components/SSO/SettingsSSOIdentitiesProvidersListCardWrapper';
import { SSOIdentitiesProvidersState } from '@twenty-modules/settings/security/states/SSOIdentitiesProvidersState';
import { SnackBarVariant } from '@twenty-modules/ui/feedback/snack-bar-manager/components/SnackBar';
import { useSnackBar } from '@twenty-modules/ui/feedback/snack-bar-manager/hooks/useSnackBar';
import isPropValid from '@emotion/is-prop-valid';
import styled from '@emotion/styled';
import { useLingui } from '@lingui/react/macro';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useGetSsoIdentityProvidersQuery } from '@twenty-ui/front/generated/graphql';
import { getSettingsPath } from '@twenty-ui/front/utils/navigation/getSettingsPath';
import { IconKey } from '@twenty-ui/display';

const StyledLink = styled(Link, {
  shouldForwardProp: (prop) => isPropValid(prop) && prop !== 'isDisabled',
})<{ isDisabled: boolean }>`
  pointer-events: ${({ isDisabled }) => (isDisabled ? 'none' : 'auto')};
  text-decoration: none;
`;

export const SettingsSSOIdentitiesProvidersListCard = () => {
  const { enqueueSnackBar } = useSnackBar();

  const currentWorkspace = useRecoilValue(currentWorkspaceState);

  const { t } = useLingui();

  const [SSOIdentitiesProviders, setSSOIdentitiesProviders] = useRecoilState(
    SSOIdentitiesProvidersState,
  );

  const { loading } = useGetSsoIdentityProvidersQuery({
    fetchPolicy: 'network-only',
    skip: currentWorkspace?.hasValidEnterpriseKey === false,
    onCompleted: (data) => {
      setSSOIdentitiesProviders(data?.getSSOIdentityProviders ?? []);
    },
    onError: (error: Error) => {
      enqueueSnackBar(error.message, {
        variant: SnackBarVariant.Error,
      });
    },
  });

  return loading || !SSOIdentitiesProviders.length ? (
    <StyledLink
      to={getSettingsPath(SettingsPath.NewSSOIdentityProvider)}
      isDisabled={currentWorkspace?.hasValidEnterpriseKey !== true}
    >
      <SettingsCard
        title={t`Add SSO Identity Provider`}
        disabled={currentWorkspace?.hasValidEnterpriseKey !== true}
        Icon={<IconKey />}
      />
    </StyledLink>
  ) : (
    <SettingsSSOIdentitiesProvidersListCardWrapper />
  );
};
