import { Link, useNavigate } from 'react-router-dom';

import { SettingsPath } from '@twenty-modules/types/SettingsPath';

import { SettingsCard } from '@twenty-modules/settings/components/SettingsCard';
import { SnackBarVariant } from '@twenty-modules/ui/feedback/snack-bar-manager/components/SnackBar';
import { useSnackBar } from '@twenty-modules/ui/feedback/snack-bar-manager/hooks/useSnackBar';
import styled from '@emotion/styled';
import { useLingui } from '@lingui/react/macro';
import { useRecoilState } from 'recoil';
import { getSettingsPath } from '@twenty-ui/front/utils/navigation/getSettingsPath';
import { SettingsListCard } from '@twenty-modules/settings/components/SettingsListCard';
import { approvedAccessDomainsState } from '@twenty-modules/settings/security/states/ApprovedAccessDomainsState';
import { SettingsSecurityApprovedAccessDomainRowDropdownMenu } from '@twenty-modules/settings/security/components/approvedAccessDomains/SettingsSecurityApprovedAccessDomainRowDropdownMenu';
import { SettingsSecurityApprovedAccessDomainValidationEffect } from '@twenty-modules/settings/security/components/approvedAccessDomains/SettingsSecurityApprovedAccessDomainValidationEffect';
import { useGetApprovedAccessDomainsQuery } from '@twenty-ui/front/generated/graphql';
import { beautifyPastDateRelativeToNow } from '@twenty-ui/front/utils/date-utils';
import { IconAt, IconMailCog, Status } from '@twenty-ui/display';

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const SettingsApprovedAccessDomainsListCard = () => {
  const { enqueueSnackBar } = useSnackBar();
  const navigate = useNavigate();
  const { t } = useLingui();

  const [approvedAccessDomains, setApprovedAccessDomains] = useRecoilState(
    approvedAccessDomainsState,
  );

  const { loading } = useGetApprovedAccessDomainsQuery({
    fetchPolicy: 'network-only',
    onCompleted: (data) => {
      setApprovedAccessDomains(data?.getApprovedAccessDomains ?? []);
    },
    onError: (error: Error) => {
      enqueueSnackBar(error.message, {
        variant: SnackBarVariant.Error,
      });
    },
  });

  const getItemDescription = (createdAt: string) => {
    const beautifyPastDateRelative = beautifyPastDateRelativeToNow(createdAt);
    return t`Added ${beautifyPastDateRelative}`;
  };

  return loading || !approvedAccessDomains.length ? (
    <StyledLink to={getSettingsPath(SettingsPath.NewApprovedAccessDomain)}>
      <SettingsCard
        title={t`Add Approved Access Domain`}
        Icon={<IconMailCog />}
      />
    </StyledLink>
  ) : (
    <>
      <SettingsSecurityApprovedAccessDomainValidationEffect />
      <SettingsListCard
        items={approvedAccessDomains}
        getItemLabel={({ domain }) => domain}
        getItemDescription={({ createdAt }) => getItemDescription(createdAt)}
        RowIcon={IconAt}
        RowRightComponent={({ item: approvedAccessDomain }) => (
          <>
            {!approvedAccessDomain.isValidated && (
              <Status color="orange" text="Pending" />
            )}
            <SettingsSecurityApprovedAccessDomainRowDropdownMenu
              approvedAccessDomain={approvedAccessDomain}
            />
          </>
        )}
        hasFooter
        footerButtonLabel="Add Approved Access Domain"
        onFooterButtonClick={() =>
          navigate(getSettingsPath(SettingsPath.NewApprovedAccessDomain))
        }
      />
    </>
  );
};
